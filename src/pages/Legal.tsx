import SectionHeading from "@/components/SectionHeading";
import { Scale, AlertTriangle, Globe, Shield, FileText, Users } from "lucide-react";

const sections = [
  {
    icon: AlertTriangle,
    title: "No Guarantee Disclaimer",
    content: `Strategic Restitution ("the Company") does not guarantee the recovery of any funds. All recovery efforts are conducted on a best-efforts basis. The outcome of any case depends on numerous factors including, but not limited to, the nature and complexity of the fraud, the time elapsed since the fraudulent activity, the jurisdictions involved, the availability of evidence, and the cooperation of relevant financial institutions and regulatory bodies.

Any information provided on this website, including success rates, case outcomes, or recovery amounts, is based on historical data and should not be construed as a guarantee or prediction of future results. Past performance does not guarantee future outcomes.`
  },
  {
    icon: Globe,
    title: "Jurisdictional Limitations",
    content: `Our services are subject to the laws and regulations of the jurisdictions in which we operate. Recovery efforts may be limited or impossible in certain jurisdictions due to local laws, regulatory frameworks, or the absence of bilateral agreements.

The Company operates through a network of legal and financial professionals in multiple jurisdictions. However, we cannot guarantee the availability of recovery mechanisms in all regions. Clients are advised that cross-border recovery efforts may involve additional complexity, cost, and time.

The applicability of any legal process, including but not limited to court orders, asset freezes, and regulatory complaints, is determined by the specific jurisdiction and the circumstances of each case.`
  },
  {
    icon: Scale,
    title: "Compliance Standards",
    content: `Strategic Restitution is committed to operating in full compliance with all applicable laws and regulations. This includes, but is not limited to:

• Anti-Money Laundering (AML) regulations
• Know Your Customer (KYC) requirements
• Data protection and privacy laws (including GDPR-equivalent standards)
• Consumer protection regulations
• Financial services regulations in applicable jurisdictions

We conduct due diligence on all cases to ensure that our services are not being used for unlawful purposes. We reserve the right to decline any case that we believe may involve illegal activity, conflicts of interest, or ethical concerns.`
  },
  {
    icon: Users,
    title: "Client Responsibilities",
    content: `Clients engaging our services are responsible for:

• Providing accurate, truthful, and complete information about their case
• Cooperating with our investigation team and providing requested documentation in a timely manner
• Disclosing all relevant facts, including any prior recovery attempts or legal proceedings
• Notifying us of any changes in circumstances that may affect the case
• Complying with all applicable laws in their jurisdiction
• Not engaging in any activity that could compromise the investigation or recovery process

The Company reserves the right to terminate its engagement if a client fails to meet these responsibilities or provides false or misleading information.`
  },
  {
    icon: Shield,
    title: "Data Protection & Privacy",
    content: `We take the protection of personal data seriously and process all personal information in accordance with applicable data protection laws.

Data Collection: We collect only the information necessary to evaluate and pursue your case. This may include personal identification details, financial records, transaction data, and communication records.

Data Use: Your data is used solely for the purpose of case evaluation, investigation, and recovery efforts. We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.

Data Security: We employ industry-standard security measures including encryption, access controls, and secure data storage to protect your information.

Data Retention: We retain case files and personal data for the duration required by applicable law and our regulatory obligations. Upon request, and subject to legal requirements, we will delete personal data that is no longer necessary.

Your Rights: You have the right to access, correct, or request deletion of your personal data, subject to legal and regulatory requirements. To exercise these rights, please contact us through our secure communication channels.`
  },
  {
    icon: FileText,
    title: "Risk Disclosure",
    content: `Engaging in fund recovery involves inherent risks that clients should understand:

• There is no guarantee of partial or full recovery of lost funds
• Recovery efforts may take weeks, months, or longer depending on case complexity
• Additional costs may be incurred during the recovery process, including legal fees, court costs, and third-party service fees
• The recovery process may require disclosure of personal and financial information to third parties including law enforcement, financial institutions, and legal professionals
• Recovery of funds does not constitute financial advice, and clients should consult independent financial advisors regarding their situation
• In some cases, the cost of recovery may approach or exceed the amount recoverable

Strategic Restitution does not provide legal advice. Our services constitute financial investigation and recovery assistance. Clients requiring legal advice should consult qualified legal counsel in their jurisdiction.

This website and its content are provided for informational purposes only and do not constitute a solicitation or offer in any jurisdiction where our services are not authorized.`
  },
];

export default function Legal() {
  return (
    <>
      <section className="bg-navy section-padding">
        <div className="container-wide mx-auto text-center">
          <SectionHeading
            light
            label="Legal"
            title="Compliance, Transparency & Disclosure"
            description="We operate with full transparency. Please review the following disclosures carefully."
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto space-y-8">
          {sections.map((section, i) => (
            <div key={i} className="border border-border rounded-lg bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="h-5 w-5 text-gold shrink-0" />
                <h2 className="font-serif text-xl font-semibold text-foreground">{section.title}</h2>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}

          <div className="text-center pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Strategic Restitution. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
