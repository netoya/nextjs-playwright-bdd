# Guía para crear y organizar rutas por módulo

## 1. Estructura recomendada

- Cada entidad debe tener su propio archivo de rutas:
  - Ejemplo: `/src/_agency/_back/influencer/influencer.routes.ts`
- Cada módulo debe tener su propio archivo de rutas principal que combine las rutas de sus entidades:
  - Ejemplo: `/src/_agency/_back/agency.routes.ts`
- El archivo principal `/src/app.routes.ts` importa y combina los objetos de rutas de cada módulo.

## 2. Ejemplo de archivos de rutas

**Rutas por entidad:**
```typescript
// src/_agency/_back/influencer/influencer.routes.ts
import { createInfluencerHandler } from "./usecase/createInfluencer/createInfluencer.presentation";
import { getInfluencerHandler } from "./usecase/getInfluencer/getInfluencer.presentation";

export const influencerEntityRoutes = {
  "POST/api/influencer/create/": createInfluencerHandler,
  "GET/api/influencer/:id/": getInfluencerHandler,
};
```

**Rutas principales del módulo:**
```typescript
// src/_agency/_back/agency.routes.ts
import { influencerEntityRoutes } from "./influencer/influencer.routes";
// ...importar otras rutas de entidades si existen...

export const agencyRoutes = {
  ...influencerEntityRoutes,
  // ...agrega aquí otras rutas de entidades...
};
```

**Archivo principal de rutas globales:**
```typescript
// src/app.routes.ts
import { agencyRoutes } from "@/_agency/_back/agency.routes";
// ...importar otras rutas de módulos si existen...

export const appRoutes = {
  ...agencyRoutes,
  // ...agrega aquí otras rutas de módulos...
};
```

## 3. Archivo principal de rutas

```typescript
// src/app.routes.ts
import { productRoutes } from "@/_app/_back/product/routes";
import { agencyRoutes } from "@/_agency/_back/agency/routes";
import { agencyEntityRoutes } from "@/_agency/_back/agency/entity.routes";
import { agencyBackendRoutes } from "@/_agency/_back/backend.routes";

export const appRoutes = {
  ...agencyBackendRoutes,
};
```

## 4. Checklist de pasos

### Checklist de pasos
- [ ] Crear archivo de rutas por entidad (`{entityName}.routes.ts`).
- [ ] Crear archivo de rutas principal del módulo (`{moduleName}.routes.ts`) combinando las rutas de entidades.
- [ ] Exportar un objeto con las rutas y handlers usando la convención `{entity}EntityRoutes` o `{module}Routes`.
- [ ] Importar los objetos de rutas en el archivo principal y combinarlos.
- [ ] Validar que no haya duplicidad de rutas entre módulos, entidades y backend.
- [ ] Mantener la nomenclatura y estructura consistente.

## 5. Beneficios

- Facilita la escalabilidad y el mantenimiento.
- Permite agregar, modificar o eliminar rutas por módulo sin afectar otros.
- Mejora la legibilidad y organización del backend.

## 6. Recomendaciones de nomenclatura
 - Para rutas por entidad, usa `{entity}EntityRoutes` (ejemplo: `influencerEntityRoutes`).
 - Para rutas principales de módulo, usa `{module}Routes` (ejemplo: `agencyRoutes`).
 - Los archivos deben seguir la convención:  `{entityName}.routes.ts`, `{moduleName}.routes.ts`.
 - Mantén los imports relativos y consistentes según la estructura del proyecto.

---
¿Falta algún ejemplo o recomendación? Sugiere mejoras para mantener la guía actualizada y útil para todos los agentes AI.
