import React, { useState, useReducer } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  Column,
  Table,
} from "@tanstack/react-table";

import { Button } from "../../ui/components/ui/button";
import { Select } from "../../ui/components/ui/select";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../ui/components/ui/select";
import { Input } from "../../ui/components/ui/input";
import { Checkbox } from "../../ui/components/ui/checkbox";
import { Progress } from "../../ui/components/ui/progress";
import { Badge } from "../../ui/components/ui/badge";

// Tipo de datos de ejemplo
export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  subRows?: Person[];
};

// Generador de datos de ejemplo
function range(len: number) {
  return Array.from({ length: len }, (_, i) => i);
}

function newPerson(id: number): Person {
  const statusOptions = ["relationship", "complicated", "single"] as const;
  return {
    firstName: `Nombre ${id}`,
    lastName: `Apellido ${id}`,
    age: id % 40, // Para variar un poco la edad
    visits: id % 1000,
    progress: id % 100,
    status: statusOptions[Math.floor((id % 70) * 1.6) % statusOptions.length],
  };
}

export function makeData(len = 100): Person[] {
  return range(len).map((id) => newPerson(id));
}

// Filtro para columnas

type FilterProps<T> = {
  column: Column<T, unknown>;
  table: Table<T>;
};

function Filter<T>({ column, table }: FilterProps<T>) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);
  const filterValue = column.getFilterValue();
  if (typeof firstValue === "number") {
    const min = (Array.isArray(filterValue) ? filterValue[0] : "") ?? "";
    const max = (Array.isArray(filterValue) ? filterValue[1] : "") ?? "";
    return (
      <div className="flex space-x-2">
        <Input
          type="number"
          value={min as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            column.setFilterValue((old: unknown) => [
              e.target.value,
              Array.isArray(old) ? old[1] : "",
            ])
          }
          placeholder={`Min`}
          className="w-24"
        />
        <Input
          type="number"
          value={max as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            column.setFilterValue((old: unknown) => [
              Array.isArray(old) ? old[0] : "",
              e.target.value,
            ])
          }
          placeholder={`Max`}
          className="w-24"
        />
      </div>
    );
  }
  return (
    <Input
      type="text"
      value={(filterValue as string) ?? ""}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        column.setFilterValue(e.target.value)
      }
      placeholder={`Buscar...`}
      className="w-36"
    />
  );
}

// Componente de tabla genérico
export interface GenericTableProps<T extends object> {
  data?: T[];
  columns: ColumnDef<T, unknown>[];
  pageSize?: number;
  reactTableProps?: Partial<Parameters<typeof useReactTable<T>>[0]>;
  rowSelection?: Record<string, boolean>;
  setRowSelection?: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}

export function GenericTable<T extends object>({
  data,
  columns,
  pageSize = 10,
  reactTableProps = {},
  rowSelection: externalRowSelection,
  setRowSelection: externalSetRowSelection,
}: GenericTableProps<T>) {
  const rerender = useReducer(() => ({}), {})[1];
  const [internalRowSelection, internalSetRowSelection] = useState<
    Record<string, boolean>
  >({});
  const rowSelection = externalRowSelection ?? internalRowSelection;
  const setRowSelection = externalSetRowSelection ?? internalSetRowSelection;

  const table = useReactTable<T>({
    data: data ?? [],
    columns,
    state: {
      rowSelection,
      ...(reactTableProps.state ?? {}),
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
    ...(reactTableProps ?? {}),
    initialState: {
      pagination: { pageSize },
      ...(reactTableProps.initialState ?? {}),
    },
  });

  return (
    <div className="p-2">
      <table className="min-w-full border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {/* Checkbox de selección de todas las filas en el header si corresponde */}
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="border p-2 bg-gray-100 w-10"
                >
                  {header.isPlaceholder ? null : (
                    <>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter<T> column={header.column} table={table} />
                        </div>
                      ) : null}
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={row.getIsSelected() ? "bg-blue-50" : ""}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {/* Ejemplo de integración de Badge y Progress para columnas específicas */}
                  {cell.column.id === "status" ? (
                    <Badge
                      variant={
                        cell.getValue() === "single" ? "outline" : "default"
                      }
                    >
                      {cell.getValue() as string}
                    </Badge>
                  ) : cell.column.id === "progress" ? (
                    <div className="relative group">
                      <Progress value={cell.getValue() as number} />
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                        {String(cell.getValue())}%
                      </div>
                    </div>
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-2">
              <div className="flex items-center justify-center gap-2">
                <Checkbox
                  checked={table.getIsAllPageRowsSelected()}
                  indeterminate={
                    table.getIsSomePageRowsSelected() &&
                    !table.getIsAllPageRowsSelected()
                  }
                  onChange={table.getToggleAllRowsSelectedHandler()}
                />
              </div>
            </td>
            <td colSpan={20} className="p-2">
              Filas en página ({table.getRowModel().rows.length})
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </Button>
        <span className="flex items-center gap-1">
          <div>Página</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Ir a página:
          <Input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="w-16"
          />
        </span>
        <Select
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(value: string) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Mostrar" />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={String(pageSize)}>
                Mostrar {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <br />
      <div>
        {Object.keys(rowSelection).length} de{" "}
        {table.getPreFilteredRowModel().rows.length} filas seleccionadas
      </div>
      <hr />
      <br />
      <div>
        <button className="border rounded p-2 mb-2" onClick={() => rerender()}>
          Forzar rerender
        </button>
      </div>
      <div>
        <pre>{JSON.stringify(table.getState().rowSelection, null, 2)}</pre>
      </div>
    </div>
  );
}
