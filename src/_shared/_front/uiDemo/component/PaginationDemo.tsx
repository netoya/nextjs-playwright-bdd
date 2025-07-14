// PaginationDemo
// Ejemplo extraído de https://ui.shadcn.com/docs/components/pagination
// Descripción: Paginación con navegación de páginas, enlaces siguiente y anterior.

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/_shared/_front/ui/components/ui/pagination";

export function PaginationDemo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Pagination</h2>
      <p className="text-muted-foreground mb-4">
        Paginación con navegación de páginas, enlaces siguiente y anterior.
      </p>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
