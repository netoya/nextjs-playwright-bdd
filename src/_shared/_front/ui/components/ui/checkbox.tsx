import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import { cn } from "@/_shared/_front/ui/utils/cn";

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  indeterminate?: boolean;
};

function Checkbox({
  className,
  checked,
  indeterminate,
  ...rest
}: CheckboxProps) {
  // Si indeterminate está activo, forzamos el valor
  const resolvedChecked = indeterminate ? "indeterminate" : checked ?? false;

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      checked={resolvedChecked}
      {...rest}
      onCheckedChange={(value) => {
        const event = {
          target: { checked: value },
        } as unknown as React.ChangeEvent<HTMLButtonElement>;
        rest.onChange?.(event);
      }}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        {checked === true && <CheckIcon className="size-3.5" />}
        {indeterminate === true && <MinusIcon className="size-3.5" />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
