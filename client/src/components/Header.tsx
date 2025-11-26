import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";

const ventures = [
  { name: "Uniqueness Engine", href: "/ventures/uniqueness-engine" },
  { name: "Helios", href: "/ventures/helios" },
  { name: "Liquidity Engine", href: "/ventures/liquidity-engine" },
];

const navItems = [
  { name: "Studio", href: "/studio" },
  { name: "Ventures", href: "/ventures", hasDropdown: true },
  { name: "Governance", href: "/governance" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
              VSG
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "text-sm font-medium gap-1",
                        isActive(item.href)
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                      data-testid={`nav-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/ventures" className="w-full cursor-pointer">
                        All Ventures
                      </Link>
                    </DropdownMenuItem>
                    {ventures.map((venture) => (
                      <DropdownMenuItem key={venture.href} asChild>
                        <Link
                          href={venture.href}
                          className="w-full cursor-pointer"
                        >
                          {venture.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "text-sm font-medium",
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                    data-testid={`nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button size="sm" data-testid="button-contact">
                Contact
              </Button>
            </Link>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="font-heading font-bold text-lg">VSG</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <nav className="flex flex-col p-4 gap-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-base",
                            isActive(item.href)
                              ? "text-foreground bg-secondary"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.name}
                        </Button>
                      </Link>
                      {item.hasDropdown && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {ventures.map((venture) => (
                            <Link
                              key={venture.href}
                              href={venture.href}
                              onClick={() => setMobileOpen(false)}
                            >
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start text-sm text-muted-foreground"
                              >
                                {venture.name}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t border-border">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full">Contact</Button>
                    </Link>
                  </div>
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
