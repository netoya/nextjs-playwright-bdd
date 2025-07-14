// NavigationMenuDemo
// Ejemplo extraído de https://ui.shadcn.com/docs/components/navigation-menu
// Descripción: Colección de enlaces para navegar sitios web.

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/_shared/_front/ui/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Navigation Menu</h2>
      <p className="text-muted-foreground mb-4">
        Colección de enlaces para navegar sitios web.
      </p>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
