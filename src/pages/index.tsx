import React, { useMemo } from "react";
import {
  GenericTable,
  makeData,
  Person,
} from "../_shared/_front/table/components/GenericTable";

import { ColumnDef, ColumnFilter } from "@tanstack/react-table";
import { Checkbox } from "@/_shared/_front/ui/components/ui/checkbox";

const columns: ColumnDef<Person, unknown>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          indeterminate={row.getIsSomeSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      </div>
    ),
  },
  {
    header: "Nombre",
    accessorKey: "firstName",
  },
  {
    header: "Apellido",
    accessorKey: "lastName",
  },
  {
    header: "Edad",
    accessorKey: "age",
  },
  {
    header: "Visitas",
    accessorKey: "visits",
  },
  {
    header: "Progreso",
    accessorKey: "progress",
  },
  {
    header: "Estado",
    accessorKey: "status",
  },
];

export default function HomePage() {
  const data = useMemo(() => makeData(50), []);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [rowSelection, setRowSelection] = React.useState<
    Record<string, boolean>
  >({});

  const [columnFilters, setColumnFilters] = React.useState<ColumnFilter[]>([]);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tabla de ejemplo</h1>
      <div className="mb-4">
        <input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="p-2 font-lg shadow border border-block"
          placeholder="Buscar en todas las columnas..."
        />
      </div>
      <GenericTable<Person>
        columns={columns}
        data={data}
        pageSize={10}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        reactTableProps={{
          state: { globalFilter, columnFilters, rowSelection },
          onGlobalFilterChange: setGlobalFilter,
          onColumnFiltersChange: setColumnFilters,
        }}
      />
      <div>
        <p>
          Filters: {JSON.stringify(columnFilters)} <br />
        </p>
      </div>
    </main>
  );
}
