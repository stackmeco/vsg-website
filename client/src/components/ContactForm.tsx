import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, AlertCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  className?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    subject: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide a bit more detail (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        await apiRequest("POST", "/api/contact", {
          name: formData.name,
          email: formData.email,
          organization: formData.organization || undefined,
          role: formData.role || undefined,
          subject: formData.subject,
          message: formData.message,
          consent: formData.consent,
        });
        setSubmitted(true);
        toast({
          title: "Message received",
          description: "We'll respond if it's a clear fit for the studio.",
        });
      } catch (error) {
        const errorMessage = "Failed to send message. Please try again.";
        setSubmitError(errorMessage);
        toast({
          variant: "destructive",
          title: "Submission failed",
          description: errorMessage,
        });
        console.error("Contact form error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (submitted) {
    const refId = Math.random().toString(16).slice(2, 10).toUpperCase();
    return (
      <div
        className={cn(
          "bg-primary/5 border border-primary/20 rounded-[2px] p-8 text-center",
          className
        )}
        data-testid="contact-form-success"
      >
        <div className="w-12 h-12 rounded-[2px] bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-mono text-sm uppercase tracking-wider text-primary mb-3">
          SUBMISSION RECEIVED
        </h3>
        <p className="text-muted-foreground mb-4">
          Your inquiry has been recorded for review. We will contact you if there is strategic alignment.
        </p>
        <p className="text-xs font-mono text-muted-foreground/70">
          Reference ID: <span className="text-primary">{refId}</span>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "bg-card border border-card-border rounded-[2px] p-6 sm:p-8",
        className
      )}
      data-testid="contact-form"
      noValidate
    >
      {/* Honeypot field - hidden from users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <Input
          type="text"
          name="website"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              data-testid="input-name"
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              data-testid="input-email"
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              placeholder="Your company or protocol"
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
              data-testid="input-organization"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              placeholder="Your role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              data-testid="input-role"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">
            Subject <span className="text-destructive">*</span>
          </Label>
          <Input
            id="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: undefined });
            }}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            data-testid="input-subject"
          />
          {errors.subject && (
            <p id="subject-error" className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.subject}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="How can we help?"
            rows={5}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="resize-none"
            data-testid="input-message"
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, consent: checked === true })
            }
            data-testid="checkbox-consent"
          />
          <Label
            htmlFor="consent"
            className="text-sm text-muted-foreground font-normal cursor-pointer"
          >
            You may contact me with occasional updates about VSG's work.
          </Label>
        </div>

        {submitError && (
          <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {submitError}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <Button type="submit" disabled={isSubmitting} data-testid="button-submit">
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-1 bg-current animate-pulse" />
                Sending<span className="animate-pulse">_</span>
              </span>
            ) : (
              "Send Message"
            )}
          </Button>
          <p className="text-xs text-muted-foreground">
            We never share your information with third parties.
          </p>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
