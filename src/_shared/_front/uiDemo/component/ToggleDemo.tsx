// ToggleDemo.tsx
// Ejemplos exactos de la documentación de Shadcn UI para Toggle
// Título: Toggle
// Descripción: A two-state button that can be either on or off.

// Ejemplo: Default
import { Bold } from "lucide-react";
import { Toggle } from "@/_shared/_front/ui/components/ui/toggle";
export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}

// Ejemplo: Outline
import { Italic } from "lucide-react";
export function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}

// Ejemplo: With Text
export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic /> Italic
    </Toggle>
  );
}

// Ejemplo: Small
export function ToggleSm() {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}

// Ejemplo: Large
export function ToggleLg() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}

// Ejemplo: Disabled
import { Underline } from "lucide-react";
export function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  );
}
