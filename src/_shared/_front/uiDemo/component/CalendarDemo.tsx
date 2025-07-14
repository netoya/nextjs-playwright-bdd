// "use client"
import * as React from "react";
import { Calendar } from "../../ui/components/ui/calendar";

/**
 * Calendar
 *
 * Un componente de campo de fecha que permite a los usuarios ingresar y editar fechas.
 *
 * Ejemplo principal del componente Calendar de shadcn/ui.
 */
export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">Calendar</h2>
      <p className="text-muted-foreground text-sm mb-2">
        Un campo de fecha que permite a los usuarios ingresar y editar fechas.
      </p>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
    </div>
  );
}
