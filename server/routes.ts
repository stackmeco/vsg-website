import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import * as fs from "fs";
import * as path from "path";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  role: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  consent: z.boolean().optional(),
});

const CONTACTS_FILE = path.join(process.cwd(), "data", "contacts.json");

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

function saveContact(contact: Record<string, unknown>) {
  ensureDataDir();
  const contacts = loadContacts();
  contacts.push(contact);
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validated = contactSchema.parse(req.body);
      
      const contactEntry = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        timestamp: new Date().toISOString(),
        name: validated.name,
        email: validated.email,
        organization: validated.organization || null,
        role: validated.role || null,
        subject: validated.subject,
        message: validated.message,
        consent: validated.consent || false,
      };

      saveContact(contactEntry);

      console.log("[Contact Form] New submission saved:", {
        id: contactEntry.id,
        timestamp: contactEntry.timestamp,
        name: contactEntry.name,
        email: contactEntry.email,
        subject: contactEntry.subject,
      });

      res.json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        console.error("[Contact Form Error]", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred processing your request" 
        });
      }
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = loadContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      console.error("[Contacts] Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error fetching contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
