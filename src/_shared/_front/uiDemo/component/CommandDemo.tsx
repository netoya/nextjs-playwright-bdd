// CommandDemo.tsx
// Ejemplo extraído de la documentación oficial de Shadcn UI
// Incluye título y descripción

"use client";
import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/_shared/_front/ui/components/ui/command";

export function CommandDemo() {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Ctrl+P or ⌘P
      if (e.key?.toLowerCase() === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        window.alert("Shortcut Profile (⌘P/Ctrl+P)");
      }
      // Ctrl+B or ⌘B
      if (e.key?.toLowerCase() === "b" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        window.alert("Shortcut Billing (⌘B/Ctrl+B)");
      }
      // Ctrl+S or ⌘S
      if (e.key?.toLowerCase() === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        window.alert("Shortcut Settings (⌘S/Ctrl+S)");
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="space-y-12">
      {/* Ejemplo principal */}
      <section>
        <h2 className="text-xl font-bold mb-2">Ejemplo básico</h2>
        <p className="mb-4 text-muted-foreground">
          Menú de comandos rápido, componible y sin estilos para React.
          <br />
          <span className="text-xs">
            Presiona Ctrl+P, Ctrl+B o Ctrl+S (o ⌘) para ver el alert de cada
            shortcut.
          </span>
        </p>
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>
    </div>
  );
}
