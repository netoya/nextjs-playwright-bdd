import React from "react";

import { AgencyTable } from "@/_shared/_front/ui/components/ui/agencytable";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tabla de ejemplo</h1>

      <AgencyTable />
    </main>
  );
}
