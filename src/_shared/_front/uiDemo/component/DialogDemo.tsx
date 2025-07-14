"use client";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/_shared/_front/ui/components/ui/dialog";
import { Button } from "@/_shared/_front/ui/components/ui/button";

export function DialogDemo() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-xl font-bold mb-2">Dialog básico</h2>
        <p className="mb-4 text-muted-foreground">
          Una ventana superpuesta que inhabilita el contenido subyacente.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </section>
      {/* Ejemplo edición de perfil */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold mb-2">Dialog con formulario</h2>
        <p className="mb-4 text-muted-foreground">
          Ejemplo de diálogo con campos editables y acciones.
        </p>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-3">
                  <label htmlFor="name-1" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name-1"
                    name="name"
                    defaultValue="Pedro Duarte"
                    className="border rounded px-3 py-2 text-sm"
                  />
                </div>
                <div className="grid gap-3">
                  <label htmlFor="username-1" className="text-sm font-medium">
                    Username
                  </label>
                  <input
                    id="username-1"
                    name="username"
                    defaultValue="@peduarte"
                    className="border rounded px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button type="submit">Save changes</Button>
              </div>
            </DialogContent>
          </form>
        </Dialog>
      </section>
      {/* Ejemplo custom close button */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold mb-2">
          Dialog con botón de cierre personalizado
        </h2>
        <p className="mb-4 text-muted-foreground">
          Ejemplo de diálogo con botón de cierre custom.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Custom close button</DialogTitle>
              <DialogDescription>
                Puedes cerrar este diálogo usando el botón personalizado.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end pt-4">
              <DialogClose asChild>
                <Button variant="destructive">Cerrar</Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
