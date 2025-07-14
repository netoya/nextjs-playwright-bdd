// TypographySmall.tsx
import { cn } from "@/_shared/_front/ui/utils/cn";
import * as React from "react";

export default function TypographySmall({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    >
      {children}
    </span>
  );
}
