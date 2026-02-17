import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import { Mail, Globe, Shield, Lock, CheckCircle2, MessageSquare } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-navy section-padding">
        <div className="container-wide mx-auto text-center">
          <SectionHeading
            light
            label="Contact"
            title="Get in Touch"
            description="Reach out for a confidential discussion about your situation. All communications are handled with the utmost discretion."
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">inquiries@sentinelrecovery.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Global Operations</p>
                      <p className="text-sm text-muted-foreground">Offices across North America, Europe, and Asia-Pacific</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Secure Communication</p>
                      <p className="text-sm text-muted-foreground">All communications are encrypted and confidential</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream border border-border rounded-lg p-6">
                <MessageSquare className="h-6 w-6 text-gold mb-3" />
                <h4 className="font-sans font-semibold text-sm text-foreground mb-2">Prefer a Direct Conversation?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For urgent matters or if you prefer to speak directly with a recovery specialist, please include your phone number and preferred time in your message.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in">
                  <CheckCircle2 className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Message Sent</h3>
                  <p className="text-muted-foreground">We'll respond within 1 business day. Thank you for reaching out.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-sm font-medium">Full Name *</Label>
                      <Input className="mt-1.5" placeholder="Your full name" value={form.name} onChange={(e) => update("name", e.target.value)} />
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Email Address *</Label>
                      <Input type="email" className="mt-1.5" placeholder="your@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Subject</Label>
                    <Input className="mt-1.5" placeholder="How can we help?" value={form.subject} onChange={(e) => update("subject", e.target.value)} />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Message *</Label>
                    <Textarea className="mt-1.5" rows={6} placeholder="Please describe your situation or inquiry..." value={form.message} onChange={(e) => update("message", e.target.value)} />
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3 w-3 mt-0.5 shrink-0" />
                    <span>Your message is encrypted and handled confidentially. We will never share your information with third parties.</span>
                  </div>
                  <Button variant="gold" size="lg" type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
