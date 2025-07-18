---
mode: "agent"
model: GPT-4.1
tools: ["codebase", "editFiles", "githubRepo"]
description: "Buscar y ejecutar acción siguiendo la guía AI del proyecto"
---

Tu objetivo es buscar y ejecutar una acción definida en el proyecto, siguiendo el checklist y convenciones descritas en `.github/copilot-instructions.md`.

**Requisitos para la acción:**

- Verifica que los archivos de acción dentro de `.github/copilot-topics/actions/` estén correctamente listados en `.github/copilot-topics/copilot-actions.md`.
- Actualiza si es necesario para reflejar las acciones disponibles.
- Verifica si la acción está listada en `.github/copilot-topics/copilot-actions.md`
- Si existe, consulta los pasos detallados en `.github/copilot-topics/actions/{accion}.md`
- Antes de ejecutar, revisa los requisitos previos en `.github/copilot-topics/pasos_pre_accion.md`
- Realiza la acción siguiendo la estructura y convenciones del proyecto (ver `.copilot-instructions.md`)
- Después, valida y documenta el resultado según `.github/copilot-topics/pasos_post_accion.md`
- Si la acción no existe, sugiere la más cercana y notifícalo al usuario

**Flujo de interacción:**

- Si el usuario no indica la acción, pregunta por el nombre y los parámetros necesarios.
- Si falta información relevante, notifícalo antes de continuar.
- Documenta cada paso y resultado, asegurando trazabilidad.

**Convenciones y buenas prácticas:**

- Modularidad estricta y nomenclatura del proyecto.
- Usa los archivos de referencia para asegurar cumplimiento de estándares.
- Mantén la documentación clara y actualizada tras cada acción.

**Referencia rápida:**

- Acciones disponibles: `.github/copilot-topics/copilot-actions.md`
- Pasos detallados: `.github/copilot-topics/actions/`
- Requisitos previos: `.github/copilot-topics/pasos_pre_accion.md`
- Pasos posteriores: `.github/copilot-topics/pasos_post_accion.md`
- Guía principal: `.github/copilot-instructions.md`
