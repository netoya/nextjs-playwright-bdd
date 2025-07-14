// CarouselDemo.tsx
// Ejemplos extraídos de la documentación oficial de Shadcn UI
// Incluye títulos y descripciones para cada variante

"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/_shared/_front/ui/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_shared/_front/ui/components/ui/carousel";

export function CarouselDemo() {
  return (
    <div className="space-y-12">
      {/* Ejemplo principal */}
      <section>
        <h2 className="text-xl font-bold mb-2">Ejemplo básico</h2>
        <p className="mb-4 text-muted-foreground">
          Un carrusel con movimiento y swipe construido usando Embla.
        </p>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Ejemplo: Tamaños */}
      <section>
        <h2 className="text-xl font-bold mb-2">Tamaños</h2>
        <p className="mb-4 text-muted-foreground">
          Puedes usar la clase <code>basis</code> en{" "}
          <code>&lt;CarouselItem /&gt;</code> para definir el tamaño de los
          ítems.
        </p>
        <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Ejemplo: Espaciado */}
      <section>
        <h2 className="text-xl font-bold mb-2">Espaciado</h2>
        <p className="mb-4 text-muted-foreground">
          Para el espaciado entre ítems, usa <code>pl-[VALUE]</code> en{" "}
          <code>&lt;CarouselItem /&gt;</code> y <code>-ml-[VALUE]</code> en{" "}
          <code>&lt;CarouselContent /&gt;</code>.
        </p>
        <Carousel className="w-full max-w-sm">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Ejemplo: Orientación */}
      <section>
        <h2 className="text-xl font-bold mb-2">Orientación</h2>
        <p className="mb-4 text-muted-foreground">
          Usa la prop <code>orientation</code> para definir la orientación del
          carrusel.
        </p>
        <Carousel
          opts={{ align: "start" }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Ejemplo: Plugins (Autoplay) */}
      <section>
        <h2 className="text-xl font-bold mb-2">Plugins (Autoplay)</h2>
        <p className="mb-4 text-muted-foreground">
          Puedes usar la prop <code>plugins</code> para agregar plugins como
          autoplay.
        </p>
        <Carousel
          plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
          className="w-full max-w-xs"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
