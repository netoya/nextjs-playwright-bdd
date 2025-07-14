// "use client"
import * as React from "react";
import { Calendar } from "../../ui/components/ui/calendar";

/**
 * Range Calendar
 *
 * Ejemplo de calendario mostrando dos meses.
 */
export function CalendarRangeDemo() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  );
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">Range Calendar</h2>
      <p className="text-muted-foreground text-sm mb-2">
        Ejemplo de calendario mostrando dos meses.
      </p>
      <Calendar
        mode="single"
        defaultMonth={date}
        numberOfMonths={2}
        selected={date}
        onSelect={setDate}
        className="rounded-lg border shadow-sm"
      />
    </div>
  );
}
