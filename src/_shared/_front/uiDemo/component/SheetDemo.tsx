// SheetDemo
// Ejemplo exacto de https://ui.shadcn.com/docs/components/sheet
// Descripción: Extiende el componente Dialog para mostrar contenido complementario.

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/_shared/_front/ui/components/ui/sheet";

export function SheetDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Sheet</h2>
      <p className="text-muted-foreground mb-4">
        Extiende el componente Dialog para mostrar contenido complementario.
      </p>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
