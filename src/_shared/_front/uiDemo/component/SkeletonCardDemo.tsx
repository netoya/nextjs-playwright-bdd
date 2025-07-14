// SkeletonCardDemo.tsx
// Ejemplo exacto de la documentación de Shadcn UI para Skeleton
// Título: Card
// Descripción: Use to show a placeholder while content is loading.

import { Skeleton } from "@/_shared/_front/ui/components/ui/skeleton";

export function SkeletonCardDemo() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
