import * as React from "react";
import { DataTable } from "@/_shared/_front/ui/components/ui/datatable";
import type { ColumnDef } from "@tanstack/react-table";
import type { Agency } from "@/_agency/_back/agency/domain/agency.entity";
import { getAllAgencies } from "../apis/getAllAgencies.api";

const columns: ColumnDef<Agency>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nombre" },
  { accessorKey: "address", header: "Dirección" },
  { accessorKey: "phone", header: "Teléfono" },
];

export function AgencyDatatable() {
  const [data, setData] = React.useState<Agency[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    getAllAgencies()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando agencias...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <DataTable columns={columns} data={data} emptyMessage="No hay agencias." />
  );
}
