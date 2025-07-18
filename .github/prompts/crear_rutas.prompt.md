---
mode: "agent"
model: GPT-4.1
tools: ["githubRepo", "codebase"]
description: "Genera y organiza rutas por módulo siguiendo la guía del proyecto"
---

Tu objetivo es crear y organizar rutas por módulo.

Solicita el nombre del módulo y entidad si no se proporcionan.

Requisitos:

- Consulta la guía detallada en `.github/copilot-topics/actions/crear_rutas.md` para pasos y checklist.
- Crea el archivo de rutas por módulo en `/src/_{modulo}/_back/{entity}/routes.ts`
- Importa y combina los objetos de rutas de cada módulo en el archivo principal si aplica
- Usa los ejemplos de producto y agencia como referencia
- Documenta la estructura y decisiones relevantes

Checklist:

- [ ] Archivo de rutas por módulo creado
- [ ] Objetos de rutas importados y combinados
- [ ] Ejemplos aplicados
- [ ] Documentación actualizada
