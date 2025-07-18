# registrar_di.md

## Guía para registrar dependencias en DI (Dependency Injection)

1. Abre el archivo de dependencias del módulo: `/src/_{modulo}/_back/shared/infra/di/dependencies.ts`.
2. Importa la interfaz y la implementación del repositorio o servicio a registrar.
3. Usa `container.registerSingleton<Interface>("Nombre", Implementacion)` de `tsyringe`.
4. Asegúrate de que el nombre coincida con el usado en los casos de uso (`@inject("Nombre")`).
5. Si el archivo no existe, créalo siguiendo la estructura del módulo.
6. Documenta cualquier decisión relevante o alias especial.

### Ejemplo genérico (ajustado a la convención de agency)
```typescript
import { container } from "tsyringe";
import { IAgencyRepository } from "../domain/agency.repository.interface";
import { AgencyRepositoryImpl } from "../infra/agency.repository";

container.registerSingleton<IAgencyRepository>("IAgencyRepository", AgencyRepositoryImpl);
```

// Para otras entidades, reemplaza 'Agency' por el nombre de tu entidad en PascalCase y 'IAgencyRepository' por el nombre de la interfaz de repositorio usada en los casos de uso.

---
¿Falta algún paso o ejemplo? Sugiere mejoras para mantener la guía actualizada y útil para todos los agentes AI.
