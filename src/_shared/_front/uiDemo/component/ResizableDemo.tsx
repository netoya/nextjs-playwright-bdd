// ResizableDemo
// Ejemplo exacto de https://ui.shadcn.com/docs/components/resizable
// Descripción: Paneles redimensionables horizontales con soporte de teclado.

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/_shared/_front/ui/components/ui/resizable";

export function ResizableDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Resizable</h2>
      <p className="text-muted-foreground mb-4">
        Paneles redimensionables horizontales con soporte de teclado.
      </p>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
