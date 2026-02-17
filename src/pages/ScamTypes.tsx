import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Landmark, TrendingDown, Heart, CreditCard, Wifi, ArrowRight, AlertTriangle, Search, Scale, ShieldAlert } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const scamData = [
  {
    id: "crypto",
    icon: Landmark,
    title: "Cryptocurrency Scams",
    how: "Fraudsters create fake exchanges, Ponzi schemes, rug-pulls, or impersonate legitimate platforms. Victims are convinced to deposit funds into wallets controlled by criminals, often with promises of guaranteed returns.",
    recovery: "Blockchain transactions are traceable. Through forensic analysis, we can identify wallet addresses, track fund movements across exchanges, and work with law enforcement and compliant exchanges to freeze and recover assets.",
    limitations: "Recovery depends on whether funds have been moved to identifiable, regulated entities. Fully anonymized or mixed funds present significant challenges.",
    process: "We perform full blockchain forensic analysis, prepare reports suitable for law enforcement, and coordinate with exchanges and legal partners globally."
  },
  {
    id: "forex",
    icon: TrendingDown,
    title: "Forex & Trading Scams",
    how: "Unregulated brokers manipulate trading platforms, fabricate profits, and prevent withdrawals. Many operate from jurisdictions with limited regulatory oversight.",
    recovery: "We identify the true operators, trace payment pathways through banks and payment processors, and file regulatory complaints with relevant financial authorities.",
    limitations: "Recovery rates vary significantly based on the jurisdiction of the broker and the payment methods used. Credit card payments may offer chargeback options.",
    process: "We analyze trading records, identify regulatory violations, and pursue recovery through institutional and legal channels."
  },
  {
    id: "romance",
    icon: Heart,
    title: "Romance Scams",
    how: "Criminals build emotional relationships over weeks or months, then fabricate emergencies or investment opportunities to extract money. Payments are often via wire transfer, cryptocurrency, or gift cards.",
    recovery: "We trace payment flows, identify criminal networks, and work with law enforcement. In cases involving bank transfers, we may be able to initiate recall processes.",
    limitations: "Gift card and cryptocurrency payments are harder to recover. Early reporting significantly improves outcomes.",
    process: "We document the fraud timeline, trace all payments, and coordinate with banks and law enforcement agencies."
  },
  {
    id: "investment",
    icon: CreditCard,
    title: "Investment Fraud",
    how: "Fraudulent investment schemes promise above-market returns. They may operate as Ponzi schemes, fake hedge funds, or unregistered securities offerings.",
    recovery: "We investigate the corporate structures, trace fund flows, and work with securities regulators. In some cases, court-ordered asset freezes can be obtained.",
    limitations: "Complex corporate structures across multiple jurisdictions can extend timelines. Liquidated assets may result in partial recovery.",
    process: "Corporate due diligence, financial forensics, regulatory filings, and coordination with legal counsel for asset recovery proceedings."
  },
  {
    id: "chargeback",
    icon: CreditCard,
    title: "Chargeback & Card Fraud",
    how: "Unauthorized transactions, merchant fraud, or failure to deliver goods/services. Criminals may also use stolen card details for purchases.",
    recovery: "We prepare comprehensive chargeback cases that meet card network standards, document evidence, and liaise with banks and payment processors.",
    limitations: "Chargeback windows are time-limited. Claims filed beyond the standard period may be rejected. Documentation quality significantly impacts outcomes.",
    process: "Evidence compilation, dispute filing, bank liaison, and escalation to card network arbitration if needed."
  },
  {
    id: "wire",
    icon: ShieldAlert,
    title: "Wire Transfer Fraud",
    how: "Business email compromise, invoice fraud, or impersonation schemes that trick victims into wiring funds to criminal accounts.",
    recovery: "Rapid response is critical. We initiate bank recall processes, file law enforcement reports, and trace funds through the banking system.",
    limitations: "Success rates decline sharply after 72 hours. International wire transfers through non-cooperative jurisdictions are particularly challenging.",
    process: "Immediate bank notification, recall initiation, law enforcement coordination, and cross-border tracing where applicable."
  },
  {
    id: "phishing",
    icon: Wifi,
    title: "Phishing & Impersonation",
    how: "Criminals impersonate trusted entities—banks, government agencies, or service providers—to steal credentials, personal information, or direct payments.",
    recovery: "We work with institutions to reverse unauthorized transactions, assist with identity theft remediation, and trace criminal infrastructure.",
    limitations: "Stolen data cannot be \"uncompromised.\" Financial recovery depends on how funds were extracted and through which channels.",
    process: "Incident analysis, institutional coordination, identity protection guidance, and financial recovery where applicable."
  },
];

export default function ScamTypes() {
  return (
    <>
      <section className="bg-navy section-padding">
        <div className="container-wide mx-auto text-center">
          <SectionHeading
            light
            label="Areas of Expertise"
            title="Types of Scams We Investigate"
            description="Understanding the fraud is the first step toward recovery. We handle a comprehensive range of digital financial fraud."
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {scamData.map((scam) => (
              <AccordionItem key={scam.id} value={scam.id} className="border border-border rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-4 text-left">
                    <scam.icon className="h-6 w-6 text-gold shrink-0" />
                    <span className="font-serif text-lg font-semibold">{scam.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-gold" />
                        <h4 className="font-sans font-semibold text-sm text-foreground">How This Scam Works</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{scam.how}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Search className="h-4 w-4 text-gold" />
                        <h4 className="font-sans font-semibold text-sm text-foreground">How Recovery Is Possible</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{scam.recovery}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Scale className="h-4 w-4 text-gold" />
                        <h4 className="font-sans font-semibold text-sm text-foreground">Limitations & Realities</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{scam.limitations}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldAlert className="h-4 w-4 text-gold" />
                        <h4 className="font-sans font-semibold text-sm text-foreground">Our Investigation Process</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{scam.process}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-cream mb-4">Not Sure Which Category Applies?</h2>
          <p className="text-cream/60 mb-8">Every case is unique. Contact us for a confidential assessment of your situation.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/eligibility">Start Your Case Evaluation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
