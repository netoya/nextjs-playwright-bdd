---
mode: "agent"
model: GPT-4.1
tools: ["githubRepo", "codebase"]
description: "Genera casos de uso en un módulo siguiendo la guía del proyecto"
---

Tu objetivo es generar casos de uso (`usecase`) en un módulo.

Solicita el nombre del caso de uso, entidad y módulo si no se proporcionan.

Requisitos:

- Consulta la guía detallada en `.github/copilot-topics/actions/crear_usecase.md` para pasos y checklist.
- Crea la carpeta para el caso de uso dentro de `usecase`
- Crea el archivo `{casoDeUso}.usecase.ts` con la clase principal
- Usa `@injectable()` y `@inject` de `tsyringe` para la inyección de dependencias
- Importa interfaces y entidades usando `import type`
- Define el método `execute` con la firma adecuada
- Si aplica, crea el archivo de presentación para la integración con API o UI
- Valida el tipado y la lógica con los métodos del repositorio
- Documenta cualquier decisión relevante

Checklist:

- [ ] Carpeta y archivo de caso de uso creados
- [ ] Inyección de dependencias aplicada
- [ ] Tipado validado
- [ ] Método execute definido
- [ ] Presentación creada si aplica
- [ ] Documentación actualizada
