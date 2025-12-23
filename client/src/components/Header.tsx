import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Search, X } from "lucide-react";
import { NAV_ITEMS, isPathActive, type NavItem } from "@/config/navigation";

const navLinkClass = "text-sm font-medium px-3 py-2 text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground";

const mobileLinkClass = "flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted/70";

const primaryNavItems = NAV_ITEMS.filter(item => 
  item.label !== "Insights" && item.label !== "Connect"
);

const standaloneNavItems = primaryNavItems.filter(item => !item.children);

const dropdownNavItems = primaryNavItems.filter(item => item.children);

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
              alt="Verifiable Systems Group logo" 
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
                <Search className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full min-w-[44px] min-h-[44px]"
                  aria-expanded={mobileOpen}
                  aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex w-[84vw] max-w-xs flex-col gap-4 bg-background px-4 pb-6 pt-4"
                aria-describedby={undefined}
              >
                <SheetHeader className="flex flex-row items-center justify-between space-y-0">
                  <SheetTitle className="flex items-center gap-2">
                    <img src="/logo.png" alt="" className="h-6 w-auto" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      VSG
                    </span>
                  </SheetTitle>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="-mr-1 rounded-full text-muted-foreground hover:text-foreground"
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
                      <Search className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="-mr-2 rounded-full text-muted-foreground hover:text-foreground"
                        aria-label="Close navigation menu"
                        data-testid="mobile-button-close"
                      >
                        <X className="h-5 w-5" aria-hidden="true" />
                      </Button>
                    </SheetClose>
                  </div>
                </SheetHeader>

                <nav aria-label="Mobile primary navigation" className="mt-2 space-y-1">
                  {standaloneNavItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          mobileLinkClass,
                          isPathActive(location, item.href) && "bg-muted/70"
                        )}
                        data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {dropdownNavItems.map((section) => (
                  <div key={section.label} className="border-t border-border pt-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {section.label}
                    </p>
                    <div className="space-y-1">
                      {section.children?.map((child) => (
                        <SheetClose asChild key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "flex flex-col rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/70",
                              isPathActive(location, child.href) && "bg-muted/70 text-foreground"
                            )}
                            data-testid={`mobile-nav-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <span className="font-medium text-foreground">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 text-xs text-muted-foreground/80">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex-1" />

                <div className="space-y-2 border-t border-border pt-4">
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/insights" data-testid="mobile-nav-insights">Insights</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                      <Link href="/connect" data-testid="mobile-nav-connect">Connect</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
