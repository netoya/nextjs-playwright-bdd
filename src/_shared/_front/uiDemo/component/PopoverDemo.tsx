// PopoverDemo
// Ejemplo extraído de https://ui.shadcn.com/docs/components/popover
// Descripción: Muestra contenido enriquecido en un portal, activado por un botón.

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/_shared/_front/ui/components/ui/popover";

export function PopoverDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Popover</h2>
      <p className="text-muted-foreground mb-4">
        Muestra contenido enriquecido en un portal, activado por un botón.
      </p>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
}
