# registrar_di.md

## Guía para registrar dependencias en DI (Dependency Injection)

1. Abre el archivo de dependencias del módulo: `/src/_{modulo}/_back/shared/infra/di/dependencies.ts`.
2. Importa la interfaz y la implementación del repositorio o servicio a registrar.
3. Usa `container.registerSingleton<Interface>("Nombre", Implementacion)` de `tsyringe`.
4. Asegúrate de que el nombre coincida con el usado en los casos de uso (`@inject("Nombre")`).
5. Si el archivo no existe, créalo siguiendo la estructura del módulo.
6. Documenta cualquier decisión relevante o alias especial.

## Convención de nombres

- El nombre de la dependencia DI debe ser `{Entity}Repository`, por ejemplo: `BrandRepository`.
- El nombre de la interfaz debe ser `I{Entity}Repository`, por ejemplo: `IBrandRepository`.


### Ejemplo genérico (ajustado a la convención de agency)

#### Imports
```typescript
import { container } from "tsyringe";
import { IAgencyRepository } from "../domain/agency.repository.interface";
import { AgencyRepositoryImpl } from "../infra/agency.repository";
```

#### Registro en DI
```typescript
container.registerSingleton<IAgencyRepository>("AgencyRepository", AgencyRepositoryImpl);
```



---
¿Falta algún paso o ejemplo? Sugiere mejoras para mantener la guía actualizada y útil para todos los agentes AI.
