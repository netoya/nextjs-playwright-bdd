import { AspectRatioDemo } from "@/_shared/_front/uiDemo/component/AspectRatioDemo";
import {
  ToggleDemo,
  ToggleOutline,
  ToggleWithText,
  ToggleSm,
  ToggleLg,
  ToggleDisabled,
} from "@/_shared/_front/uiDemo/component/ToggleDemo";
import {
  ToggleGroupDefault,
  ToggleGroupOutline,
  ToggleGroupSingle,
  ToggleGroupSmall,
  ToggleGroupLarge,
  ToggleGroupDisabled,
} from "@/_shared/_front/uiDemo/component/ToggleGroupDemo";
import TooltipDemo from "@/_shared/_front/uiDemo/component/TooltipDemo";
import TypographyDemo from "@/_shared/_front/uiDemo/component/TypographyDemo";
import { ButtonDemo } from "@/_shared/_front/uiDemo/component/ButtonDemo";
import { CalendarDemo } from "@/_shared/_front/uiDemo/component/CalendarDemo";
import { CalendarRangeDemo } from "@/_shared/_front/uiDemo/component/CalendarRangeDemo";
import { CalendarMonthYearDemo } from "@/_shared/_front/uiDemo/component/CalendarMonthYearDemo";
import { CalendarDateOfBirthDemo } from "@/_shared/_front/uiDemo/component/CalendarDateOfBirthDemo";
import { CalendarDateTimeDemo } from "@/_shared/_front/uiDemo/component/CalendarDateTimeDemo";
import { CardDemo } from "@/_shared/_front/uiDemo/component/CardDemo";
import { AvatarDemo } from "@/_shared/_front/uiDemo/component/AvatarDemo";
import { BadgeDemo } from "@/_shared/_front/uiDemo/component/BadgeDemo";
import { AccordionDemo } from "@/_shared/_front/uiDemo/component/AccordionDemo";
import { AlertDemo } from "@/_shared/_front/uiDemo/component/AlertDemo";
import { AlertDialogDemo } from "@/_shared/_front/uiDemo/component/AlertDialogDemo";
import { CarouselDemo } from "@/_shared/_front/uiDemo/component/CarouselDemo";
import { CheckboxDemo } from "@/_shared/_front/uiDemo/component/CheckboxDemo";
import { CollapsibleDemo } from "@/_shared/_front/uiDemo/component/CollapsibleDemo";
import { ComboboxDemo } from "@/_shared/_front/uiDemo/component/ComboboxDemo";

import { CommandDemo } from "@/_shared/_front/uiDemo/component/CommandDemo";

import { ContextMenuDemo } from "@/_shared/_front/uiDemo/component/ContextMenuDemo";
import { TableDemo } from "@/_shared/_front/uiDemo/component/TableDemo";
import { DataTableDemo } from "@/_shared/_front/uiDemo/component/DataTableDemo";
import { DatePickerDemo } from "@/_shared/_front/uiDemo/component/DatePickerDemo";
import { DialogDemo } from "@/_shared/_front/uiDemo/component/DialogDemo";
import { DrawerDemo } from "@/_shared/_front/uiDemo/component/DrawerDemo";
import { DropdownMenuDemo } from "@/_shared/_front/uiDemo/component/DropdownMenuDemo";
import { HoverCardDemo } from "@/_shared/_front/uiDemo/component/HoverCardDemo";
import InputDemo from "@/_shared/_front/uiDemo/component/InputDemo";
import {
  InputOTPDemo,
  InputOTPPatternDemo,
  InputOTPWithSeparatorDemo,
} from "@/_shared/_front/uiDemo/component/InputOTPDemo";
import { LabelDemo } from "@/_shared/_front/uiDemo/component/LabelDemo";
import { SkeletonCardDemo } from "@/_shared/_front/uiDemo/component/SkeletonCardDemo";
import { SliderDemo } from "@/_shared/_front/uiDemo/component/SliderDemo";
import { SonnerDemo } from "@/_shared/_front/uiDemo/component/SonnerDemo";
import { SwitchDemo } from "@/_shared/_front/uiDemo/component/SwitchDemo";
import { TabsDemo } from "@/_shared/_front/uiDemo/component/TabsDemo";
import { TextareaDemo } from "@/_shared/_front/uiDemo/component/TextareaDemo";
import { MenubarDemo } from "@/_shared/_front/uiDemo/component/MenubarDemo";
import { NavigationMenuDemo } from "@/_shared/_front/uiDemo/component/NavigationMenuDemo";
import { PaginationDemo } from "@/_shared/_front/uiDemo/component/PaginationDemo";
import { ScrollAreaDemo } from "@/_shared/_front/uiDemo/component/ScrollAreaDemo";
import { ScrollAreaHorizontalDemo } from "@/_shared/_front/uiDemo/component/ScrollAreaHorizontalDemo";
import { SelectDemo } from "@/_shared/_front/uiDemo/component/SelectDemo";
import { SeparatorDemo } from "@/_shared/_front/uiDemo/component/SeparatorDemo";
import { SheetDemo } from "@/_shared/_front/uiDemo/component/SheetDemo";
import { PopoverDemo } from "@/_shared/_front/uiDemo/component/PopoverDemo";
import { ProgressDemo } from "@/_shared/_front/uiDemo/component/ProgressDemo";
import SidebarDemoPage from "@/_shared/_front/uiDemo/component/SidebarDemo";
import { SidebarProvider } from "@/_shared/_front/ui/components/ui/sidebar";

const Page = () => {
  <div>
    {/* Ejemplo Toggle (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Toggle</h2>
      <p className="text-muted-foreground mb-4">
        A two-state button that can be either on or off.
      </p>
      <ToggleDemo />
      <ToggleOutline />
      <ToggleWithText />
      <ToggleSm />
      <ToggleLg />
      <ToggleDisabled />
    </div>
    {/* Ejemplo ToggleGroup (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Toggle Group</h2>
      <p className="text-muted-foreground mb-4">
        A set of toggle buttons for multi or single selection.
      </p>
      <ToggleGroupDefault />
      <ToggleGroupOutline />
      <ToggleGroupSingle />
      <ToggleGroupSmall />
      <ToggleGroupLarge />
      <ToggleGroupDisabled />
    </div>
    {/* Ejemplo Tooltip (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Tooltip</h2>
      <p className="text-muted-foreground mb-4">
        Un popup que muestra información relacionada a un elemento cuando recibe
        foco o hover.
      </p>
      <TooltipDemo />
    </div>
    {/* Ejemplo Typography (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Typography</h2>
      <p className="text-muted-foreground mb-4">
        Componentes tipográficos para títulos, párrafos, listas y más.
      </p>
      <TypographyDemo />
    </div>
    {/* Ejemplo Table (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Table</h2>
      <p className="text-muted-foreground mb-4">
        A responsive table component.
      </p>
      <TableDemo />
    </div>
    {/* Ejemplo Tabs (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Tabs</h2>
      <p className="text-muted-foreground mb-4">
        A set of layered sections of content—known as tab panels—that are
        displayed one at a time.
      </p>
      <TabsDemo />
    </div>
    {/* Ejemplo Textarea (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Textarea</h2>
      <p className="text-muted-foreground mb-4">
        Displays a form textarea or a component that looks like a textarea.
      </p>
      <TextareaDemo />
    </div>
    {/* Ejemplo Switch (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Switch</h2>
      <p className="text-muted-foreground mb-4">
        A control that allows the user to toggle between checked and not
        checked.
      </p>
      <SwitchDemo />
    </div>
    {/* Ejemplo Sonner (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Sonner</h2>
      <p className="text-muted-foreground mb-4">
        An opinionated toast component for React.
      </p>
      <SonnerDemo />
    </div>
    {/* Ejemplo Slider (Shadcn UI) */}
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold mb-2">Slider</h2>
      <p className="text-muted-foreground mb-4">
        An input where the user selects a value from within a given range.
      </p>
      <SliderDemo />
    </div>
  </div>;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">UI Demo</h1>
      <p className="text-muted-foreground">
        This page demonstrates the UI components in action.
      </p>
      <MenubarDemo />
      <NavigationMenuDemo />
      <PaginationDemo />
      <ScrollAreaDemo />
      <ScrollAreaHorizontalDemo />
      <SelectDemo />
      <SeparatorDemo />
      <SheetDemo />
      {/* SidebarDemo exacto de Shadcn UI */}
      <SidebarProvider>
        <SidebarDemoPage />
      </SidebarProvider>
      <PopoverDemo />
      <ProgressDemo />
      <AccordionDemo />
      <AlertDemo />
      <AlertDialogDemo />
      <AspectRatioDemo />
      <AvatarDemo />
      <BadgeDemo />
      <CardDemo />
      <ButtonDemo />
      <CalendarDemo />
      <CalendarRangeDemo />
      <CalendarMonthYearDemo />
      <CalendarDateOfBirthDemo />
      <CalendarDateTimeDemo />
      <CarouselDemo />
      <CheckboxDemo />
      <CollapsibleDemo />
      <ComboboxDemo />
      <CommandDemo />
      <ContextMenuDemo />
      <TableDemo />
      <DataTableDemo />
      <DatePickerDemo />
      <ComboboxDemo />
      <DialogDemo />
      <DrawerDemo />
      <DropdownMenuDemo />
      <HoverCardDemo />
      <InputDemo />
      <InputOTPDemo />
      <InputOTPPatternDemo />
      <InputOTPWithSeparatorDemo />
      <LabelDemo />

      {/* Ejemplo Skeleton - Card (Shadcn UI) */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Skeleton: Card</h2>
      <p className="text-muted-foreground mb-4">
        Use to show a placeholder while content is loading.
      </p>
      <SkeletonCardDemo />
    </div>
  );
};

export default Page;
