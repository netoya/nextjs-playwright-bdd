---
mode: "agent"
model: GPT-4.1
tools: ["githubRepo", "codebase"]
description: "Genera la estructura de un módulo siguiendo la guía del proyecto"
---

Tu objetivo es generar la estructura de un módulo.

Solicita el nombre del módulo si no se proporciona.

Requisitos:

- Consulta la guía detallada en `.github/copilot-topics/actions/crear_modulo.md` para pasos y checklist.
- Crea la carpeta `/src/_{modulo}/`
- Crea subcarpetas `_back/` y `_front/`
- En `_back/`, crea carpetas por entidad (`domain/`, `infra/`, `feature/`, `usecase/`)
- En `_front/`, crea carpetas por tipo de componente (`atomic/`, `molecule/`, `organism/`, `template/`)
- Valida la estructura con `.project-structure.md`
- Registra dependencias en `di/dependencies.ts` si aplica
- Documenta la estructura y decisiones relevantes
- Prepara el archivo `/src/_{modulo}/documentation/ENTITIES-DEFINITIONS.md` según [create_entities_definitions.md](`./create_entities_definitions.md`)
- Prepara el archivo `/src/_{modulo}/documentation/ENTITIES-IMPLEMENTATION.md` según [create_entities_implementation.md](`./create_entities_implementation.md`)

  Checklist:

- [ ] Carpeta de módulo creada
- [ ] Subcarpetas `_back/` y `_front/` creadas
- [ ] Estructura validada
- [ ] Definir entidades y atributos en `ENTITIES-DEFINITIONS.md`
- [ ] Definir implementación de entidades en `ENTITIES-IMPLEMENTATION.md`
- [ ] Dependencias registradas
- [ ] Documentación actualizada
