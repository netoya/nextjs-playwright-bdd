import * as React from "react";
import { DataTable } from "./datatable";
import { ColumnDef } from "@tanstack/react-table";

export type Agency = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
};

const mockAgencies: Agency[] = [
  { id: "1", name: "Agencia Uno", email: "uno@demo.com", status: "active" },
  { id: "2", name: "Agencia Dos", email: "dos@demo.com", status: "inactive" },
  { id: "3", name: "Agencia Tres", email: "tres@demo.com", status: "active" },
];

const columns: ColumnDef<Agency>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nombre" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "status", header: "Estado" },
];

export function AgencyTable() {
  return (
    <>
      <DataTable
        columns={columns}
        data={mockAgencies}
        emptyMessage="No hay agencias."
      />
    </>
  );
}
