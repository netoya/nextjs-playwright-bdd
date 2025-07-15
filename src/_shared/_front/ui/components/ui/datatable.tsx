"use client";
import * as React from "react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/_shared/_front/ui/components/ui/table";

/**
 * DataTable
 * Componente reutilizable para mostrar tablas con filtrado, selección y paginación.
 *
 * Props principales:
 * - columns: ColumnDef<T>[] — Definición de columnas (tanstack/react-table)
 * - data: T[] — Datos a mostrar
 * - filterColumn?: keyof T — Columna a filtrar
 * - showColumnSelector?: boolean — Mostrar selector de columnas
 * - showSelectedRows?: boolean — Mostrar resumen de filas seleccionadas
 * - emptyMessage?: string — Mensaje personalizado cuando no hay resultados
 *
 * Ejemplo de uso:
 *
 * type User = { id: string; name: string; email: string };
 * const columns: ColumnDef<User>[] = [ ... ];
 * const data: User[] = [ ... ];
 * <DataTable columns={columns} data={data} filterColumn="email" />
 */

export type DataTableProps<T extends object> = {
  columns: ColumnDef<T>[];
  data: T[];
  emptyMessage?: string;
  onTableChange?: (table: ReturnType<typeof useReactTable<T>>) => void;
};

function DataTable<T extends object>({
  columns,
  data,
  emptyMessage = "Sin resultados.",
}: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              {emptyMessage}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
export { DataTable };
