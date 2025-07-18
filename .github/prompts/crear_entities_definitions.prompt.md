---
mode: "agent"
description: "Genera el archivo ENTITIES-DEFINITIONS.md para documentar las entidades de un módulo antes de su implementación"
---


## Objetivo

Construir el archivo `/src/_{modulo}/documentation/ENTITIES-DEFINITIONS.md` que documenta las entidades del módulo antes de su implementación, siguiendo las mejores prácticas de prompts en VS Code.

## Estructura y recomendaciones

- Usa formato Markdown y metadatos (Front Matter) para claridad y compatibilidad.
- Mantén instrucciones cortas, directas y auto-contenidas.
- Solicita confirmación al usuario antes de generar el archivo final.
- Adapta el formato si el usuario requiere campos extra o ajustes.
- Puedes referenciar archivos de instrucciones para reglas comunes.

## Pasos

1. Solicita al usuario el nombre del módulo y las entidades a documentar (nombre, descripción y atributos).
2. Si tienes dudas sobre la información recibida, pregunta antes de proponer la estructura.
3. Muestra al usuario un resumen simple de los datos recibidos (nombre del módulo, entidades y atributos) para confirmar antes de generar el archivo.
4. El formato del archivo `ENTITIES-DEFINITIONS.md` es fijo y siempre será:

    ```markdown
    # Definición de entidades del módulo _{modulo}

    ## Entidad: nombreEntidad

    **Descripción:** Breve descripción de la entidad.

    **Atributos:**
    - `atributo1: Tipo` — Descripción breve (opcional)
    - `atributo2: Tipo`
    - ...
    ```

5. Una vez confirmados los datos, genera el archivo final en la ruta `/src/_{modulo}/documentation/ENTITIES-DEFINITIONS.md` usando el formato fijo.
6. Documenta el resultado y próximos pasos tras la acción.

## Notas

- Este archivo sirve como referencia previa a la implementación de las entidades.
- La información mínima requerida por entidad es: nombre, descripción (opcional) y atributos.
- Si el usuario quiere agregar campos extra o cambiar el formato, adapta la estructura según sus indicaciones.
- Mantén la coherencia con las convenciones del proyecto y evita ambigüedades.

---

¿Tienes dudas sobre el módulo o las entidades?  
¿La estructura propuesta te parece adecuada o quieres agregar ajustes?