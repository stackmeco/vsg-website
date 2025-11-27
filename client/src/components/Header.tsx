import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { Menu, Search, X } from "lucide-react";

function SystemClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const utcTime = time.toISOString().split("T")[1].split(".")[0];

  return (
    <span 
      className="font-mono text-xs text-muted-foreground tabular-nums"
      data-testid="text-system-clock"
      aria-hidden="true"
    >
      {utcTime} <span className="text-primary/60">UTC</span>
    </span>
  );
}

const navItems = [
  { name: "Overview", href: "/", number: "01" },
  { name: "System", href: "/system", number: "02" },
  { name: "Pipeline", href: "/pipeline", number: "03" },
  { name: "Governance", href: "/governance", number: "04" },
  { name: "Thesis", href: "/thesis", number: "05" },
  { name: "Contact", href: "/contact", number: "06" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const handleMobileNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" data-testid="link-home" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="VSG Insignia" 
              className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-heading font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
              Verifiable Systems Group
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "px-3 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-150 rounded-md border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive(item.href)
                    ? "text-primary bg-primary/10 border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/80 hover:border-primary/30"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
                data-testid={`nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <SystemClock />
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-mono text-muted-foreground hover:text-foreground gap-1.5"
                onClick={() => {
                  const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
                  document.dispatchEvent(event);
                }}
                data-testid="button-command-palette"
                aria-label="Open command palette"
              >
                <Search className="w-3.5 h-3.5" />
                <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </div>
          </nav>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="min-w-[44px] min-h-[44px]"
                aria-label="Open navigation menu"
                data-testid="button-mobile-menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0" aria-describedby={undefined} hideCloseButton>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="VSG" className="h-6 w-auto" />
                    <span className="font-heading font-bold text-lg">Verifiable Systems Group</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => {
                        setMobileOpen(false);
                        setTimeout(() => {
                          const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
                          document.dispatchEvent(event);
                        }, 150);
                      }}
                      data-testid="mobile-button-search"
                      aria-label="Open search"
                    >
                      <Search className="w-4 h-4" />
                    </Button>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-foreground"
                        data-testid="mobile-button-close"
                        aria-label="Close menu"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </SheetClose>
                  </div>
                </div>
                <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleMobileNavClick}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive(item.href)
                          ? "bg-primary/10"
                          : "hover:bg-secondary"
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      data-testid={`mobile-nav-${item.name.toLowerCase()}`}
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
