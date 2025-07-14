// Demo de Badge extraído de shadcn/ui
// Título: Badge
// Descripción: Displays a badge or a component that looks like a badge.

import { Badge } from "@/_shared/_front/ui/components/ui/badge";
import Link from "next/link";

export function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-xl font-bold mb-2">Badge</h2>
      <p className="mb-4 text-muted-foreground">
        Displays a badge or a component that looks like a badge.
      </p>
      <div className="flex w-full flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-2">Link as Badge</h3>
      <p className="mb-2 text-muted-foreground">
        You can use the <code>asChild</code> prop to make another component look
        like a badge.
      </p>
      <Badge asChild>
        <Link href="/">Badge</Link>
      </Badge>
    </div>
  );
}
