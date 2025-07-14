// SwitchDemo.tsx
// Ejemplo exacto de la documentación de Shadcn UI para Switch
// Título: Switch
// Descripción: A control that allows the user to toggle between checked and not checked.

import { Label } from "@/_shared/_front/ui/components/ui/label";
import { Switch } from "@/_shared/_front/ui/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
