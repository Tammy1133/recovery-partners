import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Shield, Search, FileText, Scale, Lock, Globe,
  TrendingDown, Heart, CreditCard, Landmark, Wifi, ArrowRight,
  CheckCircle2, Eye, Users, Award
} from "lucide-react";

const trustStats = [
  { icon: Award, value: "15+", label: "Years of Experience" },
  { icon: TrendingDown, value: "$200M+", label: "In Investigated Cases" },
  { icon: Globe, value: "40+", label: "Jurisdictions Covered" },
  { icon: Lock, value: "100%", label: "Confidential Handling" },
];

const steps = [
  { icon: FileText, title: "Case Evaluation", desc: "We review your situation, evidence, and the nature of the fraud to assess viability." },
  { icon: Search, title: "Investigation & Tracing", desc: "Our forensic team traces transactions, identifies entities, and builds a recovery file." },
  { icon: Scale, title: "Recovery Strategy", desc: "We coordinate with legal partners, institutions, and regulators to pursue resolution." },
  { icon: CheckCircle2, title: "Resolution", desc: "Funds are recovered through negotiation, legal action, or institutional intervention." },
];

const scamTypes = [
  { icon: Landmark, title: "Cryptocurrency Scams", desc: "Fraudulent exchanges, Ponzi schemes, and fake ICOs." },
  { icon: TrendingDown, title: "Forex & Trading Fraud", desc: "Unregulated brokers and manipulated platforms." },
  { icon: Heart, title: "Romance Scams", desc: "Emotional manipulation leading to financial exploitation." },
  { icon: CreditCard, title: "Investment Fraud", desc: "Fraudulent investment opportunities and pyramid schemes." },
  { icon: CreditCard, title: "Chargeback & Card Fraud", desc: "Unauthorized transactions and merchant disputes." },
  { icon: Wifi, title: "Phishing & Impersonation", desc: "Identity theft and social engineering attacks." },
];

const reasons = [
  { icon: Scale, title: "Legal-Grade Process", desc: "Our methodology meets the evidentiary standards required by financial institutions and regulators." },
  { icon: Eye, title: "Forensic Expertise", desc: "Advanced blockchain analytics, transaction tracing, and digital forensics capabilities." },
  { icon: Shield, title: "Regulatory Compliance", desc: "We operate within legal frameworks across all jurisdictions we serve." },
  { icon: Users, title: "Dedicated Case Teams", desc: "Every case receives a dedicated team of investigators, analysts, and legal coordinators." },
];

const caseOutcomes = [
  { type: "Cryptocurrency Fraud", amount: "$340,000", status: "Funds Recovered", timeline: "14 weeks" },
  { type: "Investment Fraud", amount: "$1.2M", status: "Partial Recovery", timeline: "8 months" },
  { type: "Romance Scam", amount: "$85,000", status: "Funds Recovered", timeline: "6 weeks" },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 container-wide mx-auto px-4 lg:px-8 py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-6 animate-fade-in">
            Financial Recovery & Investigation
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Recovering What Was Taken.{" "}
            <span className="text-gradient-gold">Restoring What Matters.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professional fund recovery services for victims of online fraud. Discreet, compliant, and results-driven financial investigation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/eligibility">Check If You're Eligible for Recovery</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Speak With a Recovery Specialist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-navy border-y border-navy-light/30">
        <div className="container-wide mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-6 w-6 text-gold mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-serif font-bold text-cream">{stat.value}</div>
                <div className="text-xs text-cream/50 mt-1 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Recovery Works */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="Our Process"
            title="How Recovery Works"
            description="A transparent, step-by-step approach grounded in forensic analysis and legal compliance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-navy text-gold font-sans font-bold text-sm">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-3 h-4 w-4 text-gold/30" />
                  )}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Types */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="Areas of Expertise"
            title="Types of Scams We Handle"
            description="We investigate and pursue recovery across a wide spectrum of digital financial fraud."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scamTypes.map((scam, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-6 hover:border-gold/30 hover:shadow-md transition-all duration-300 group">
                <scam.icon className="h-8 w-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{scam.title}</h3>
                <p className="text-sm text-muted-foreground">{scam.desc}</p>
                <Link to="/scam-types" className="inline-flex items-center gap-1 text-sm font-medium text-gold mt-4 hover:underline">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy">
        <div className="container-wide mx-auto">
          <SectionHeading light label="Why Sentinel Recovery" title="Built on Integrity, Driven by Results" description="We combine investigative rigor with legal expertise to pursue every viable recovery path." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-lg border border-navy-light/30 bg-navy-light/20">
                <r.icon className="h-8 w-8 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-cream mb-2">{r.title}</h3>
                  <p className="text-sm text-cream/60 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Outcomes */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading label="Success Framework" title="Anonymized Case Outcomes" description="Real outcomes from our casework. Individual results vary based on case specifics." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseOutcomes.map((c, i) => (
              <div key={i} className="border border-border rounded-lg p-6 bg-card">
                <span className="text-xs font-semibold tracking-wider uppercase text-gold">{c.type}</span>
                <div className="text-2xl font-serif font-bold text-foreground mt-2">{c.amount}</div>
                <div className="flex items-center gap-2 mt-3">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-foreground">{c.status}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Timeline: {c.timeline}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Past outcomes do not guarantee future results. Each case is unique and subject to jurisdictional and evidentiary factors.
          </p>
        </div>
      </section>

      {/* Client Confidentiality */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto text-center">
          <Lock className="h-10 w-10 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Client Confidentiality & Ethics</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every case is handled with the utmost discretion. We adhere to strict data protection standards, maintain privileged communication protocols, and never disclose client information without explicit consent. Our ethical framework is non-negotiable.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-navy">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-4">
            Ready to Explore Your Recovery Options?
          </h2>
          <p className="text-cream/60 mb-8 max-w-xl mx-auto">
            Begin with a confidential, no-obligation case evaluation. Our specialists will assess your situation and outline potential next steps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/eligibility">Start Your Case Evaluation</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Contact Us Directly</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Regulatory Disclaimer */}
      <section className="bg-navy-dark py-8">
        <div className="container-narrow mx-auto px-4 text-center">
          <p className="text-[11px] text-cream/25 leading-relaxed">
            Sentinel Recovery Group provides financial investigation and recovery assistance services. We are not a law firm, and our services do not constitute legal advice. Recovery outcomes are not guaranteed and depend on individual case circumstances, available evidence, jurisdictional factors, and the cooperation of relevant institutions. All claims on this website are based on our professional experience and should not be construed as promises or guarantees of specific outcomes.
          </p>
        </div>
      </section>
    </>
  );
}
