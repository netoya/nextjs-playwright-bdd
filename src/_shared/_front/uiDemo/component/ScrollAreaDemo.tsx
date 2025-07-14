// ScrollAreaDemo
// Ejemplo exacto de https://ui.shadcn.com/docs/components/scroll-area
// Descripción: Scroll personalizado con estilos cross-browser.

import { ScrollArea } from "@/_shared/_front/ui/components/ui/scroll-area";

export function ScrollAreaDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Scroll Area</h2>
      <p className="text-muted-foreground mb-4">
        Scroll personalizado con estilos cross-browser.
      </p>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the kings pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn t seem to
        stop Jokester. And then, one day, the people of the kingdom discovered
        that the jokes left by Jokester were so funny that they couldn t help
        but laugh. And once they started laughing, they couldn t stop.
      </ScrollArea>
    </div>
  );
}
