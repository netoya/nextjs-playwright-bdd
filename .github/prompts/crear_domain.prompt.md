---
mode: "agent"
model: GPT-4.1
tools: ["githubRepo", "codebase"]
description: "Genera los archivos de dominio para una entidad siguiendo la guía del proyecto"
---

Tu objetivo es generar los archivos de dominio (`domain`) para una entidad.

Solicita el nombre de la entidad y el módulo si no se proporcionan.

Requisitos:

- Consulta la guía detallada en `.github/copilot-topics/actions/crear_domain.md` para pasos y checklist.
- Crea `{entity}.entity.ts`, `{entity}.repository.interface.ts` y `{entity}.service.ts` en `/src/_{modulo}/_back/{entity}/domain/`
- Define atributos, métodos principales y lógica de negocio
- Aplica tipado y validación
- Documenta decisiones relevantes

Checklist:

- [ ] `{entity}.entity.ts` con atributos y métodos principales
- [ ] `{entity}.repository.interface.ts` con métodos CRUD y consulta
- [ ] `{entity}.service.ts` para lógica de negocio y validaciones
- [ ] Validar tipado e integración
- [ ] Documentar decisiones relevantes
