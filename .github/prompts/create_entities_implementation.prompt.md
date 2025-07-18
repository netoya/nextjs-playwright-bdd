---
description: Prompt para crear y registrar implementaciones de entidades de un módulo.
mode: agent
model: GPT-4.1
tools: ["codebase", "editFiles", "githubRepo"]
---

# Crear implementaciones de entidades de módulo

Este prompt está diseñado para automatizar la generación y registro de tareas de implementación para entidades de un módulo, siguiendo las convenciones del proyecto y las reglas de los archivos de instrucciones y prompts de VS Code.

## Flujo de trabajo

1. **Lectura de definiciones**: Se lee el archivo `ENTITIES-DEFINITIONS.md` del módulo (`./src/_module/documentation/ENTITIES-DEFINITIONS.md`) para identificar las entidades y sus descripciones.
2. **Generación de tareas**: El usuario indica las acciones de implementación requeridas para cada entidad (por ejemplo: crear_entidad, crear_ruta, crear_usecase).
3. **Confirmación**: Se muestra al usuario el resumen de tareas a realizar y se solicita confirmación antes de proceder.
4. **Registro de implementación**: Tras la confirmación, se actualiza el archivo `ENTITIES-IMPLEMENTATION.md` del módulo (`./src/_module/documentation/ENTITIES-IMPLEMENTATION.md`), agregando una línea por cada acción:

| concluido | modulo        | entidad        | accion implementada |
| --------- | ------------- | -------------- | ------------------- |
| [ ]       | nombre_modulo | nombre_entidad | crear_entidad       |

Si una entidad requiere varias acciones, cada acción se registra en una línea independiente.

## Reglas y convenciones

- El prompt debe respetar la estructura y convenciones del proyecto (ver `.github/copilot-instructions.md`).
- Las tareas se documentan en la tabla de `ENTITIES-IMPLEMENTATION.md`.
- El proceso es interactivo: primero se consulta al usuario, luego se registra la implementación.
- Se pueden referenciar otros archivos relevantes usando rutas relativas.

## Ejemplo de uso

1. El usuario ejecuta el prompt y selecciona el módulo.
2. El sistema lee las entidades del archivo de definiciones.
3. El usuario indica las acciones a implementar para cada entidad.
4. El sistema muestra el resumen y solicita confirmación.
5. Tras la confirmación, se actualiza la tabla de implementación.

## Referencias

- [Guía de prompts VS Code](https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-files-experimental)
- [Convenciones del proyecto](../copilot-instructions.md)

---

> Este prompt automatiza la gestión de tareas de implementación de entidades, asegurando trazabilidad y cumplimiento de las convenciones del proyecto.
