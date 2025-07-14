import { Checkbox } from "@/_shared/_front/ui/components/ui/checkbox";
import { Label } from "@/_shared/_front/ui/components/ui/label";

export function LabelDemo() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Label</h2>
      <p className="mb-4">
        Renders an accessible label associated with controls.
      </p>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
