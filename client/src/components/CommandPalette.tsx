import { useEffect, useState, useMemo } from "react";
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
  buildSearchResults, 
  searchGroups, 
  getGroupLabel,
  type SearchGroup 
} from "@/data/searchIndex";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
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

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const searchResults = useMemo(() => {
    return buildSearchResults(query);
  }, [query]);

  const sortedGroups = useMemo(() => {
    const groups = Array.from(searchResults.keys());
    return groups.sort((a, b) => {
      const aPriority = searchGroups.find(g => g.id === a)?.priority ?? 99;
      const bPriority = searchGroups.find(g => g.id === b)?.priority ?? 99;
      return aPriority - bPriority;
    });
  }, [searchResults]);

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

  const hasResults = sortedGroups.length > 0;

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Query system index..." 
        value={query}
        onValueChange={setQuery}
        data-testid="input-command-search"
      />
      <CommandList>
        {!hasResults && <CommandEmpty>No records match query.</CommandEmpty>}
        {sortedGroups.map((groupId, index) => {
          const results = searchResults.get(groupId) ?? [];
          if (results.length === 0) return null;
          
          return (
            <div key={groupId}>
              {index > 0 && <CommandSeparator />}
              <CommandGroup heading={getGroupLabel(groupId)}>
                {results.map(({ entry }) => (
                  <CommandItem
                    key={entry.id}
                    value={`${entry.name} ${entry.keywords.join(" ")}`}
                    onSelect={() => navigate(entry.href)}
                    className="cursor-pointer"
                    data-testid={`command-item-${entry.id}`}
                  >
                    <entry.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{entry.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground truncate max-w-[200px]">
                      {entry.description}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          );
        })}
      </CommandList>
      <div className="border-t border-border px-3 py-2">
        <p className="text-xs text-muted-foreground text-center font-mono">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
          {" "}toggle | {searchResults.size} groups indexed
        </p>
      </div>
    </CommandDialog>
  );
}

export default CommandPalette;
