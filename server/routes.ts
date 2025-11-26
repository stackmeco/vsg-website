import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  role: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  consent: z.boolean().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validated = contactSchema.parse(req.body);
      
      console.log("[Contact Form Submission]", {
        timestamp: new Date().toISOString(),
        name: validated.name,
        email: validated.email,
        organization: validated.organization || "N/A",
        role: validated.role || "N/A",
        subject: validated.subject,
        message: validated.message.substring(0, 100) + "...",
        consent: validated.consent || false,
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

  const httpServer = createServer(app);
  return httpServer;
}
