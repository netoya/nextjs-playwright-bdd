// TooltipDemo.tsx
// Ejemplo exacto de la documentación de Shadcn UI para Tooltip
// Título: Tooltip
// Descripción: Un popup que muestra información relacionada a un elemento cuando recibe foco o hover.

import { Button } from "@/_shared/_front/ui/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/_shared/_front/ui/components/ui/tooltip";

export function TooltipDemo() {
  return (
    <section>
      <h3>Tooltip</h3>
      <p>
        Un popup que muestra información relacionada a un elemento cuando recibe
        foco o hover.
      </p>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </section>
  );
}

export default TooltipDemo;
