import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS, isPathActive, type NavItem, type NavChild } from "@/config/navigation";

const navLinkClass = "text-sm font-medium px-3 py-2 text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground";

const primaryNavItems = NAV_ITEMS.filter(item => 
  item.label !== "Insights" && item.label !== "Connect"
);

const ctaNavItems = NAV_ITEMS.filter(item => 
  item.label === "Insights" || item.label === "Connect"
);

function DropdownNavItem({ 
  item, 
  currentPath
}: { 
  item: NavItem; 
  currentPath: string;
}) {
  const isActive = isPathActive(currentPath, item.href);
  
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className={cn(
          navLinkClass,
          "data-[state=open]:bg-muted/60 data-[state=open]:text-foreground",
          isActive && "text-foreground"
        )}
        data-active={isActive}
        data-testid={`nav-${item.label.toLowerCase()}`}
      >
        {item.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="border border-border bg-popover shadow-lg">
        <ul className="grid w-[280px] gap-1 p-2">
          {item.children?.map((child) => (
            <li key={child.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={child.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/80 hover:text-foreground",
                    currentPath === child.href && "bg-muted/80 text-foreground"
                  )}
                  data-testid={`nav-dropdown-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="font-medium">{child.label}</span>
                  {child.description && (
                    <span className="mt-0.5 block text-xs text-muted-foreground/80">
                      {child.description}
                    </span>
                  )}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const mobileNavLinkClass = "flex items-center gap-4 px-4 py-3 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function MobileNavItem({ 
  item, 
  currentPath, 
  onNavigate
}: { 
  item: NavItem; 
  currentPath: string;
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = isPathActive(currentPath, item.href);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={cn(
          mobileNavLinkClass,
          isActive 
            ? "bg-muted/80 text-foreground" 
            : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
        )}
        aria-current={isActive ? "page" : undefined}
        data-testid={`mobile-nav-${item.label.toLowerCase()}`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button
          className={cn(
            mobileNavLinkClass,
            "justify-between w-full",
            isActive 
              ? "bg-muted/80 text-foreground" 
              : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          )}
          data-testid={`mobile-nav-${item.label.toLowerCase()}`}
        >
          <span>{item.label}</span>
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-150",
            isOpen && "rotate-180"
          )} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onNavigate}
            className={cn(
              "block px-3 py-2 rounded-md text-sm transition-colors",
              currentPath === child.href 
                ? "bg-muted/80 text-foreground" 
                : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
            data-testid={`mobile-nav-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {child.label}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

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

          <div className="hidden lg:flex items-center gap-8">
            <nav aria-label="Primary" data-testid="nav-desktop">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {primaryNavItems.map((item) => (
                    item.children ? (
                      <DropdownNavItem 
                        key={item.label} 
                        item={item} 
                        currentPath={location}
                      />
                    ) : (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuLink asChild data-active={isPathActive(location, item.href)}>
                          <Link 
                            href={item.href} 
                            className={cn(
                              navLinkClass,
                              isPathActive(location, item.href) && "text-foreground"
                            )}
                            aria-current={isPathActive(location, item.href) ? "page" : undefined}
                            data-testid={`nav-${item.label.toLowerCase()}`}
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-sm"
              >
                <Link href="/insights" data-testid="nav-insights">Insights</Link>
              </Button>
              <Button
                size="sm"
                asChild
              >
                <Link href="/connect" data-testid="nav-connect">Connect</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground ml-2"
                onClick={() => {
                  const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
                  document.dispatchEvent(event);
                }}
                data-testid="button-command-palette"
                aria-label="Open command palette"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

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
                <nav className="flex flex-col p-4 gap-1 overflow-y-auto flex-1" aria-label="Mobile navigation">
                  {primaryNavItems.map((item) => (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      currentPath={location}
                      onNavigate={handleMobileNavClick}
                    />
                  ))}
                </nav>
                <div className="p-4 border-t border-border space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                    onClick={handleMobileNavClick}
                  >
                    <Link href="/insights" data-testid="mobile-nav-insights">Insights</Link>
                  </Button>
                  <Button
                    className="w-full justify-start"
                    asChild
                    onClick={handleMobileNavClick}
                  >
                    <Link href="/connect" data-testid="mobile-nav-connect">Connect</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
