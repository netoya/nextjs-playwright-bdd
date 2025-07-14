// TypographyListItem.tsx
import { cn } from "@/_shared/_front/ui/utils/cn";
import * as React from "react";

export default function TypographyListItem({
  children,
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("", className)} {...props}>
      {children}
    </li>
  );
}
