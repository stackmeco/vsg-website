import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { NAV_ITEMS, isPathActive, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Search } from "lucide-react";

function useActivePath() {
  const [location] = useLocation();
  return location;
}

type DropdownProps = {
  item: NavItem;
  isActive: boolean;
};

function DesktopDropdown({ item, isActive }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!item.children?.length) return null;

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-medium transition-colors px-3 py-2 rounded-md",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )}
        data-testid={`nav-${item.key}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.label}</span>
        <ChevronDown 
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div 
          className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-3"
          role="menu"
          aria-label={`${item.label} submenu`}
        >
          <div className="rounded-lg border border-border bg-popover/98 shadow-xl shadow-black/25 backdrop-blur-sm">
            <div className="px-4 py-3 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-muted/60"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  data-testid={`nav-dropdown-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span 
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" 
                    aria-hidden="true"
                  />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-foreground">
                      {child.label}
                    </span>
                    {child.description && (
                      <span className="text-xs text-muted-foreground leading-snug">
                        {child.description}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopNav() {
  const activePath = useActivePath();

  const primaryItems = NAV_ITEMS.filter(
    item => item.key !== "insights" && item.key !== "connect"
  );
  const insightsItem = NAV_ITEMS.find(item => item.key === "insights");
  const connectItem = NAV_ITEMS.find(item => item.key === "connect");

  return (
    <nav 
      className="hidden items-center gap-1 lg:flex"
      aria-label="Primary navigation"
      data-testid="nav-desktop"
    >
      {primaryItems.map((item) => {
        const isActive = isPathActive(activePath, item.href);

        if (!item.children?.length) {
          return (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors px-3 py-2 rounded-md",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              aria-current={isActive ? "page" : undefined}
              data-testid={`nav-${item.key}`}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <DesktopDropdown
            key={item.key}
            item={item}
            isActive={isActive}
          />
        );
      })}

      <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/50">
        {insightsItem && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-sm font-medium"
          >
            <Link 
              href={insightsItem.href}
              data-testid="nav-insights"
              aria-current={isPathActive(activePath, insightsItem.href) ? "page" : undefined}
            >
              {insightsItem.label}
            </Link>
          </Button>
        )}
        
        {connectItem && (
          <Button
            size="sm"
            asChild
          >
            <Link 
              href={connectItem.href}
              data-testid="nav-connect"
              aria-current={isPathActive(activePath, connectItem.href) ? "page" : undefined}
            >
              {connectItem.label}
            </Link>
          </Button>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground ml-1"
          onClick={() => {
            const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
            document.dispatchEvent(event);
          }}
          data-testid="button-command-palette"
          aria-label="Open command palette (Cmd+K)"
        >
          <Search className="w-4 h-4" aria-hidden="true" />
        </Button>
      </div>
    </nav>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const activePath = useActivePath();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (key: string) => {
    setExpandedSections(prev =>
      prev.includes(key)
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  const handleNavClick = () => {
    setIsOpen(false);
    setExpandedSections([]);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const primaryItems = NAV_ITEMS.filter(
    item => item.key !== "insights" && item.key !== "connect"
  );
  const insightsItem = NAV_ITEMS.find(item => item.key === "insights");
  const connectItem = NAV_ITEMS.find(item => item.key === "connect");

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        data-testid="button-mobile-menu"
        className="min-w-[44px] min-h-[44px]"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm lg:top-[72px]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div 
            className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-background shadow-lg lg:top-[72px]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav 
              className="px-4 py-4 space-y-1"
              aria-label="Mobile primary navigation"
            >
              {primaryItems.map((item) => {
                const isActive = isPathActive(activePath, item.href);
                const isExpanded = expandedSections.includes(item.key);

                if (!item.children?.length) {
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-muted/70 text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                      onClick={handleNavClick}
                      data-testid={`mobile-nav-${item.key}`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.key} className="space-y-1">
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                      onClick={() => toggleSection(item.key)}
                      aria-expanded={isExpanded}
                      data-testid={`mobile-nav-${item.key}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isExpanded && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <div className="ml-3 space-y-0.5 border-l border-border/50 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "flex flex-col rounded-md px-3 py-2.5 transition-colors",
                              activePath === child.href
                                ? "bg-muted/70 text-foreground"
                                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                            )}
                            onClick={handleNavClick}
                            data-testid={`mobile-nav-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <span className="text-sm font-medium text-foreground">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 text-xs text-muted-foreground">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="border-t border-border pt-4 mt-4 space-y-2">
                {insightsItem && (
                  <Link
                    href={insightsItem.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors",
                      isPathActive(activePath, insightsItem.href)
                        ? "bg-muted/70 text-foreground"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                    onClick={handleNavClick}
                    data-testid="mobile-nav-insights"
                  >
                    {insightsItem.label}
                  </Link>
                )}

                {connectItem && (
                  <Button
                    className="w-full"
                    asChild
                  >
                    <Link 
                      href={connectItem.href}
                      onClick={handleNavClick}
                      data-testid="mobile-nav-connect"
                    >
                      {connectItem.label}
                    </Link>
                  </Button>
                )}

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
                      document.dispatchEvent(event);
                    }, 150);
                  }}
                  data-testid="mobile-button-search"
                >
                  <Search className="w-4 h-4 mr-2" aria-hidden="true" />
                  Search
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export function GlobalNav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      data-testid="header"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            data-testid="link-home"
            aria-label="Verifiable Systems Group - Go to homepage"
          >
            <img
              src="/logo.png"
              alt=""
              className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              aria-hidden="true"
            />
            <span className="font-heading font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
              Verifiable Systems Group
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <DesktopNav />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

export default GlobalNav;
