import { Link } from "wouter";

const footerLinks = [
  { name: "Thesis", href: "/thesis" },
  { name: "Privacy", href: "/legal/privacy" },
  { name: "Terms", href: "/legal/terms" },
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
            <p className="font-heading font-semibold text-foreground mb-1">
              Verified Systems Group LLC
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
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
