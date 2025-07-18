---
mode: "agent"
model: GPT-4.1
tools: ["githubRepo", "codebase"]
description: "Personaliza la UI en cada módulo siguiendo la guía del proyecto"
---

Tu objetivo es personalizar la UI en cada módulo.

Solicita el nombre del módulo y entidad si no se proporcionan.

Requisitos:

- Consulta la guía detallada en `.github/copilot-topics/actions/crear_ui.md` para pasos y checklist.
- Ubica y reutiliza los componentes base en `src/_shared/_front/ui/components/ui/`
- Crea el componente específico en el módulo correspondiente, siguiendo atomic design o patrones avanzados
- Importa y utiliza los componentes base en el nuevo componente
- Personaliza mediante props y variantes
- Documenta el uso y variantes en el propio módulo y enlaza al demo global si aplica
- Realiza pruebas visuales y funcionales usando los demos disponibles
- Actualiza la guía si surge un nuevo patrón relevante

Checklist:

- [ ] Componentes base reutilizados
- [ ] Componente específico creado
- [ ] Personalización aplicada
- [ ] Documentación y demo actualizados
- [ ] Pruebas visuales y funcionales realizadas
