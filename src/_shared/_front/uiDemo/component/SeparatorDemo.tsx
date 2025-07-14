// SeparatorDemo
// Ejemplo exacto de https://ui.shadcn.com/docs/components/separator
// Descripción: Separador visual o semántico de contenido.

import { Separator } from "@/_shared/_front/ui/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Separator</h2>
      <p className="text-muted-foreground mb-4">
        Separador visual o semántico de contenido.
      </p>
      <Separator />
    </div>
  );
}
