---

mode: "agent"
model: GPT-4.1
tools:
[
"codebase",
"editFiles",
"filesystem",
"list_directory",
"read_file",
"search_files",
]
description: "Genera documentación estructurada y comentada sobre la arquitectura, convenciones y flujos clave de un proyecto. El resultado debe servir como referencia rápida para agentes AI y desarrolladores."
---

## Objetivo

- Crear un archivo markdown para documentar la estructura ya filtrada dentro del archivo `src/documentation/project-structure.tree.md`. El resultado debe ser fácilmente adaptable y extensible según las necesidades del proyecto.

- El archivo final debe estar en `src/documentation/project-structure.general.md`.

## Paso previo obligatorio

- Toma como base el archivo `src/documentation/project-structure.tree.md` para iniciar la documentación y asegurar que la estructura refleje el estado actual del proyecto.

## Partes del documento final

### Dependencias principales

- Enumera las dependencias clave del proyecto, incluyendo base de datos, UI, framework, testing, DI y otras relevantes para el contexto del proyecto. Busca en archivos que aparezcan dentro de `src/documentation/project-structure.tree.md`.
- Ejemplo:
  - **Base de datos:** MongoDB (`mongoose`)
  - **UI:** React, Tailwind CSS
  - **Framework:** Next.js
  - **Testing/BDD:** Playwright, Playwright-BDD
  - **DI:** tsyringe
  - **Otros:** reflect-metadata, path-to-regexp

### Estructura base y formato

- Utiliza el formato de árbol para representar la estructura de carpetas y archivos. Que se encuentran en `src/documentation/project-structure.tree.md`.

### Convenciones

- Genera un listado de las partes relevantes encontradas en `src/documentation/project-structure.tree.md`, este listado debe incluir:
  nombre de la parte y su nomenclatura de archivo o carpeta.

### Formato de documentación

Para cada archivo o carpeta relevante, añade un comentario al final de la línea (`// ...`) explicando su propósito o patrón de uso. Si aplica, agrega ejemplos básicos y notas sobre cómo extender o agregar funcionalidad siguiendo los patrones del árbol.

## Notas

- Extiende esta estructura para otros componentes siguiendo el mismo patrón.
- Modifica los ejemplos y descripciones según las necesidades de tu proyecto.
- Si detectas nuevos patrones o estructuras, documenta el ejemplo y actualiza la guía global.

## Próximos pasos

- Documenta el resultado y los próximos pasos tras cada acción.
- Pregunta al usuario si quiere agregar alguna descripción o comentario especial para cada tipo/ruta relevante.
