import { Link } from "wouter";

const footerLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer
      className="bg-background border-t border-border py-8"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <img src="/logo.png" alt="VSG" className="h-5 w-5 object-contain opacity-70 grayscale flex-shrink-0" />
              <p className="font-heading font-semibold text-foreground">
                Verifiable Systems Group LLC
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-8">
              Engineering deterministic systems at the intersection of AI and Economic Assurance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`footer-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Nothing on this site is financial advice or an offer of services.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
