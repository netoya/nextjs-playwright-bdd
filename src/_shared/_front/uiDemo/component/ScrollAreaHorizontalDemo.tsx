// ScrollAreaHorizontalDemo
// Ejemplo horizontal de https://ui.shadcn.com/docs/components/scroll-area
// Descripción: Scroll horizontal con imágenes y autores.

import { ScrollArea } from "@/_shared/_front/ui/components/ui/scroll-area";

export function ScrollAreaHorizontalDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Scroll Area Horizontal</h2>
      <p className="text-muted-foreground mb-4">
        Scroll horizontal con imágenes y autores.
      </p>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4 overflow-x-auto">
        <div className="flex space-x-4">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"
              alt="Photo by Ornella Binni"
              className="w-48 h-32 object-cover rounded"
            />
            <figcaption className="text-xs text-muted-foreground">
              Photo by Ornella Binni
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"
              alt="Photo by Tom Byrom"
              className="w-48 h-32 object-cover rounded"
            />
            <figcaption className="text-xs text-muted-foreground">
              Photo by Tom Byrom
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
              alt="Photo by Vladimir Malyavko"
              className="w-48 h-32 object-cover rounded"
            />
            <figcaption className="text-xs text-muted-foreground">
              Photo by Vladimir Malyavko
            </figcaption>
          </figure>
        </div>
      </ScrollArea>
    </div>
  );
}
