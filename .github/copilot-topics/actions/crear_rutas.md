# Guía para crear y organizar rutas por módulo

## 1. Estructura recomendada

- Cada módulo debe tener su propio archivo de rutas:
  - Producto: `/src/_app/_back/product/routes.ts`
  - Agencia: `/src/_agency/_back/agency/routes.ts`
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

## 3. Archivo principal de rutas

```typescript
import { productRoutes } from "@/_app/_back/product/routes";
import { agencyRoutes } from "@/_agency/_back/agency/routes";

export const routes = {
  ...productRoutes,
  ...agencyRoutes,
};
```

## 4. Checklist de pasos

- [ ] Crear archivo de rutas por módulo en la carpeta correspondiente.
- [ ] Exportar un objeto con las rutas y handlers del módulo.
- [ ] Importar los objetos de rutas en el archivo principal y combinarlos.
- [ ] Validar que no haya duplicidad de rutas.
- [ ] Mantener la nomenclatura y estructura consistente.

## 5. Beneficios

- Facilita la escalabilidad y el mantenimiento.
- Permite agregar, modificar o eliminar rutas por módulo sin afectar otros.
- Mejora la legibilidad y organización del backend.

---
¿Falta algún ejemplo o recomendación? Sugiere mejoras para mantener la guía actualizada y útil para todos los agentes AI.
