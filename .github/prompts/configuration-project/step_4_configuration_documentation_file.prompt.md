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
description: "Genera documentación sobre los tipos generales de archivos en el proyecto, su versión vacía y cómo agregar funcionalidad dentro del archivo."
---

## Objetivo

Crear documentación detallada para cada tipo de archivo general del proyecto, incluyendo su plantilla inicial y patrones de uso para extender funcionalidad. Se generico en nombres. Debe contener importes y exportes de las rutas de entidades y módulos.

## Flujo de trabajo

1. **Identificar los tipos de archivo**

   - Analiza la estructura del proyecto usando `src/documentation/project-structure.tree.md` y `src/documentation/project-structure.general.md`.
   - Enumera los tipos de archivo relevantes (entidad, repositorio, schema, mapper, presentación, etc.).
   - La salida debe ser generica y aplicable a cualquier entidad del proyecto. Fijate para la nomenclatura el archivo `src/documentation/project-structure.nomenclature.md`.

2. **Generar documentación base**

   - Para cada tipo, crea un archivo `.md` en `src/documentation/files/` siguiendo el formato `{nombre-del-archivo}.file.md`.
   - Incluye las siguientes secciones en cada archivo:
     - path: Ruta del archivo en el proyecto.
     - descripcion: Breve descripción del propósito del archivo.
     - plantilla inicial: Ejemplo vacío o estructura básica.
     - patrones de uso: Explicación de cómo agregar funcionalidad, con:
       - titulo
       - prompt del usuario
       - partes detectadas
       - incrementando las partes
       - aplicacion de partes: Ejemplo de código que muestra cómo se vería el archivo tras aplicar las partes. contiene importes y exportes de las rutas de entidades y módulos.

3. **Validar y documentar**

   - Verifica que cada archivo generado cumpla con el formato y la estructura solicitada.
   - Documenta el resultado y los próximos pasos tras cada acción.

4. **Actualizar documentación global**
   - Si se detecta un nuevo tipo de archivo o patrón relevante, actualiza la guía y la documentación correspondiente.

## Plantilla base para cada archivo de documentación

```
# path
descripcion

# nomenclatura

# dependencias
- Lista de importaciones de liberias:

- Lista de importaciones de otros tipos de archivos del proyecto:

- lista de exportaciones de este archivo:

# plantilla inicial
...

# Patrones de uso

## Agregar {algo}

### Prompt del usuario

#### Partes detectadas

#### Incrementando las partes

#### Aplicacion de partes

```

```

```
