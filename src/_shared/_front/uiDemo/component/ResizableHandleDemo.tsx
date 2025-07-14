// ResizableHandleDemo
// Ejemplo con handle de https://ui.shadcn.com/docs/components/resizable
// Descripción: Paneles redimensionables con handle visible.

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/_shared/_front/ui/components/ui/resizable";

export function ResizableHandleDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Resizable Handle</h2>
      <p className="text-muted-foreground mb-4">
        Paneles redimensionables con handle visible.
      </p>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
