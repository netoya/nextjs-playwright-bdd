# Guía para agentes AI en este proyecto

## Arquitectura y patrones principales

- **Modularidad estricta:** Cada dominio funcional reside en `/src/_{modulo}/`, con subcarpetas `_back` (lógica, entidades, casos de uso) y `_front` (UI, servicios, plantillas).
- **Convenciones de nombres:** Módulos con guion bajo (`_product`), entidades en lowerCamelCase (`provider`, `agency`).w
- **Estructura de entidad:**
  - `/src/_{modulo}/_back/{entity}/domain/` — interfaces y entidades puras.
  - `/src/_{modulo}/_back/{entity}/infra/` — implementaciones, Mongoose, mappers.
  - `/src/_{modulo}/_back/{entity}/feature/` — funcionalidad específica.
  - `/src/_{modulo}/_back/{entity}/usecase/` — casos de uso, presentaciones, steps.
- **Front-end:** Agrupado en atomic, molecule, organism, template. Ejemplo: `/src/_app/_front/product/atomic/`.
- **Shared:** Utilidades y dependencias comunes en `/shared/`.

## Ejemplos reales

- Entidad: `/src/_app/_back/product/domain/product.entity.ts`
- Infraestructura: `/src/_app/_back/product/infra/product.repository.ts`
- DI: `/src/_agency/_back/shared/infra/di/dependencies.ts`
- API: `/src/pages/api/[[...slug]].ts`

## Flujos críticos de desarrollo

- **Desarrollo local:**  
  Ejecuta `npm run dev` (o `yarn dev`, `pnpm dev`, `bun dev`) para levantar el servidor Next.js.
- **Testing/BDD:**  
  Usa Playwright y Playwright-BDD. Los tests y features se organizan por módulo siguiendo la estructura de `/src/_{modulo}/`.
- **Inyección de dependencias:**  
  Utiliza `tsyringe`. Registra dependencias en `/src/_{modulo}/_back/shared/infra/di/dependencies.ts`.
- **Base de datos:**  
  MongoDB vía Mongoose. El tipado se centraliza en `{entity}.document.ts` y se importa en esquemas, mappers y repositorios.
- **API backend:**  
  Rutas en `/src/pages/api/[[...slug]].ts` para endpoints dinámicos.

## Reglas y convenciones para agentes AI

- Antes de modificar estructura o crear módulos, lee `.project-structure.md`.
- Para crear/editar módulos, sigue los pasos en `.github/copilot-topics/actions/crear_modulo.md`.
- Para infraestructura de entidades, consulta `.github/copilot-topics/actions/crear_infra.md`.
- Antes de cualquier acción, revisa `.github/copilot-topics/pasos_pre_accion.md`.  
  Después, sigue `.github/copilot-topics/pasos_post_accion.md`.
- Acciones disponibles: listadas en `.github/copilot-topics/copilot-actions.md` y detalladas en `.github/copilot-topics/actions/`.
- Si la acción no está definida, notifícalo y sugiere la más cercana.
- Documenta resultados y próximos pasos tras cada acción.

## Integraciones y dependencias clave

- **UI:** React + Tailwind CSS.
- **Backend:** Next.js API routes.
- **Testing/BDD:** Playwright y Playwright-BDD.
- **Otros:** reflect-metadata, path-to-regexp.

## Archivos y rutas clave

- `.project-structure.md` — Convenciones y estructura general.
- `.github/copilot-topics/copilot-actions.md` — Acciones disponibles.
- `.github/copilot-topics/actions/` — Pasos detallados por acción.
- `.github/copilot-topics/pasos_pre_accion.md` — Pasos previos a cualquier acción.
- `.github/copilot-topics/pasos_post_accion.md` — Pasos posteriores a cualquier acción.
- `README.md` — Instrucciones de arranque y despliegue.

---

¿Alguna sección no está clara, desactualizada o falta información relevante? Indícalo para mejorar la guía y adaptarla mejor a los agentes AI.
