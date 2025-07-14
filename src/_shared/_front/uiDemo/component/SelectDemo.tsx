// SelectDemo
// Ejemplo exacto de https://ui.shadcn.com/docs/components/select
// Descripción: Lista de opciones para seleccionar, activada por un botón.

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_shared/_front/ui/components/ui/select";

export function SelectDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Select</h2>
      <p className="text-muted-foreground mb-4">
        Lista de opciones para seleccionar, activada por un botón.
      </p>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
