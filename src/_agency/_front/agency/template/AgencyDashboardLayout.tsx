import React from "react";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "src/_shared/_front/ui/components/ui/sidebar";
// ...existing code...
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "src/_shared/_front/ui/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

/**
 * Layout principal para el dashboard de Agency.
 * Reutiliza Sidebar, Card y Button desde los componentes base.
 * Permite personalización mediante props y children.
 */
export interface SidebarAction {
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  subMenu?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  }>;
}

interface AgencyDashboardLayoutProps {
  children: React.ReactNode;
  sidebarActions: SidebarAction[];
}

export function AgencyDashboardLayout({
  children,
  sidebarActions,
}: AgencyDashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="w-64 border-r bg-white p-4">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Panel</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarActions.map((action, idx) =>
                    action.subMenu ? (
                      <Collapsible key={idx}>
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton asChild>
                              <button
                                type="button"
                                className="flex items-center gap-2 w-full bg-transparent border-none p-0 text-inherit cursor-pointer"
                              >
                                {action.icon}
                                <span>{action.label}</span>
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                              </button>
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="pl-6">
                              {action.subMenu.map((item, subIdx) => (
                                <SidebarMenuButton asChild key={subIdx}>
                                  {item.href ? (
                                    <a
                                      href={item.href}
                                      className="flex items-center gap-2 w-full pl-4"
                                    >
                                      {item.icon}
                                      <span>{item.label}</span>
                                    </a>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={item.onClick}
                                      className="flex items-center gap-2 w-full bg-transparent border-none p-0 text-inherit cursor-pointer pl-4"
                                    >
                                      {item.icon}
                                      <span>{item.label}</span>
                                    </button>
                                  )}
                                </SidebarMenuButton>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    ) : (
                      <SidebarMenuItem key={idx}>
                        <SidebarMenuButton asChild>
                          {action.href ? (
                            <a
                              href={action.href}
                              className="flex items-center gap-2 w-full"
                            >
                              {action.icon}
                              <span>{action.label}</span>
                            </a>
                          ) : (
                            <button
                              type="button"
                              onClick={action.onClick}
                              className="flex items-center gap-2 w-full bg-transparent border-none p-0 text-inherit cursor-pointer"
                            >
                              {action.icon}
                              <span>{action.label}</span>
                            </button>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}

/**
 * Ejemplo de uso:
 *
 * import { HomeIcon, UsersIcon, SettingsIcon } from "lucide-react";
 *
 * <AgencyDashboardLayout
 *   sidebarActions={[
 *     { label: "Inicio", icon: <HomeIcon />, href: "/agency" },
 *     { label: "Agencias", icon: <UsersIcon />, href: "/agency/list" },
 *     { label: "Configuración", icon: <SettingsIcon />, onClick: () => alert("Config") },
 *   ]}
 * >
 *   <AgencyList />
 * </AgencyDashboardLayout>
 */
