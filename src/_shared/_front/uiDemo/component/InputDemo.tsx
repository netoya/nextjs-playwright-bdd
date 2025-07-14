"use client";
import * as React from "react";
import { Input } from "@/_shared/_front/ui/components/ui/input";

export default function InputDemo() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold mb-2">Input básico</h2>
      <p className="mb-4 text-muted-foreground">
        Campo de entrada de texto para formularios y componentes interactivos.
      </p>
      <Input type="email" placeholder="Email" />
    </section>
  );
}
