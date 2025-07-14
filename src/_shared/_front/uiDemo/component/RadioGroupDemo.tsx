// RadioGroupDemo
// Ejemplo exacto de https://ui.shadcn.com/docs/components/radio-group
// Descripción: Grupo de botones de radio, solo uno puede estar seleccionado.

import { Label } from "@/_shared/_front/ui/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/_shared/_front/ui/components/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Radio Group</h2>
      <p className="text-muted-foreground mb-4">
        Grupo de botones de radio, solo uno puede estar seleccionado.
      </p>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
