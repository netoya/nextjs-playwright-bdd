import React from "react";
import {
  AgencyDashboardLayout,
  SidebarAction,
} from "../template/AgencyDashboardLayout";
import {
  HomeIcon,
  UsersIcon,
  Building2Icon,
  UserIcon,
  SettingsIcon,
  MegaphoneIcon,
  ListIcon,
  TargetIcon,
  ActivityIcon,
} from "lucide-react";

const sidebarActions: SidebarAction[] = [
  { label: "Inicio", icon: <HomeIcon />, href: "/agency" },
  {
    label: "Agencias",
    icon: <UsersIcon />,
    subMenu: [
      {
        label: "Lista de agencias",
        icon: <Building2Icon />,
        href: "/agency/list",
      },
      { label: "Influencers", icon: <UserIcon />, href: "/agency/influencers" },
    ],
  },
  {
    label: "Campañas",
    icon: <MegaphoneIcon />,
    subMenu: [
      {
        label: "Lista de campañas",
        icon: <ListIcon />,
        href: "/campaign/list",
      },
      {
        label: "Campañas activas",
        icon: <ActivityIcon />,
        href: "/campaign/active",
      },
      {
        label: "Template de objetivos",
        icon: <TargetIcon />,
        href: "/campaign/objectives-template",
      },
    ],
  },
  {
    label: "Configuración",
    icon: <SettingsIcon />,
    onClick: () => alert("Config"),
  },
];

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AgencyDashboardLayout sidebarActions={sidebarActions}>
      {children}
    </AgencyDashboardLayout>
  );
}
