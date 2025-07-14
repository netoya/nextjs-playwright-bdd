"use client";
import * as React from "react";
import { Button } from "@/_shared/_front/ui/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/_shared/_front/ui/components/ui/hover-card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/_shared/_front/ui/components/ui/avatar";

export function HoverCardDemo() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold mb-2">Hover Card básico</h2>
      <p className="mb-4 text-muted-foreground">
        Tarjeta flotante para mostrar información adicional al pasar el mouse
        sobre un elemento.
      </p>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="text-muted-foreground text-xs">
                Joined December 2021
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </section>
  );
}
