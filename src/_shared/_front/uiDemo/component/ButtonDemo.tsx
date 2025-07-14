// Demo de Button extraído de shadcn/ui
// Título: Button
// Descripción: Displays a button or a component that looks like a button.

import { Button } from "@/_shared/_front/ui/components/ui/button";
import Link from "next/link";

export function ButtonDemo() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Button</h2>
      <p className="mb-4 text-muted-foreground">
        Displays a button or a component that looks like a button.
      </p>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
      </div>
    </div>
  );
}
