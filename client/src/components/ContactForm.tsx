import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    topic: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "bg-card border border-card-border rounded-xl p-8 text-center",
          className
        )}
        data-testid="contact-form-success"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-6 h-6 text-emerald-500" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
          Thank you.
        </h3>
        <p className="text-muted-foreground">
          We've received your message and will respond if it's a clear fit for
          the studio.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "bg-card border border-card-border rounded-xl p-6 sm:p-8",
        className
      )}
      data-testid="contact-form"
    >
      <div className="grid gap-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              data-testid="input-name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              data-testid="input-email"
            />
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
          <Label htmlFor="topic">Topic</Label>
          <Select
            value={formData.topic}
            onValueChange={(value) => setFormData({ ...formData, topic: value })}
          >
            <SelectTrigger id="topic" data-testid="select-topic">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pilot">Pilot / POC</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="media">Media / Speaking</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="How can we help?"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="resize-none"
            data-testid="input-message"
          />
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

        <Button type="submit" className="w-full sm:w-auto" data-testid="button-submit">
          Send Message
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
