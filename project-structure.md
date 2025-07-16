
# Estructura del Proyecto
Este archivo documenta la arquitectura, convenciones y flujos clave del proyecto Next.js modular. Úsalo como referencia rápida para agentes AI y desarrolladores.


## Dependencias principales

- **Base de datos:** MongoDB (`mongoose`)
- **UI:** React, Tailwind CSS
- **Framework:** Next.js
- **Testing/BDD:** Playwright, Playwright-BDD
- **DI:** tsyringe
- **Otros:** reflect-metadata, path-to-regexp




## Estructura de carpetas y convenciones

### Módulos
- Cada módulo representa un dominio funcional y comienza con guion bajo: `_product`, `_user`, `_order`.
- Ubicación: `/src/_{modulo}/`
- Subcarpetas principales:
  - `_back/` (lógica, entidades, casos de uso)
  - `_front/` (UI, servicios, plantillas)
  - `shared/` para utilidades comunes



### Entidades
- Cada entidad es lowerCamelCase: `provider`, `userAddress`, `account`.
- Subcarpetas por entidad:
  - `domain/` (interfaces, entidades)
  - `infra/` (implementaciones, Mongoose, servicios externos)
    - **Mongoose:** Al definir un modelo, usa siempre el patrón `models["Model"] || model<...>("Model", schema)` para evitar errores de recompilación en desarrollo.
  - `feature/` (funcionalidad específica)
  - `usecase/` (casos de uso)

#### Ejemplo real:
```
/src/_product/_back/provider/domain/product.entity.ts
/src/_product/_back/provider/infra/product.repository.ts
```


### Desglose de carpetas por propósito

- **domain/**: Interfaces y entidades puras, sin dependencias externas.
- **infra/**: Implementaciones concretas, conexión con MongoDB, servicios externos, etc.
- **feature/**: Funcionalidad específica de la entidad.
- **usecase/**: Casos de uso y lógica de negocio principal.


### Front-end
- Agrupado por atomic, molecule, organism, template.
- Ejemplo: `/src/_product/_front/product/atomic/`, `/src/_product/_front/product/page/`
- **Llamadas a API:** Todas las llamadas HTTP/fetch deben centralizarse en funciones dentro de la carpeta `apis/` del módulo correspondiente (por ejemplo, `/src/_product/_front/product/apis/getAllProducts.api.ts`). Los componentes de UI deben importar y usar estos helpers, nunca hacer fetch directo.

### Shared
- Utilidades y dependencias comunes en `/shared/`.


## Flujo típico de front a back

Este es el flujo recomendado para una feature típica desde el front-end hasta el back-end:

### Frontend

- `src/pages/.../some.tsx` (entrada de página Next.js)
- `src/_module/_front/entity/page/somePage.tsx` (página específica del módulo)
- `src/_module/_front/entity/apis/postListEntity.ts` (servicio o llamada a API del módulo)

### Backend

- `src/pages/api/[[..slug]].ts` (handler API global Next.js)
- `src/_app/_back/routes.ts` (router global que importa rutas de módulos)
- `src/_module/_back/entity/routes.ts` (rutas del módulo)
- `src/_module/_back/entity/usecase/listEntity/listEntity.presentation.ts` (presentación del caso de uso)
- `src/_module/_back/entity/usecase/listEntity/listEntity.usecase.ts` (lógica del caso de uso)

Este flujo asegura trazabilidad y separación clara de responsabilidades entre UI, servicios, rutas y lógica de negocio.

- **Desarrollo:** `npm run dev` (o `yarn dev`, `pnpm dev`, `bun dev`)
- **Testing/BDD:** Playwright y Playwright-BDD, estructura modular para tests/features
- **Inyección de dependencias:** tsyringe, registrar en `/src/_{modulo}/_back/shared/infra/di/dependencies.ts`
- **API backend:** Next.js API routes en `/src/pages/api/[[...slug]].ts`

## Reglas y buenas prácticas

- Lee este archivo antes de modificar estructura o crear módulos
- Sigue los pasos de `copilot-topics/actions/crear_modulo.md` para nuevos módulos
- Consulta los pasos previos y posteriores en `copilot-topics/pasos_pre_accion.md` y `copilot-topics/pasos_post_accion.md`
- Si la acción no está definida, notifícalo y sugiere la más cercana

---
¿Falta algún patrón, flujo o ejemplo relevante? Indícalo para mejorar esta guía.

---

Puedes extender esta estructura para otros componentes siguiendo el mismo patrón. Modifica los ejemplos y descripciones según las necesidades de tu proyecto.
