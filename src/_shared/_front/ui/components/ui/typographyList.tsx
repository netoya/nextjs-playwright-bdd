// TypographyList.tsx
import { cn } from "@/_shared/_front/ui/utils/cn";
import * as React from "react";

export default function TypographyList({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
      {children}
    </ul>
  );
}
