/* eslint-disable @next/next/no-img-element */
// Demo de Aspect Ratio extraído de shadcn/ui
// Título: Aspect Ratio
// Descripción: Displays content within a desired ratio.

import { AspectRatio } from "@/_shared/_front/ui/components/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Aspect Ratio</h2>
      <p className="mb-4 text-muted-foreground">
        Displays content within a desired ratio.
      </p>
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </div>
  );
}
