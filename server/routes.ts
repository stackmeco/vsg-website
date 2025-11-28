import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import * as fs from "fs";
import * as path from "path";
import crypto from "crypto";
import { GoogleGenAI } from "@google/genai";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long").transform(s => s.trim()),
  email: z.string().email("Invalid email address").max(254, "Email too long").transform(s => s.toLowerCase().trim()),
  organization: z.string().max(200, "Organization name too long").optional().transform(s => s?.trim()),
  role: z.string().max(100, "Role too long").optional().transform(s => s?.trim()),
  subject: z.string().min(1, "Subject is required").max(200, "Subject too long").transform(s => s.trim()),
  message: z.string().min(20, "Message must be at least 20 characters").max(5000, "Message too long").transform(s => s.trim()),
  consent: z.boolean().optional(),
});

const CONTACTS_FILE = path.join(process.cwd(), "data", "contacts.json");
const MAX_CONTACTS_FILE_SIZE = 10 * 1024 * 1024; // 10MB max file size
const CONTACTS_ROTATION_COUNT = 1000; // Rotate after 1000 entries

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 5;

const ttsRateLimitMap = new Map<string, { count: number; resetTime: number }>();
const TTS_RATE_LIMIT_WINDOW = 60 * 1000;
const TTS_RATE_LIMIT_MAX = 3;
const TTS_MAX_TEXT_LENGTH = 2000;

const fileLocks = new Map<string, Promise<void>>();

async function withFileLock<T>(filePath: string, operation: () => Promise<T>): Promise<T> {
  const existingLock = fileLocks.get(filePath);
  
  let releaseLock: () => void;
  const newLock = new Promise<void>((resolve) => {
    releaseLock = resolve;
  });
  
  fileLocks.set(filePath, newLock);
  
  if (existingLock) {
    await existingLock;
  }
  
  try {
    return await operation();
  } finally {
    releaseLock!();
    if (fileLocks.get(filePath) === newLock) {
      fileLocks.delete(filePath);
    }
  }
}

function getRateLimitKey(req: Request): string {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = typeof forwarded === "string" ? forwarded.split(",")[0].trim() : req.ip || "unknown";
  return ip;
}

function checkRateLimit(req: Request): boolean {
  const key = getRateLimitKey(req);
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

function checkTtsRateLimit(req: Request): boolean {
  const key = getRateLimitKey(req);
  const now = Date.now();
  const entry = ttsRateLimitMap.get(key);

  if (!entry || now > entry.resetTime) {
    ttsRateLimitMap.set(key, { count: 1, resetTime: now + TTS_RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= TTS_RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

const ALLOWED_HOSTS = [
  "localhost:5000",
  "localhost:3000",
  "verifiablesystems.com",
  "www.verifiablesystems.com",
];

function validateOrigin(req: Request): boolean {
  const origin = req.headers.origin;
  const referer = req.headers.referer;
  
  if (!origin && !referer) {
    return true;
  }
  
  try {
    let requestHost: string | null = null;
    
    if (origin) {
      requestHost = new URL(origin).host;
    } else if (referer) {
      requestHost = new URL(referer).host;
    }
    
    if (!requestHost) {
      return false;
    }
    
    return ALLOWED_HOSTS.some(allowed => 
      requestHost === allowed || 
      requestHost === `www.${allowed}`
    ) ||
    requestHost.endsWith(`.replit.dev`) ||
    requestHost.endsWith(`.replit.app`);
  } catch {
    return false;
  }
}

function ensureDataDir() {
  const dataDir = path.dirname(CONTACTS_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function loadContacts(): Array<Record<string, unknown>> {
  try {
    if (fs.existsSync(CONTACTS_FILE)) {
      const data = fs.readFileSync(CONTACTS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("[Contacts] Error loading contacts file:", error);
  }
  return [];
}

function rotateContactsFile(): void {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const archivePath = CONTACTS_FILE.replace(".json", `-archive-${timestamp}.json`);
    if (fs.existsSync(CONTACTS_FILE)) {
      fs.renameSync(CONTACTS_FILE, archivePath);
      console.log("[Contacts] Rotated contacts file to:", archivePath);
    }
  } catch (error) {
    console.error("[Contacts] Error rotating contacts file:", error);
  }
}

async function saveContact(contact: Record<string, unknown>): Promise<boolean> {
  return withFileLock(CONTACTS_FILE, async () => {
    try {
      ensureDataDir();
      const contacts = loadContacts();
      
      if (contacts.length >= CONTACTS_ROTATION_COUNT) {
        rotateContactsFile();
        fs.writeFileSync(CONTACTS_FILE, JSON.stringify([contact], null, 2));
      } else {
        const stats = fs.existsSync(CONTACTS_FILE) ? fs.statSync(CONTACTS_FILE) : null;
        if (stats && stats.size >= MAX_CONTACTS_FILE_SIZE) {
          rotateContactsFile();
          fs.writeFileSync(CONTACTS_FILE, JSON.stringify([contact], null, 2));
        } else {
          contacts.push(contact);
          fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
        }
      }
      return true;
    } catch (error) {
      console.error("[Contacts] Error saving contact:", error);
      return false;
    }
  });
}

function sanitizeString(str: string): string {
  return str
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "");
}

export async function registerRoutes(app: Express): Promise<Server> {
  ensureDataDir();

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      if (!validateOrigin(req)) {
        console.warn("[Contact Form] Invalid origin:", req.headers.origin || req.headers.referer);
        res.status(403).json({
          success: false,
          message: "Request not allowed from this origin.",
        });
        return;
      }

      if (!checkRateLimit(req)) {
        console.warn("[Contact Form] Rate limit exceeded for:", getRateLimitKey(req));
        res.status(429).json({
          success: false,
          message: "Too many requests. Please try again in a minute.",
        });
        return;
      }

      const validated = contactSchema.parse(req.body);

      const contactEntry = {
        id: crypto.randomBytes(8).toString("hex"),
        timestamp: new Date().toISOString(),
        ip: getRateLimitKey(req),
        userAgent: req.headers["user-agent"] || "unknown",
        name: sanitizeString(validated.name),
        email: validated.email,
        organization: validated.organization ? sanitizeString(validated.organization) : null,
        role: validated.role ? sanitizeString(validated.role) : null,
        subject: sanitizeString(validated.subject),
        message: sanitizeString(validated.message),
        consent: validated.consent || false,
      };

      const saved = await saveContact(contactEntry);

      if (!saved) {
        res.status(500).json({
          success: false,
          message: "Failed to save your message. Please try again.",
        });
        return;
      }

      console.log("[Contact Form] New submission saved:", {
        id: contactEntry.id,
        timestamp: contactEntry.timestamp,
        name: contactEntry.name,
        email: contactEntry.email,
        subject: contactEntry.subject,
      });

      res.json({
        success: true,
        message: "Message received successfully",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      } else {
        console.error("[Contact Form Error]", error);
        res.status(500).json({
          success: false,
          message: "An error occurred processing your request",
        });
      }
    }
  });

  app.post("/api/tts", async (req: Request, res: Response) => {
    try {
      if (!validateOrigin(req)) {
        console.warn("[TTS] Invalid origin:", req.headers.origin || req.headers.referer);
        res.status(403).json({ error: "Request not allowed from this origin" });
        return;
      }

      if (!checkTtsRateLimit(req)) {
        console.warn("[TTS] Rate limit exceeded for:", getRateLimitKey(req));
        res.status(429).json({ error: "Too many requests. Please try again in a minute." });
        return;
      }

      const { text } = req.body;
      
      if (!text || typeof text !== "string") {
        res.status(400).json({ error: "Text is required" });
        return;
      }

      if (text.length > TTS_MAX_TEXT_LENGTH) {
        res.status(400).json({ error: `Text too long (max ${TTS_MAX_TEXT_LENGTH} characters)` });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("[TTS] Missing GEMINI_API_KEY");
        res.status(500).json({ error: "TTS service not configured" });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [
          {
            role: "user",
            parts: [{ text: `Read the following text in a calm, professional tone:\n\n${text}` }],
          },
        ],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: "Kore",
              },
            },
          },
        },
      });

      const candidates = response.candidates;
      if (!candidates || candidates.length === 0) {
        console.error("[TTS] No candidates in response");
        res.status(500).json({ error: "No audio generated" });
        return;
      }

      const content = candidates[0].content;
      if (!content || !content.parts) {
        console.error("[TTS] No content parts in response:", JSON.stringify(candidates[0]));
        res.status(500).json({ error: "Invalid response format" });
        return;
      }

      for (const part of content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const audioData = Buffer.from(part.inlineData.data, "base64");
          console.log("[TTS] Audio generated, size:", audioData.length);
          res.set({
            "Content-Type": "audio/L16;rate=24000",
            "Content-Length": audioData.length.toString(),
          });
          res.send(audioData);
          return;
        }
      }

      console.error("[TTS] No inline data in parts:", JSON.stringify(content.parts));
      res.status(500).json({ error: "No audio data in response" });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      console.error("[TTS Error]", errorMessage, error);
      res.status(500).json({ error: `Failed to generate audio: ${errorMessage}` });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
