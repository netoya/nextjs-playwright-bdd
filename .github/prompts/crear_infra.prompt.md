---
mode: "agent"
model: GPT-4.1
tools: ["githubRepo", "codebase"]
description: "Genera la infraestructura para una entidad siguiendo la guía del proyecto"
---

Tu objetivo es generar la infraestructura (`infra`) para una entidad.

Solicita el nombre de la entidad y el módulo si no se proporcionan.

Requisitos:

- Consulta la guía detallada en `.github/copilot-topics/actions/crear_infra.md` para pasos y checklist.
- Crea la carpeta `infra` en `/src/_{modulo}/_back/{entity}/infra/`
- Define el esquema Mongoose en `{entity}.schema.ts` usando el tipado centralizado
- Implementa el repositorio `{entity}.repository.ts` usando el mapper y decora con `@singleton()`
- Crea el mapper `{entity}.mapper.ts` con métodos `toDomain` y `toPersistence`
- Refactoriza el repositorio para usar el mapper externo
- Registra el repositorio en `di/dependencies.ts` si aplica

Checklist:

- [ ] Carpeta infra creada
- [ ] Esquema Mongoose definido
- [ ] Repositorio implementado y decorado
- [ ] Mapper creado y usado
- [ ] Tipado centralizado
- [ ] Repositorio registrado en DI
