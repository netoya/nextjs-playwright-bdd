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
description: "Genera documentación de la nomenclatura y convenciones de nombres en el proyecto. El resultado debe servir como referencia rápida para agentes AI y desarrolladores."

---

# Objetivo

Documentar la nomenclatura y convenciones de nombres para archivos y entidades, asegurando coherencia y extensibilidad en el proyecto. El resultado debe ser fácilmente adaptable y servir como referencia rápida para agentes AI y desarrolladores.
El archivo final debe estar en `src/documentation/project-structure.nomenclature.md`.

# Partes del documento final

1. **Introducción**

   - Explica el propósito del archivo y su uso para mantener la coherencia de nombres y rutas.

2. **Regla general**

   - La nomenclatura se basa en la estructura de `src/documentation/project-structure.tree.md`.
   - Para cada tipo relevante, se debe leer el árbol y los archivos referenciados para detectar el tipo y su path.

3. **Estructura por tipo**

   - Para cada tipo relevante (interface, entidad, repositorio, documento, schema, mapper, usecase, presentation, routes, etc.), documenta:
     - Nombre del archivo
     - Ubicación (path relativo)
     - Tipo de dato (interface, class, etc.)
     - Convención de nombre (case, prefijo, sufijo)
     - Ejemplo concreto
     - Comentario de propósito al final de la línea

4. **Ejemplo de sección**

   ## {entityName}.repository.interface.ts

   // Interface del repositorio de la entidad, ubicada en domain/
   // Tipo de dato: interface
   // Convención: I + PascalCase(entityName) + Repository
   // Ejemplo: para agency.repository.interface.ts sería IAgencyRepository

5. **Notas de extensión**

   - Cómo agregar nuevos tipos siguiendo el patrón.
   - Qué hacer si se detecta un nuevo tipo en el árbol.

6. **Próximos pasos**
   - Validar que la nomenclatura se aplique en todo el proyecto.
   - Preguntar al usuario si desea agregar comentarios personalizados por tipo/ruta.

---
