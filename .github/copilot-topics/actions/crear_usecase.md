# Guía para crear casos de uso (`usecase`) en un módulo

## 1. Estructura recomendada

Ubicación: `/src/_{modulo}/_back/{entity}/usecase/{casoDeUso}/`

Ejemplo para la entidad `agency`:
```
/src/_agency/_back/agency/usecase/createAgency/
  createAgency.usecase.ts
/src/_agency/_back/agency/usecase/getAgencyById/
  getAgencyById.usecase.ts
/src/_agency/_back/agency/usecase/getAllAgencies/
  getAllAgencies.usecase.ts
  listAgencies.presentation.ts
/src/_agency/_back/agency/usecase/updateAgency/
  updateAgency.usecase.ts
/src/_agency/_back/agency/usecase/deleteAgency/
  deleteAgency.usecase.ts
```

## 2. Checklist de pasos

- [ ] Crear carpeta para el caso de uso dentro de `usecase`.
- [ ] Crear archivo `{casoDeUso}.usecase.ts` con la clase principal.
- [ ] Usar `@injectable()` y `@inject` de `tsyringe` para la inyección de dependencias.
- [ ] Importar interfaces y entidades usando `import type` para cumplir con `isolatedModules` y `emitDecoratorMetadata`.
- [ ] Definir el método `execute` con la firma adecuada.
- [ ] Si aplica, crear archivo de presentación (`{casoDeUso}.presentation.ts`) para la integración con API o UI.
- [ ] Validar el tipado y la lógica con los métodos del repositorio.
- [ ] Probar el caso de uso y documentar cualquier decisión relevante.

## 3. Reglas y convenciones

- **Tipado:** Usar `import type` para interfaces y entidades.
- **Inyección:** Utilizar `tsyringe` para dependencias.
- **Nombres:** Carpeta y archivo deben reflejar el caso de uso en lowerCamelCase.
- **Presentación:** Si el caso de uso se expone por API, crear archivo `.presentation.ts` siguiendo el patrón de Next.js y DI.
- **No incluir steps si no se requiere BDD.**

## 4. Ejemplo básico

```typescript
import { injectable, inject } from "tsyringe";
import type { IAgencyRepository } from "@/_agency/_back/agency/domain/agency.repository.interface";
import type { Agency } from "@/_agency/_back/agency/domain/agency.entity";

@injectable()
export class GetAgencyByIdUseCase {
  constructor(
    @inject("IAgencyRepository") private readonly agencyRepository: IAgencyRepository
  ) {}

  async execute(id: string): Promise<Agency | null> {
    return await this.agencyRepository.findById(id);
  }
}
```

## 5. Revisión final

- [ ] Validar que el caso de uso cumple con la arquitectura y tipado.
- [ ] Probar la integración con el repositorio y la presentación.
- [ ] Documentar el resultado y próximos pasos.

---

¿Falta algún paso o ejemplo? Sugiere mejoras para mantener la guía actualizada y útil para todos los agentes AI.
