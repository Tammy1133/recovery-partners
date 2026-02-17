import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Target, Eye, Scale, Globe, Lock, Users, ArrowRight } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with unwavering honesty. If a case is not viable, we say so. We do not make promises we cannot keep." },
  { icon: Eye, title: "Transparency", desc: "Our clients understand exactly what we do, how we do it, and what it costs. No hidden fees, no surprises." },
  { icon: Lock, title: "Confidentiality", desc: "Every detail of every case is handled with the highest level of discretion and data protection." },
  { icon: Scale, title: "Compliance", desc: "We operate within legal and regulatory frameworks in every jurisdiction we serve." },
];

export default function About() {
  return (
    <>
      <section className="bg-navy section-padding">
        <div className="container-wide mx-auto text-center">
          <SectionHeading
            light
            label="About Us"
            title="A Trusted Authority in Financial Recovery"
            description="Sentinel Recovery Group was founded on the belief that victims of financial fraud deserve professional, ethical, and effective assistance in recovering their assets."
          />
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 block">Our Mission</span>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Pursuing Justice Through Investigation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We exist to help individuals and organizations who have been defrauded navigate the complex landscape of financial recovery. Our team combines expertise in financial forensics, regulatory compliance, and legal coordination to pursue every viable recovery path.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not promise guaranteed outcomes. What we promise is professionalism, diligence, and honesty at every stage.
              </p>
            </div>
            <div className="bg-cream border border-border rounded-lg p-8">
              <Target className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Professional Background</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" /> Financial investigation and forensic analysis</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" /> Regulatory compliance and anti-money laundering</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" /> Blockchain analytics and cryptocurrency tracing</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" /> Cross-border legal coordination</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" /> Cybersecurity and digital evidence preservation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading label="Our Values" title="What We Stand For" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
                <v.icon className="h-8 w-8 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="section-padding bg-navy">
        <div className="container-narrow mx-auto text-center">
          <Globe className="h-10 w-10 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-semibold text-cream mb-4">Global Reach, Local Expertise</h2>
          <p className="text-cream/60 max-w-2xl mx-auto leading-relaxed mb-6">
            We work with a network of legal and financial professionals across multiple jurisdictions. This allows us to pursue recovery actions in the regions where fraud occurred and where assets may be held—regardless of where our clients are located.
          </p>
          <div className="flex items-center justify-center gap-8 text-cream/40 text-sm">
            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" /> 40+ Jurisdictions</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-gold" /> Regulated Partners</div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Work With Us</h2>
          <p className="text-muted-foreground mb-8">Begin with a confidential, no-obligation case evaluation.</p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/eligibility">Start Your Evaluation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
