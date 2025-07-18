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
description: "Muestra al usuario la siguiente tarea segun documentación. No muestres informacion adicional. Muestra exactamente lo que se indica en el flujo de trabajo."
---

## Objetivo

Mostrar la siguiente implementacion dentro del modulo.

## Flujo de trabajo

1. **Identificar el modulo**
   - El usuario debe proporcionar el nombre del módulo donde se implementará la entidad.
   - Nombre de carpeta del módulo:
     - Debe comenzar con un guion bajo (`_`).
     - Debe contener letras minúsculas y guiones bajos.
     - No debe contener espacios ni caracteres especiales.
   - Ejemplo: `_agency`, `_billing`, etc.
1. **Lee la documentacion de las implementaciones**

   - Las implementaciones deben estar en el archivo `src/_{modulo}/documentation/ENTITIES-IMPLEMENTATION.md` dentro de la carpeta del módulo.
   - Buscar en la documentación del módulo las implementaciones disponibles.
   - Ejemplo: `_{modulo}/documentation/ENTITIES-IMPLEMENTATION.md`.
   - Muestra al usuario la primera implementación que encuentre en la documentación que no este chequeada. `La siguiente implementación es {entity_name} - {action_name}`.

1. **Muesta al usuario la definicion de la entidad**

   - Buscar en la documentación del módulo las definiciones de entidades.
   - Las definiciones deben estar en el archivo `ENTITIES-DEFINITIONS.md` dentro de la carpeta del módulo.
   - Ejemplo: `_{modulo}/documentation/ENTITIES-DEFINITIONS.md`.
   - Muestra al usuario la definición de la entidad que se va a implementar. `La entidad es {entity_name}`.

1. **Buscar el archivo de la acción**

   - Muestra al usuario la acción a implementar. `La accion es {action_name}`.
   - Buscar el archivo de la acción a implementar en la carpeta del módulo.
   - El archivo debe estar en la carpeta `.github/copilot-topics/actions/{action_name}.md`.
   - Aplica siguiendo la guia de la acción encontrada. Implementa directamente en el módulo correspondiente. No preguntes nada al usuario, simplemente aplica la acción.

1. **Actualizar la documentación de implementación**

   - Actualiza el archivo `ENTITIES-IMPLEMENTATION.md` dentro de la carpeta del módulo.
   - Marca la implementación como completada. `concluido: [✓]`.
   - Asegúrate de que el formato sea correcto y que la fila esté alineada con las demás.

1. **Siguiente implementación**
   - Si hay más implementaciones pendientes, repite el proceso desde el paso 2. no pidas confirmación al usuario. no preguntes nada.
   - Si no hay más implementaciones, finaliza el flujo de trabajo.
