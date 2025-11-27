import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address").max(254, "Email too long"),
  organization: z.string().max(200, "Organization name too long").optional(),
  role: z.string().max(100, "Role too long").optional(),
  subject: z.string().min(1, "Subject is required").max(200, "Subject too long"),
  message: z.string().min(20, "Message must be at least 20 characters").max(5000, "Message too long"),
  consent: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
