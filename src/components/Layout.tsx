import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Scam Types", path: "/scam-types" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Eligibility", path: "/eligibility" },
  { label: "About", path: "/about" },
  { label: "Legal", path: "/legal" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-navy-light/50 backdrop-blur-sm">
      <div className="container-wide mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <Shield className="h-7 w-7 text-gold" />
          <span className="font-serif text-lg font-semibold text-cream tracking-wide">
            Strategic <span className="text-gold">Restitution</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="gold" size="sm" asChild>
            <Link to="/eligibility">Check Eligibility</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-light/30 animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                  location.pathname === link.path
                    ? "text-gold bg-navy-light"
                    : "text-cream/70 hover:text-cream hover:bg-navy-light/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="gold" size="sm" className="mt-2" asChild>
              <Link to="/eligibility" onClick={() => setMobileOpen(false)}>
                Check Eligibility
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-navy-light/20">
      <div className="container-wide mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-gold" />
              <span className="font-serif text-lg font-semibold text-cream">
                Strategic <span className="text-gold">Restitution</span>
              </span>
            </div>
            <p className="text-sm text-cream/50 leading-relaxed">
              Professional fund recovery and financial investigation services. Operating with integrity, discretion, and regulatory compliance.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-gold mb-4 tracking-wider uppercase">Services</h4>
            <ul className="space-y-2 text-sm text-cream/50">
              <li><Link to="/scam-types" className="hover:text-cream transition-colors">Cryptocurrency Recovery</Link></li>
              <li><Link to="/scam-types" className="hover:text-cream transition-colors">Forex & Trading Fraud</Link></li>
              <li><Link to="/scam-types" className="hover:text-cream transition-colors">Investment Fraud</Link></li>
              <li><Link to="/scam-types" className="hover:text-cream transition-colors">Wire & Card Fraud</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-gold mb-4 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-sm text-cream/50">
              <li><Link to="/about" className="hover:text-cream transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-cream transition-colors">Our Process</Link></li>
              <li><Link to="/legal" className="hover:text-cream transition-colors">Legal & Compliance</Link></li>
              <li><Link to="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-gold mb-4 tracking-wider uppercase">Get Started</h4>
            <p className="text-sm text-cream/50 mb-4">
              Confidential case evaluation available. No obligation.
            </p>
            <Button variant="gold-outline" size="sm" asChild>
              <Link to="/eligibility">Start Evaluation</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-navy-light/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Strategic Restitution. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-cream/30">
            <Link to="/legal" className="hover:text-cream/60 transition-colors">Privacy Policy</Link>
            <Link to="/legal" className="hover:text-cream/60 transition-colors">Terms of Service</Link>
            <Link to="/legal" className="hover:text-cream/60 transition-colors">Disclaimer</Link>
          </div>
        </div>

        <p className="text-[10px] text-cream/20 mt-6 leading-relaxed max-w-3xl">
          Disclaimer: Strategic Restitution does not guarantee the recovery of lost funds. All cases are evaluated individually. Results depend on the nature of the fraud, available evidence, and jurisdictional factors. This website does not constitute legal advice.
        </p>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
