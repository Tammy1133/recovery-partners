import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { FileText, Search, Scale, CheckCircle2, Clock, Upload, ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react";

const processSteps = [
  {
    icon: FileText,
    step: "01",
    title: "Case Evaluation",
    desc: "We conduct a thorough initial assessment of your case, including the type of fraud, amounts involved, payment methods used, and available evidence. This allows us to determine the viability of recovery and outline realistic expectations.",
    timeline: "1–3 business days",
    clientAction: "Submit case details through our secure evaluation form.",
  },
  {
    icon: Search,
    step: "02",
    title: "Evidence & Transaction Analysis",
    desc: "Our forensic team analyzes all available evidence—transaction records, communications, blockchain data, bank statements—to build a comprehensive picture of the fraud and identify recovery pathways.",
    timeline: "1–2 weeks",
    clientAction: "Provide all relevant documentation, transaction receipts, and communication records.",
  },
  {
    icon: Scale,
    step: "03",
    title: "Legal & Forensic Tracing",
    desc: "We trace fund movements through financial institutions, blockchain networks, and payment processors. Our legal partners prepare necessary filings and coordinate with regulators where applicable.",
    timeline: "2–8 weeks (varies by complexity)",
    clientAction: "Authorize formal investigation. May require signing legal documents.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Recovery Strategy & Execution",
    desc: "Based on our findings, we pursue the most effective recovery strategy—whether through institutional negotiation, regulatory complaint, chargeback process, or legal action.",
    timeline: "Ongoing until resolution",
    clientAction: "Review and approve recommended strategy.",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Resolution or Escalation",
    desc: "We pursue recovery to conclusion. If initial strategies are unsuccessful, we explore escalation options including cross-border legal proceedings, regulatory escalation, or alternative dispute resolution.",
    timeline: "Case-dependent",
    clientAction: "Decision on escalation options if applicable.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="bg-navy section-padding">
        <div className="container-wide mx-auto text-center">
          <SectionHeading
            light
            label="Our Process"
            title="How Recovery Works"
            description="A transparent, structured approach to fund recovery. We believe you deserve to understand exactly how we work."
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-gold font-sans font-bold text-sm">
                      {step.step}
                    </span>
                    {i < processSteps.length - 1 && <div className="w-px h-8 bg-border mt-2 hidden md:block" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Timeline</span>
                          <p className="text-sm text-muted-foreground">{step.timeline}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Upload className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-semibold text-foreground uppercase tracking-wider">What You Provide</span>
                          <p className="text-sm text-muted-foreground">{step.clientAction}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <SectionHeading label="Transparency" title="What You Should Know" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <AlertTriangle className="h-6 w-6 text-gold mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">Recovery Is Not Guaranteed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are transparent about the challenges of fund recovery. Success depends on multiple factors including the type of fraud, time elapsed, jurisdiction, and available evidence. We will always provide an honest assessment.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <Clock className="h-6 w-6 text-gold mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">Timelines Vary</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Simple chargeback cases may resolve in weeks. Complex cross-border fraud investigations can take months. We provide realistic timeline estimates at each stage and keep you informed throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-cream mb-4">Ready to Begin?</h2>
          <p className="text-cream/60 mb-8">Start with a free, confidential case evaluation.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/eligibility">Check Your Eligibility <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
