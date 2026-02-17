import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/SectionHeading";
import { Shield, CheckCircle2, ArrowRight, ArrowLeft, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const scamTypeOptions = [
  "Cryptocurrency Scam",
  "Forex / Trading Scam",
  "Romance Scam",
  "Investment Fraud",
  "Chargeback / Card Fraud",
  "Wire Transfer Fraud",
  "Phishing / Impersonation",
  "Other",
];

const amountOptions = [
  "Under $10,000",
  "$10,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $500,000",
  "$500,000 – $1,000,000",
  "Over $1,000,000",
];

const paymentMethods = [
  "Bank Transfer / Wire",
  "Credit Card",
  "Debit Card",
  "Cryptocurrency",
  "Gift Cards",
  "Payment App (PayPal, Zelle, etc.)",
  "Other",
];

const totalSteps = 3;

export default function Eligibility() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const [form, setForm] = useState({
    scamType: "",
    amountLost: "",
    dateOfIncident: "",
    paymentMethod: "",
    country: "",
    description: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const canProceed = () => {
    if (step === 1) return form.scamType && form.amountLost && form.dateOfIncident;
    if (step === 2) return form.paymentMethod && form.country;
    if (step === 3) return form.fullName && form.email;
    return false;
  };

  const handleSubmit = () => {
    if (!canProceed()) {
      toast({ title: "Please complete all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-navy section-padding" />
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto text-center">
            <CheckCircle2 className="h-16 w-16 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Case Evaluation Submitted</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
              Thank you for providing your case details. A member of our team will review your submission and contact you within 1–2 business days with an initial assessment.
            </p>
            <div className="bg-cream border border-border rounded-lg p-6 max-w-md mx-auto text-left">
              <h3 className="font-sans font-semibold text-sm text-foreground mb-3">What Happens Next:</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Our team reviews your case details</li>
                <li>A specialist will contact you via your preferred method</li>
                <li>We'll provide an honest initial assessment</li>
                <li>If viable, we'll outline next steps and fee structure</li>
              </ol>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>Your information is encrypted and handled confidentially</span>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-navy section-padding pb-10">
        <div className="container-narrow mx-auto text-center">
          <SectionHeading
            light
            label="Case Evaluation"
            title="Check Your Eligibility for Recovery"
            description="Complete this confidential form to receive a preliminary assessment of your case. No obligation, no cost for initial evaluation."
          />
        </div>
      </section>

      <section className="section-padding bg-background -mt-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  step >= s ? "bg-navy text-gold" : "bg-muted text-muted-foreground"
                }`}>
                  {s}
                </div>
                {s < totalSteps && <div className={`w-12 h-0.5 ${step > s ? "bg-gold" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-serif text-xl font-semibold text-foreground">Incident Details</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Type of Scam *</Label>
                    <Select value={form.scamType} onValueChange={(v) => update("scamType", v)}>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select scam type" /></SelectTrigger>
                      <SelectContent>
                        {scamTypeOptions.map((opt) => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Approximate Amount Lost *</Label>
                    <Select value={form.amountLost} onValueChange={(v) => update("amountLost", v)}>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select range" /></SelectTrigger>
                      <SelectContent>
                        {amountOptions.map((opt) => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Approximate Date of Incident *</Label>
                    <Input type="date" className="mt-1.5" value={form.dateOfIncident} onChange={(e) => update("dateOfIncident", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-serif text-xl font-semibold text-foreground">Payment & Location</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Payment Method Used *</Label>
                    <Select value={form.paymentMethod} onValueChange={(v) => update("paymentMethod", v)}>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select method" /></SelectTrigger>
                      <SelectContent>
                        {paymentMethods.map((opt) => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Your Country *</Label>
                    <Input className="mt-1.5" placeholder="e.g., United States" value={form.country} onChange={(e) => update("country", e.target.value)} />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Brief Description of the Incident</Label>
                    <Textarea className="mt-1.5" rows={4} placeholder="Please provide a summary of what happened..." value={form.description} onChange={(e) => update("description", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-serif text-xl font-semibold text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Full Name *</Label>
                    <Input className="mt-1.5" placeholder="Your full name" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Email Address *</Label>
                    <Input type="email" className="mt-1.5" placeholder="your@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Phone Number (Optional)</Label>
                    <Input className="mt-1.5" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                  </div>
                </div>
                <div className="bg-cream border border-border rounded p-4 text-xs text-muted-foreground leading-relaxed">
                  <Shield className="h-4 w-4 text-gold inline mr-1" />
                  <strong>Privacy Notice:</strong> Your personal information is handled in strict confidence and in accordance with our privacy policy. We will never share your details with third parties without your explicit consent. Submitting this form does not create a contractual obligation.
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button variant="ghost" disabled={step === 1} onClick={() => setStep(step - 1)}>
                <ArrowLeft className="h-4 w-4 mr-1" /> Back
              </Button>
              {step < totalSteps ? (
                <Button variant="navy" disabled={!canProceed()} onClick={() => setStep(step + 1)}>
                  Continue <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button variant="gold" disabled={!canProceed()} onClick={handleSubmit}>
                  Submit Evaluation
                </Button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            <span>256-bit SSL encrypted • Confidential handling</span>
          </div>
        </div>
      </section>
    </>
  );
}
