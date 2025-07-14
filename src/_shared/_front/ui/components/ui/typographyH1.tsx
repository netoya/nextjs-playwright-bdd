// TypographyH1.tsx
import { cn } from "@/_shared/_front/ui/utils/cn";
import * as React from "react";

export default function TypographyH1({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
