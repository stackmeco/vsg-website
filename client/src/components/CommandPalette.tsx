import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { 
  Home, 
  Layers, 
  Settings, 
  Shield, 
  BookOpen, 
  Mail,
  Zap,
  CreditCard,
  Sparkles,
  Fingerprint,
  FileText,
  Scale
} from "lucide-react";

const pages = [
  { name: "Overview", href: "/", icon: Home, description: "Home page" },
  { name: "System", href: "/system", icon: Settings, description: "How we work" },
  { name: "Pipeline", href: "/pipeline", icon: Layers, description: "R&D projects" },
  { name: "Governance", href: "/governance", icon: Shield, description: "Risk & compliance" },
  { name: "Library", href: "/library", icon: BookOpen, description: "Notes & insights" },
  { name: "Contact", href: "/contact", icon: Mail, description: "Get in touch" },
];

const projects = [
  { name: "Helios", href: "/pipeline/helios", icon: Zap, description: "BTC strategy engine" },
  { name: "stackme", href: "/pipeline/stackme", icon: CreditCard, description: "BTC credit app" },
  { name: "Lumina", href: "/pipeline/lumina", icon: Sparkles, description: "On-chain trading cards" },
  { name: "Uniqueness Engine", href: "/pipeline/uniqueness-engine", icon: Fingerprint, description: "Identity research" },
];

const governance = [
  { name: "Legal Structure", href: "/governance#structure", icon: FileText, description: "Company governance" },
  { name: "BTC Treasury", href: "/governance#treasury", icon: CreditCard, description: "Treasury policy" },
  { name: "Risk Governance", href: "/governance#risk", icon: Shield, description: "Risk controls" },
  { name: "Regulatory Stance", href: "/governance#regulatory", icon: Scale, description: "Compliance approach" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigate = (href: string) => {
    setOpen(false);
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      setLocation(path);
      const scrollToElement = (attempts = 0) => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 10) {
          requestAnimationFrame(() => scrollToElement(attempts + 1));
        }
      };
      requestAnimationFrame(() => scrollToElement());
    } else {
      setLocation(href);
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search pages, projects, sections..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map((page) => (
            <CommandItem
              key={page.href}
              value={page.name}
              onSelect={() => navigate(page.href)}
              className="cursor-pointer"
            >
              <page.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{page.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">{page.description}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pipeline Projects">
          {projects.map((project) => (
            <CommandItem
              key={project.href}
              value={project.name}
              onSelect={() => navigate(project.href)}
              className="cursor-pointer"
            >
              <project.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{project.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">{project.description}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Governance Sections">
          {governance.map((section) => (
            <CommandItem
              key={section.href}
              value={section.name}
              onSelect={() => navigate(section.href)}
              className="cursor-pointer"
            >
              <section.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{section.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">{section.description}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
      <div className="border-t border-border px-3 py-2">
        <p className="text-xs text-muted-foreground text-center">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
          {" "}to toggle
        </p>
      </div>
    </CommandDialog>
  );
}

export default CommandPalette;
