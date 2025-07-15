# Guía rápida para agentes AI en este proyecto

## Checklist de acciones para agentes AI

- Verifica si la acción está definida en `.github/copilot-topics/copilot-actions.md`.
- Consulta los pasos detallados en `.github/copilot-topics/actions/`.
- Antes de ejecutar, revisa los requisitos previos en `.github/copilot-topics/pasos_pre_accion.md`.
- Realiza la acción siguiendo la estructura y convenciones del proyecto.
- Después, valida y documenta el resultado según `.github/copilot-topics/pasos_post_accion.md`.
- Si la acción no existe, sugiere la más cercana y notifica al usuario.

## Arquitectura y patrones principales

- Modularidad estricta: cada dominio funcional reside en `/src/_{modulo}/`, con subcarpetas `_back` (lógica, entidades, casos de uso) y `_front` (UI, servicios, plantillas).
- Convenciones de nombres: módulos con guion bajo (`_product`), entidades en lowerCamelCase (`provider`, `agency`).
- Estructura de entidad:
  - `/src/_{modulo}/_back/{entity}/domain/` — interfaces y entidades puras.
  - `/src/_{modulo}/_back/{entity}/infra/` — implementaciones, Mongoose, mappers.
  - `/src/_{modulo}/_back/{entity}/feature/` — funcionalidad específica.
  - `/src/_{modulo}/_back/{entity}/usecase/` — casos de uso, presentaciones, steps.
- Front-end: agrupado en atomic, molecule, organism, template. Ejemplo: `/src/_app/_front/product/atomic/`.
- Shared: utilidades y dependencias comunes en `/shared/`.

## Ejemplos clave

- Entidad: `/src/_app/_back/product/domain/product.entity.ts`
- Infraestructura: `/src/_app/_back/product/infra/product.repository.ts`
- DI: `/src/_agency/_back/shared/infra/di/dependencies.ts`
- API: `/src/pages/api/[[...slug]].ts`

## Workflows críticos

- Desarrollo local: ejecuta `npm run dev` (o `yarn dev`, `pnpm dev`, `bun dev`) para levantar el servidor Next.js.
- Testing/BDD: usa Playwright y Playwright-BDD. Los tests y features se organizan por módulo siguiendo la estructura de `/src/_{modulo}/`.
- Inyección de dependencias: utiliza `tsyringe`. Registra dependencias en `/src/_{modulo}/_back/shared/infra/di/dependencies.ts`.
- Base de datos: MongoDB vía Mongoose. El tipado se centraliza en `{entity}.document.ts` y se importa en esquemas, mappers y repositorios.
- API backend: rutas en `/src/pages/api/[[...slug]].ts` para endpoints dinámicos.

## Reglas y convenciones para agentes AI

- Acciones disponibles: listadas en `.github/copilot-topics/copilot-actions.md` y detalladas en `.github/copilot-topics/actions/`.
- Si la acción no está definida, notifícalo y sugiere la más cercana.
- Documenta resultados y próximos pasos tras cada acción.

## Integraciones y dependencias clave

- UI: React + Tailwind CSS. Componentes base en `/src/_shared/_front/ui/components/ui/` y demos en `/src/_shared/_front/uiDemo/component/`.
- Backend: Next.js API routes.
- Testing/BDD: Playwright y Playwright-BDD.
- Otros: reflect-metadata, path-to-regexp.

## Archivos y rutas clave

- `.project-structure.md`: convenciones y estructura general.
- `.github/copilot-topics/copilot-actions.md`: acciones disponibles.
- `.github/copilot-topics/actions/`: pasos detallados por acción.
- `.github/copilot-topics/pasos_pre_accion.md`: pasos previos a cualquier acción.
- `.github/copilot-topics/pasos_post_accion.md`: pasos posteriores a cualquier acción.
- `README.md`: instrucciones de arranque y despliegue.
- Documentación UI: la estructura y convenciones de UI están documentadas en `/src/_shared/_front/ui/crear_ui.md` (si existe) y se ejemplifican en los componentes demo bajo `/src/_shared/_front/uiDemo/component/`.

## Flujo UI (Front-end)

### Pasos para crear un componente UI:

1. Busca ejemplos en `/src/_shared/_front/ui/components/uiDemo/` (ejemplo: Table, Button, etc).
2. Ubica y reutiliza los componentes base en `/src/_shared/_front/ui/components/ui/` (ejemplo: Table, Button, etc).
3. Crea el componente específico en el módulo correspondiente, siguiendo atomic design (`atomic/`, `molecule/`, etc).
4. Importa y utiliza los componentes base en el nuevo componente, evitando duplicar lógica o estilos.
5. Personaliza mediante props y variantes, manteniendo coherencia visual.
6. Documenta el uso y variantes en el propio módulo y enlaza al demo global si aplica.
7. Realiza pruebas visuales y funcionales usando los demos en `/src/_shared/_front/uiDemo/component/`.
8. Actualiza esta guía si surge un nuevo patrón relevante.

## Flujo Backend (Dominio, Infraestructura y API)

- Cada entidad se organiza en `/src/_{modulo}/_back/{entity}/` con subcarpetas `domain/`, `infra/`, `feature/`, `usecase/`.
- El dominio define la entidad y sus interfaces (`domain/`).
- La infraestructura implementa el esquema Mongoose, el mapper y el repositorio (`infra/`).
- Los casos de uso se ubican en `usecase/`, cada uno en su propia carpeta, usando inyección de dependencias con `tsyringe`.
- Las presentaciones (`presentation.ts`) conectan los casos de uso con la API Next.js, gestionando entrada/salida HTTP.
- Las rutas de API se combinan en `/src/pages/api/[[...slug]].ts` y se organizan por módulo en archivos `routes.ts`.

---

¿Alguna sección no está clara, desactualizada o falta información relevante? Indícalo para mejorar la guía y adaptarla mejor a los agentes AI.
