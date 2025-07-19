# Guía para crear y organizar rutas por módulo

## 1. Estructura recomendada

- Cada módulo debe tener su propio archivo de rutas principal:
  - Producto: `/src/_app/_back/product/routes.ts`
  - Agencia: `/src/_agency/_back/agency/routes.ts`
- Cada entidad puede tener su propio archivo de rutas si aplica:
  - Ejemplo: `/src/_agency/_back/agency/entity.routes.ts`
- El módulo puede tener rutas globales en `/src/_agency/_back/backend.routes.ts` si es necesario.
- El archivo principal `/src/_app/_back/routes.ts` importa y combina los objetos de rutas de cada módulo.

## 2. Ejemplo de archivo de rutas por módulo

**Producto:**
```typescript
import { createProductPresentation } from "@/_app/_back/product/usecase/createProduct/createProduct.presentation";
import { listProductsPresentation } from "@/_app/_back/product/usecase/getAllProducts/listProducts.presentation";
import { getProductByIdPresentation } from "@/_app/_back/product/usecase/getProductById/getProductById.presentation";

export const productRoutes = {
  "GET/api/product/": listProductsPresentation,
  "POST/api/product/create/": createProductPresentation,
  "GET/api/product/:id/": getProductByIdPresentation,
};
```

**Agencia:**
```typescript
import { listAgenciesPresentation } from "@/_agency/_back/agency/usecase/getAllAgencies/listAgencies.presentation";
import { createAgencyPresentation } from "@/_agency/_back/agency/usecase/createAgency/createAgency.presentation";
import { getAgencyByIdPresentation } from "@/_agency/_back/agency/usecase/getAgencyById/getAgencyById.presentation";
import { updateAgencyPresentation } from "@/_agency/_back/agency/usecase/updateAgency/updateAgency.presentation";
import { deleteAgencyPresentation } from "@/_agency/_back/agency/usecase/deleteAgency/deleteAgency.presentation";

export const agencyRoutes = {
  "GET/api/agency/": listAgenciesPresentation,
  "POST/api/agency/create/": createAgencyPresentation,
  "GET/api/agency/:id/": getAgencyByIdPresentation,
  "PUT/api/agency/:id/": updateAgencyPresentation,
  "DELETE/api/agency/:id/": deleteAgencyPresentation,
};
```

**Ejemplo de archivo de rutas por entidad:**
```typescript
// src/_agency/_back/agency/entity.routes.ts
import { getAgencyByIdPresentation } from "@/_agency/_back/agency/usecase/getAgencyById/getAgencyById.presentation";

export const agencyEntityRoutes = {
  "GET/api/agency/:id/": getAgencyByIdPresentation,
};
```

**Ejemplo de archivo de rutas globales del backend:**
```typescript
// src/_agency/_back/backend.routes.ts
import { healthCheckPresentation } from "@/_agency/_back/shared/infra/healthCheck.presentation";

// Puedes nombrar el objeto de rutas globales como el módulo, por ejemplo:
export const agencyBackendRoutes = {
  "GET/api/health/": healthCheckPresentation,
};
```

## 3. Archivo principal de rutas

```typescript
import { productRoutes } from "@/_app/_back/product/routes";
import { agencyRoutes } from "@/_agency/_back/agency/routes";
import { agencyEntityRoutes } from "@/_agency/_back/agency/entity.routes";
import { agencyBackendRoutes } from "@/_agency/_back/backend.routes";

export const routes = {
  ...productRoutes,
  ...agencyRoutes,
  ...agencyEntityRoutes,
  ...agencyBackendRoutes,
};
```

## 4. Checklist de pasos

### Checklist de pasos
- [ ] Crear archivo de rutas por módulo en la carpeta correspondiente (`routes.ts`).
- [ ] Crear archivo de rutas por entidad si aplica (`entity.routes.ts`).
- [ ] Crear archivo de rutas globales del backend si aplica (`backend.routes.ts`).
- [ ] Exportar un objeto con las rutas y handlers del módulo o entidad, usando la convención `{entity}Routes` o `{module}Routes`.
- [ ] Importar los objetos de rutas en el archivo principal y combinarlos.
- [ ] Validar que no haya duplicidad de rutas entre módulos, entidades y backend.
- [ ] Mantener la nomenclatura y estructura consistente.

## 5. Beneficios

- Facilita la escalabilidad y el mantenimiento.
- Permite agregar, modificar o eliminar rutas por módulo sin afectar otros.
- Mejora la legibilidad y organización del backend.

## 6. Recomendaciones de nomenclatura
 - Para rutas por entidad, usa `{entity}EntityRoutes` (ejemplo: `agencyEntityRoutes`).
 - Para rutas por módulo, usa `{module}Routes` (ejemplo: `productRoutes`).
 - Para rutas globales del backend, puedes usar `{module}BackendRoutes` o `{module}Routes` si aplica.
 - Los archivos deben seguir la convención: `routes.ts`, `entity.routes.ts`, `backend.routes.ts`.
 - Mantén los imports relativos y consistentes según la estructura del proyecto.

---
¿Falta algún ejemplo o recomendación? Sugiere mejoras para mantener la guía actualizada y útil para todos los agentes AI.
