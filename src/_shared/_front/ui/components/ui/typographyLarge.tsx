// TypographyLarge.tsx
import { cn } from "@/_shared/_front/ui/utils/cn";
import * as React from "react";

export default function TypographyLarge({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </div>
  );
}
