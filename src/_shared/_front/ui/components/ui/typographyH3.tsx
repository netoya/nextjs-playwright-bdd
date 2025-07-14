// TypographyH3.tsx
import { cn } from "@/_shared/_front/ui/utils/cn";
import * as React from "react";

export default function TypographyH3({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
