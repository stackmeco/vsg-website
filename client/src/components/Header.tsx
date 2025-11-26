import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Overview", href: "/", number: "01" },
  { name: "System", href: "/system", number: "02" },
  { name: "Pipeline", href: "/pipeline", number: "03" },
  { name: "Ventures", href: "/ventures", number: "04" },
  { name: "Library", href: "/library", number: "05" },
  { name: "Contact", href: "/contact", number: "06" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" data-testid="link-home">
            <span className="font-heading font-bold text-lg tracking-tight text-foreground">
              Verified Systems
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={cn(
                    "px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors rounded-md",
                    isActive(item.href)
                      ? "text-primary underline underline-offset-4"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                  data-testid={`nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="font-heading font-bold text-lg">Verified Systems</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <nav className="flex flex-col p-6 gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-lg transition-colors",
                          isActive(item.href)
                            ? "bg-primary/10"
                            : "hover:bg-secondary"
                        )}
                      >
                        <span className="text-2xl font-mono text-muted-foreground">
                          {item.number}
                        </span>
                        <span
                          className={cn(
                            "font-heading text-xl",
                            isActive(item.href) ? "text-primary" : "text-foreground"
                          )}
                        >
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
