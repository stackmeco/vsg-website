import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", href: "/studio" },
    { name: "Governance", href: "/governance" },
    { name: "Ventures", href: "/ventures" },
  ],
  ventures: [
    { name: "Uniqueness Engine", href: "/ventures/uniqueness-engine" },
    { name: "Helios", href: "/ventures/helios" },
    { name: "Liquidity Engine", href: "/ventures/liquidity-engine" },
  ],
  resources: [
    { name: "Insights", href: "/insights" },
    { name: "Docs", href: "/docs", external: false },
    { name: "Status", href: "/status", external: true },
  ],
  contact: [
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
  ],
};

const legalLinks = [
  { name: "Terms", href: "/legal/terms" },
  { name: "Privacy", href: "/legal/privacy" },
];

export function Footer() {
  return (
    <footer
      className="bg-card border-t border-border pt-16 pb-8"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Ventures
            </h3>
            <ul className="space-y-3">
              {footerLinks.ventures.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-heading font-bold text-lg text-foreground">
              VSG
            </span>
            <span className="text-xs text-muted-foreground">
              Governance page last updated: Nov 2025
            </span>
          </div>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <span className="text-xs text-muted-foreground">
              Verified Systems Group, LLC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
