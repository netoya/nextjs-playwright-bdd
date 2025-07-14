// "use client"
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../ui/components/ui/button";
import { Calendar } from "../../ui/components/ui/calendar";
import { Label } from "../../ui/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../ui/components/ui/popover";

/**
 * Date of Birth Picker
 *
 * Ejemplo de selector de fecha de nacimiento con popover.
 */
export function CalendarDateOfBirthDemo() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold">Date of Birth Picker</h2>
      <p className="text-muted-foreground text-sm mb-2">
        Ejemplo de selector de fecha de nacimiento con popover.
      </p>
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
