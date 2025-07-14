// ToggleGroupDemo.tsx
// Ejemplos extraídos de la documentación oficial de Shadcn UI para Toggle Group
// Incluye todos los ejemplos con iconos, títulos y descripciones

import { Bold, Italic, Underline } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/_shared/_front/ui/components/ui/toggle-group";

// Descripción general
// Un grupo de botones de dos estados que pueden activarse o desactivarse.

export function ToggleGroupDefault() {
  // Ejemplo: Default
  // Descripción: Grupo de toggles con selección múltiple y variante outline.
  return (
    <section>
      <h3>Default</h3>
      <p>Grupo de toggles con selección múltiple y variante outline.</p>
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </section>
  );
}

export function ToggleGroupOutline() {
  // Ejemplo: Outline
  // Descripción: Igual al default, enfatiza el borde de los toggles.
  return (
    <section>
      <h3>Outline</h3>
      <p>Igual al default, enfatiza el borde de los toggles.</p>
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </section>
  );
}

export function ToggleGroupSingle() {
  // Ejemplo: Single
  // Descripción: Permite seleccionar solo un toggle a la vez.
  return (
    <section>
      <h3>Single</h3>
      <p>Permite seleccionar solo un toggle a la vez.</p>
      <ToggleGroup type="single">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </section>
  );
}

export function ToggleGroupSmall() {
  // Ejemplo: Small
  // Descripción: Grupo de toggles en tamaño pequeño.
  return (
    <section>
      <h3>Small</h3>
      <p>Grupo de toggles en tamaño pequeño.</p>
      <ToggleGroup type="single" size="sm">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </section>
  );
}

export function ToggleGroupLarge() {
  // Ejemplo: Large
  // Descripción: Grupo de toggles en tamaño grande.
  return (
    <section>
      <h3>Large</h3>
      <p>Grupo de toggles en tamaño grande.</p>
      <ToggleGroup type="multiple" size="lg">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </section>
  );
}

export function ToggleGroupDisabled() {
  // Ejemplo: Disabled
  // Descripción: Grupo de toggles deshabilitado.
  return (
    <section>
      <h3>Disabled</h3>
      <p>Grupo de toggles deshabilitado.</p>
      <ToggleGroup type="multiple" disabled>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </section>
  );
}

// Componente principal para mostrar todos los ejemplos
export default function ToggleGroupDemo() {
  return (
    <article>
      <h2>Toggle Group</h2>
      <p>
        Un grupo de botones de dos estados que pueden activarse o desactivarse.
      </p>
      <ToggleGroupDefault />
      <ToggleGroupOutline />
      <ToggleGroupSingle />
      <ToggleGroupSmall />
      <ToggleGroupLarge />
      <ToggleGroupDisabled />
    </article>
  );
}
