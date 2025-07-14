// TypographyMuted.tsx
import { cn } from "@/_shared/_front/ui/utils/cn";
import * as React from "react";

export default function TypographyMuted({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </span>
  );
}
