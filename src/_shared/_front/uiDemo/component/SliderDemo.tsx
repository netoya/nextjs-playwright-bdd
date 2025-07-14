// SliderDemo.tsx
// Ejemplo exacto de la documentación de Shadcn UI para Slider
// Título: Slider
// Descripción: An input where the user selects a value from within a given range.

import { cn } from "@/_shared/_front/ui/utils/cn";
import { Slider } from "@/_shared/_front/ui/components/ui/slider";
import type { ComponentProps } from "react";

export type SliderProps = ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  );
}
