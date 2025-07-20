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
description: "Crea documentación detallada para requerimientos de features agrupando entidades y pasos por tipo, de forma especifica para implementar en el proyecto. El archivo final debe guardarse en `src/_{moduleName}/documentation/requirements/{featureName}.feature.md`. Debe servir para ayudar a agentes IA a implementar la feature. No debe ejecutar los pasos, solo documentarlos."
---

## Objetivo

Definir requerimientos de una feature agrupando entidades y pasos por tipo.
El archivo final debe ser un documento Markdown que sirva como guía para implementar la feature en el proyecto. Debe guardarse en `src/_{moduleName}/documentation/requirements/{featureName}.feature.md`.

## Flujo de trabajo

1. **Identificar la feature y entidades involucradas**
   - Solicita el nombre, descripción y entidades principales.
   - Si no se detecta el módulo correspondiente, pide al usuario que lo indique explícitamente.
1. **Extraer tipos desde la estructura y archivos de documentación**
   - Los tipos deben obtenerse de `src/documentation/project-structure.general.md` y de los archivos en `src/documentation/files/` para obtener los tipos y descripciones, y utilízalos para poblar la sección de pasos agrupados por tipo en la plantilla.
1. **Rutas y archivos asociados**
   - Utiliza la estructura del proyecto para identificar las rutas y archivos relevantes para cada tipo de paso usando `project-structure.tree.md`.
   - Asegúrate de que las rutas sean consistentes con la nomenclatura del proyecto, como se detalla en `src/documentation/project-structure.nomenclature.md`.
1. **Sacar informacion de la entidad**
   - Antes de comenzar debes leer el archivo `src/_{moduleName}/documentation/ENTITIES-DEFINITIONS.md` para obtener la definición de la entidad y sus propiedades.
1. **Agrupar pasos por tipo**
   - Enumera los tipos de pasos y sus archivos/rutas asociados.
1. **Validar y documentar**
   - Revisa que la estructura esté completa y clara.
1. **Actualiza la informacion de la entidad**
   - Si se detecta un nuevas propiedades o cambios en la entidad, actualiza el archivo `src/_{moduleName}/documentation/ENTITIES-DEFINITIONS.md` con la nueva información.

## Plantilla base para requerimientos de feature

```
# Feature: {Nombre feature}

Descripción:
{descripcion}

## Entidades involucradas
- {entidad 1}
- {entidad 2}

## Pasos agrupados por tipo

### {tipo 1}
- [ ] {ruta/archivo 1}
  - {descripción de la acción o implementación}
  - aplicar: {plantilla para tipo 1. src/documentation/files/{tipo 1}.file.md}

### {tipo 2}
- [ ] {ruta/archivo 2}
  - {descripción de la acción o implementación}
  - aplicar: {plantilla para tipo 2. src/documentation/files/{tipo 2}.file.md}

### {tipo N}
- [ ] {ruta/archivo N}
  - {descripción de la acción o implementación}
  - aplicar: {plantilla para tipo 3. src/documentation/files/{tipo 3}.file.md}

# Modo de implementación
## Pre requisitos
- La estructura de carpetas y archivos debe seguir la convención del proyecto que se encuentra en `src/documentation/project-structure.general.md`.
- La nomenclatura de los archivos y carpetas debe seguir las pautas establecidas en `src/documentation/project-structure.nomenclature.md`.

## Por cada tipo de archivo
- Muestra el tipo de archivo y su ruta.
- Explica brevemente su propósito.
- lee `src/documentation/files/{nombre-del-archivo}.file.md` para obtener la plantilla inicial y patrones de uso.

```

## Patrones de uso

### Agregar feature

#### Prompt del usuario

Solicita la creación de una feature indicando nombre, descripción, entidades y pasos agrupados por tipo. Si el módulo no es detectado, solicita al usuario que lo indique.

#### Partes detectadas

- Nombre de la feature
- Descripción
- Entidades involucradas
- Tipos de pasos
- Módulo (si no se detecta automáticamente)

#### Incrementando las partes

Agrega más entidades o tipos de pasos según la complejidad del requerimiento.

#### Aplicacion de partes

Completa la plantilla inicial con los datos proporcionados por el usuario.
