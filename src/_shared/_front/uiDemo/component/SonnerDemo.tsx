// SonnerDemo.tsx
// Ejemplo exacto de la documentación de Shadcn UI para Sonner
// Título: Sonner
// Descripción: An opinionated toast component for React.

"use client";
import { toast } from "sonner";
import { Button } from "@/_shared/_front/ui/components/ui/button";

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
