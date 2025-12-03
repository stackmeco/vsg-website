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

function DesktopNavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  if (!item.children) {
    return (
      <Link 
        href={item.href}
        className={cn(
          "px-3 py-2 text-sm font-mono uppercase tracking-widest transition-all duration-150 rounded-[2px] border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isActive
            ? "text-primary bg-primary/10 border-primary/20"
            : "text-muted-foreground hover:text-foreground hover:bg-card/80 hover:border-primary/30"
        )}
        aria-current={isActive ? "page" : undefined}
        data-testid={`nav-${item.label.toLowerCase()}`}
      >
        {item.label}
      </Link>
    );
  }

  return null;
}

function DropdownNavItem({ item, currentPath }: { item: NavItem; currentPath: string }) {
  const isActive = isPathActive(currentPath, item.href);
  
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className={cn(
          "px-3 py-2 text-sm font-mono uppercase tracking-widest transition-all duration-150 rounded-[2px] border border-transparent bg-transparent",
          isActive
            ? "text-primary bg-primary/10 border-primary/20"
            : "text-muted-foreground hover:text-foreground hover:bg-card/80 hover:border-primary/30 data-[state=open]:bg-card/80"
        )}
        data-testid={`nav-${item.label.toLowerCase()}`}
      >
        {item.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[280px] gap-1 p-2">
          {item.children?.map((child) => (
            <li key={child.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={child.href}
                  className={cn(
                    "block select-none rounded-[2px] p-3 leading-none no-underline outline-none transition-colors",
                    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    currentPath === child.href && "bg-primary/10 text-primary"
                  )}
                  data-testid={`nav-dropdown-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="text-sm font-medium leading-none mb-1">{child.label}</div>
                  {child.description && (
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                      {child.description}
                    </p>
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

function MobileNavItem({ 
  item, 
  currentPath, 
  onNavigate,
  number 
}: { 
  item: NavItem; 
  currentPath: string;
  onNavigate: () => void;
  number: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = isPathActive(currentPath, item.href);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "flex items-center gap-4 p-4 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isActive ? "bg-primary/10" : "hover:bg-secondary"
        )}
        aria-current={isActive ? "page" : undefined}
        data-testid={`mobile-nav-${item.label.toLowerCase()}`}
      >
        <span className="text-2xl font-mono text-muted-foreground">{number}</span>
        <span className={cn("font-heading text-xl", isActive ? "text-primary" : "text-foreground")}>
          {item.label}
        </span>
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button
          className={cn(
            "flex items-center justify-between w-full gap-4 p-4 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            isActive ? "bg-primary/10" : "hover:bg-secondary"
          )}
          data-testid={`mobile-nav-${item.label.toLowerCase()}`}
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-mono text-muted-foreground">{number}</span>
            <span className={cn("font-heading text-xl", isActive ? "text-primary" : "text-foreground")}>
              {item.label}
            </span>
          </div>
          <ChevronDown className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-16 pr-4 pb-2 space-y-1">
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onNavigate}
            className={cn(
              "block p-3 rounded-sm text-sm transition-colors",
              currentPath === child.href 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
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

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {NAV_ITEMS.map((item) => (
                  item.children ? (
                    <DropdownNavItem key={item.label} item={item} currentPath={location} />
                  ) : (
                    <NavigationMenuItem key={item.label}>
                      <DesktopNavLink item={item} isActive={isPathActive(location, item.href)} />
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-mono text-muted-foreground hover:text-foreground gap-1.5 ml-4"
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
                document.dispatchEvent(event);
              }}
              data-testid="button-command-palette"
              aria-label="Open command palette"
            >
              <Search className="w-3.5 h-3.5" />
              <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded-[2px] border border-border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
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
                <nav className="flex flex-col p-6 gap-2 overflow-y-auto" aria-label="Mobile navigation">
                  {NAV_ITEMS.map((item, index) => (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      currentPath={location}
                      onNavigate={handleMobileNavClick}
                      number={String(index + 1).padStart(2, "0")}
                    />
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
