---
mode: "agent"
model: GPT-4.1
tools:
  [
    "codebase",
    "editFiles",
    "githubRepo",
    "filesystem",
    "list_directory",
    "read_file",
    "search_files",
  ]
description: "Crear todo el backend de un módulo siguiendo la guía AI y las acciones del proyecto, aplicando las mejores prácticas de personalización de Copilot."
---

Tu objetivo es crear todo el backend de un módulo desde cero, siguiendo la arquitectura, convenciones y acciones definidas en `.github/copilot-instructions.md` y los workflows de `.github/copilot-topics/`.

Para cada acción, utiliza el comando:

**[Sigue las instrucciones detalladas en `../copilot-topics/actions/{accion}.md`](../copilot-topics/actions/{accion}.md)**

Esto asegura que cada paso siga exactamente las instrucciones y convenciones del proyecto.

## Personalización y contexto (según recomendaciones Copilot)

- Proporciona siempre contexto relevante y específico del proyecto en cada instrucción.
- Sé explícito sobre convenciones, estructura de carpetas y nombres de entidades/módulos.
- Si el usuario da instrucciones ambiguas, solicita aclaraciones para asegurar la intención.
- Incluye ejemplos concretos cuando expliques flujos o convenciones.
- Mantén el prompt actualizado con cambios en la estructura o reglas del proyecto.
- Si el flujo requiere pasos adicionales o personalizados, documenta y justifica cada uno.

**Flujo general:**

1. Solicita al usuario el nombre del módulo y la entidad principal (ej: módulo `_billing`, entidad `invoice`).
2. Verifica que las acciones necesarias existen en `.github/copilot-topics/copilot-actions.md` y consulta los pasos detallados en `.github/copilot-topics/actions/`.
3. Antes de cada acción, revisa los requisitos previos en `.github/copilot-topics/pasos_pre_accion.md`.
4. Para cada acción, ejecuta:
   - **Sigue las instrucciones detalladas en `../copilot-topics/actions/{accion}.md`**
   - Ejemplo: para crear la entidad, usa `[Sigue las instrucciones detalladas en ../copilot-topics/actions/crear_domain.md](../copilot-topics/actions/crear_domain.md)`
   - Realiza cada acción en el siguiente orden (acciones backend):
     1. **[Sigue las instrucciones detalladas en ../copilot-topics/actions/crear_domain.md](../copilot-topics/actions/crear_domain.md)** (entidad e interfaces de dominio)
     2. **[Sigue las instrucciones detalladas en ../copilot-topics/actions/crear_infra.md](../copilot-topics/actions/crear_infra.md)** (infraestructura: esquema Mongoose, mapper, repositorio)
     3. **[Sigue las instrucciones detalladas en ../copilot-topics/actions/crear_usecase.md](../copilot-topics/actions/crear_usecase.md)** (casos de uso)
     4. **[Sigue las instrucciones detalladas en ../copilot-topics/actions/crear_presentation.md](../copilot-topics/actions/crear_presentation.md)** (presentación y rutas del caso de uso)
     5. **[Sigue las instrucciones detalladas en ../copilot-topics/actions/registrar_di.md](../copilot-topics/actions/registrar_di.md)** (registro de dependencias en DI)
     6. **[Sigue las instrucciones detalladas en ../copilot-topics/actions/integrar_rutas.md](../copilot-topics/actions/integrar_rutas.md)** (integración de rutas en router global y API)
5. Después de cada acción, valida y documenta el resultado según `.github/copilot-topics/pasos_post_accion.md`.
6. Si falta información, pregunta al usuario solo lo necesario para continuar.
7. Si alguna acción no existe, sugiere la más cercana y notifícalo.
8. Documenta cada paso y resultado, asegurando trazabilidad.

**Recomendaciones adicionales de personalización Copilot:**

- Adapta el flujo y las respuestas a las necesidades y contexto del usuario.
- Utiliza siempre el contexto del workspace y la estructura real del proyecto.
- Si detectas cambios en la estructura, ajusta el flujo y notifica al usuario.

**Convenciones y buenas prácticas:**

- Sigue la modularidad y nomenclatura estricta del proyecto.
- Usa los archivos de referencia para asegurar cumplimiento de estándares.
- Mantén la documentación clara y actualizada tras cada acción.

**Referencia a personalización Copilot:**

- Consulta y aplica las recomendaciones oficiales: https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions

**Referencia rápida:**

- Acciones disponibles: `.github/copilot-topics/copilot-actions.md`
- Pasos detallados: `.github/copilot-topics/actions/`
- Requisitos previos: `.github/copilot-topics/pasos_pre_accion.md`
- Pasos posteriores: `.github/copilot-topics/pasos_post_accion.md`
- Guía principal: `.github/copilot-instructions.md`
