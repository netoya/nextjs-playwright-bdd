// CollapsibleDemo.tsx
// Ejemplo extraído de la documentación oficial de Shadcn UI
// Incluye título y descripción

"use client";
import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/_shared/_front/ui/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/_shared/_front/ui/components/ui/collapsible";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="space-y-12">
      {/* Ejemplo principal */}
      <section>
        <h2 className="text-xl font-bold mb-2">Ejemplo básico</h2>
        <p className="mb-4 text-muted-foreground">
          Un componente interactivo que expande/colapsa un panel.
        </p>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex w-[350px] flex-col gap-2"
        >
          <div className="flex items-center justify-between gap-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <ChevronsUpDown />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  );
}
