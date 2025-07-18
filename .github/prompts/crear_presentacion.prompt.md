---
mode: "agent"
model: GPT-4.1
tools: ["githubRepo", "codebase"]
description: "Genera archivos de presentación para casos de uso siguiendo la guía del proyecto"
---

Tu objetivo es generar archivos de presentación (`presentation`) para casos de uso.

Solicita el nombre del caso de uso, entidad y módulo si no se proporcionan.

Requisitos:

- Consulta la guía detallada en `.github/copilot-topics/actions/crear_presentacion.md` para pasos y checklist.
- Crea `{casoDeUso}.presentation.ts` en la carpeta del caso de uso
- Importa el caso de uso y resuélvelo con `container.resolve` (tsyringe)
- Usa `NextApiRequest` y `NextApiResponse` para manejar la petición y respuesta
- Extrae los datos necesarios del request (`req.body`, `req.query`, etc)
- Documenta el flujo y decisiones relevantes

Checklist:

- [ ] Archivo de presentación creado
- [ ] Caso de uso importado y resuelto
- [ ] Manejo correcto de petición y respuesta
- [ ] Extracción de datos necesaria
- [ ] Documentación actualizada
