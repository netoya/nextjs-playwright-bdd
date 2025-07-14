// ProgressDemo
// Ejemplo extraído de https://ui.shadcn.com/docs/components/progress
// Descripción: Muestra un indicador de progreso de una tarea, normalmente como barra de progreso.

import { Progress } from "@/_shared/_front/ui/components/ui/progress";

export function ProgressDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Progress</h2>
      <p className="text-muted-foreground mb-4">
        Muestra un indicador de progreso de una tarea, normalmente como barra de
        progreso.
      </p>
      <Progress value={33} />
    </div>
  );
}
