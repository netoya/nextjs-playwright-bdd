// Demo de Alert extraído de shadcn/ui
// Título: Alert
// Descripción: Displays a callout for user attention.

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/_shared/_front/ui/components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      {/* Ejemplo 1: Success */}
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      {/* Ejemplo 2: Icono y título */}
      <Alert>
        <PopcornIcon />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert>
      {/* Ejemplo 3: Destructive */}
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
