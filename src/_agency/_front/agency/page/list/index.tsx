import * as React from "react";
import { AgencyDatatable } from "@/_agency/_front/agency/molecule/AgencyDatatable";
import {
  AgencyDashboardLayout,
  SidebarAction,
} from "@/_agency/_front/agency/template/AgencyDashboardLayout";
import { HomeIcon, UsersIcon, SettingsIcon } from "lucide-react";
import {
  Building2Icon,
  UserIcon,
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

export default function AgencyListPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Lista de agencias</h2>
      <AgencyDatatable />
    </div>
  );
}

AgencyListPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AgencyDashboardLayout sidebarActions={sidebarActions}>
      {page}
    </AgencyDashboardLayout>
  );
};
