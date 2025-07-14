// ResizableVerticalDemo
// Ejemplo vertical de https://ui.shadcn.com/docs/components/resizable
// Descripción: Paneles redimensionables verticales.

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/_shared/_front/ui/components/ui/resizable";

export function ResizableVerticalDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Resizable Vertical</h2>
      <p className="text-muted-foreground mb-4">
        Paneles redimensionables verticales.
      </p>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
