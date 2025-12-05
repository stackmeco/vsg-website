import { Link } from "wouter";

const footerLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-background border-t border-border py-6 sm:py-8"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
          <div className="max-w-lg">
            <p className="font-heading font-semibold text-foreground mb-1" data-testid="text-footer-brand">
              Verifiable Systems Group
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2" data-testid="text-footer-tagline">
              We engineer the infrastructure of verifiable autonomy.
            </p>
            <p className="text-xs text-muted-foreground/80 leading-relaxed" data-testid="text-footer-description">
              AI-native, cryptography-grounded venture studio running every serious pattern on our own balance sheet first across Truth, Capital, and Dignity.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                data-testid={`footer-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
            <p className="text-sm text-muted-foreground" data-testid="copyright-notice">
              Nothing on this site is investment, legal, or tax advice. © {currentYear} Verifiable Systems Group LLC
            </p>
            <p className="text-xs text-muted-foreground/70 max-w-md leading-relaxed" data-testid="text-footer-compliance">
              We do not pool client funds, manage outside capital, or offer yield products. Our systems are non-custodial by design.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
