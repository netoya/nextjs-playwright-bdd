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
description: "Analiza y documenta la estructura de módulos y archivos del proyecto a partir del árbol de estructura."
---

## Objetivo

Crear documentación detallada sobre la estructura de módulos, entidades y archivos del proyecto. Tambien se puede consultar los tipos ya existentes.

El archivo final debe estar en `src/documentation/project-structure.tree.md`.

Pregunta al usuario por los tipos de archivos/rutas relevantes y ve agregando a la documentación. Puedes indicarle que puede usar /path/{nombreTipo} y que debe nombrar este nombre como quiera.
Pregunta al usuario si quiere agregar alguna descripción o comentario a este tipo. Agrega directamente lo que escriba el usuario como comentario al final de la línea. Debe ser corto y conciso.

## Flujo de trabajo

1. **Analizar el árbol de estructura**

   - Extrae los módulos, entidades y tipos de archivo relevantes del árbol.
   - Enumera las rutas y partes principales.

2. **Generar documentación base**

## Ejemplos

Ejemplo de estructura de módulos y entidades:

```markdown
Usuario:
Quiero agregar el tipo entidad en el path /src/{moduleName}/\_back/{entityName}/domain/{entityName}.entity.ts
Asistente:
Quieres agregar una descripción o comentario especial para este tipo de módulo?
Usuario:
Define la entidad principal del dominio
Asistente:
```

Salida:

```
- src
-- {moduleName}
--- \_back
---- {entityName}
----- domain
------ {entityName}.entity.ts // Define la entidad principal del dominio
```

Para cada archivo o carpeta relevante, añade un comentario al final de la línea (`// ...`) explicando su propósito o patrón de uso. Si aplica, agrega ejemplos básicos y notas sobre cómo extender o agregar funcionalidad siguiendo los patrones del árbol.

Si detectas nuevos patrones o estructuras, documenta el ejemplo y actualiza la guía global.

Documenta el resultado y los próximos pasos tras cada acción.
