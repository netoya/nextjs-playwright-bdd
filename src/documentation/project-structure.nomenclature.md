# Nomenclatura y Convenciones de Nombres

## Introducción

Este documento define las reglas y convenciones de nomenclatura para archivos, entidades y rutas en el proyecto. Su objetivo es mantener la coherencia y facilitar la extensibilidad, sirviendo como referencia rápida para agentes AI y desarrolladores.

## Regla general

La nomenclatura se basa en la estructura definida en `project-structure.tree.md`. Cada tipo relevante se documenta según su ubicación, tipo de dato y convención de nombre.

## Estructura por tipo

### {entityName}.repository.interface.ts
- **Ubicación:** `/src/_{modulo}/_back/{entity}/domain/`
- **Tipo de dato:** `interface`
- **Convención:** `I` + PascalCase(entityName) + `Repository`
- **Ejemplo:** `IProductRepository` // Interface del repositorio de la entidad

### {entityName}.entity.ts
- **Ubicación:** `/src/_{modulo}/_back/{entity}/domain/`
- **Tipo de dato:** `class`
- **Convención:** PascalCase(entityName)
- **Ejemplo:** `Product` // Entidad de dominio

### {entityName}.document.ts
- **Ubicación:** `/src/_{modulo}/_back/{entity}/infra/`
- **Tipo de dato:** `interface`
- **Convención:** PascalCase(entityName) + `Document`
- **Ejemplo:** `ProductDocument` // Interface para documento MongoDB

### {entityName}.schema.ts
- **Ubicación:** `/src/_{modulo}/_back/{entity}/infra/`
- **Tipo de dato:** `Schema` y `Model`
- **Convención:** PascalCase(entityName) + `Schema` / PascalCase(entityName) + `Model`
- **Ejemplo:** `ProductSchema`, `ProductModel` // Esquema y modelo de Mongoose

### {entityName}.mapper.ts
- **Ubicación:** `/src/_{modulo}/_back/{entity}/infra/`
- **Tipo de dato:** `class`
- **Convención:** PascalCase(entityName) + `Mapper`
- **Ejemplo:** `ProductMapper` // Mapper entre dominio y persistencia

### {entityName}.repository.ts
- **Ubicación:** `/src/_{modulo}/_back/{entity}/infra/`
- **Tipo de dato:** `class`
- **Convención:** PascalCase(entityName) + `Repository`
- **Ejemplo:** `ProductRepository` // Implementación del repositorio

### {useCaseName}.usecase.ts
- **Ubicación:** `/src/_{modulo}/_back/{entity}/usecase/{useCaseName}/`
- **Tipo de dato:** `class`
- **Convención:** PascalCase(useCaseName) + `UseCase`
- **Ejemplo:** `CreateProductUseCase` // Caso de uso

### {useCaseName}.presentation.ts
- **Ubicación:** `/src/_{modulo}/_back/{entity}/usecase/{useCaseName}/`
- **Tipo de dato:** `function`
- **Convención:** camelCase(useCaseName) + `Presentation`
- **Ejemplo:** `createProductPresentation` // Presentación HTTP del caso de uso

### {entityName}.routes.ts
- **Ubicación:** `/src/_{modulo}/_back/{entity}/`
- **Tipo de dato:** `object`
- **Convención:** camelCase(entityName) + `Routes`
- **Ejemplo:** `productRoutes` // Rutas de la entidad

### {moduleName}.routes.ts
- **Ubicación:** `/src/_{modulo}/_back/`
- **Tipo de dato:** `object`
- **Convención:** camelCase(moduleName) + `Routes`
- **Ejemplo:** `routes` // Rutas globales del módulo

## Notas de extensión

- Para agregar nuevos tipos, sigue el patrón: nombre descriptivo, ubicación coherente y convención de sufijo/prefijo según el tipo.
- Si se detecta un nuevo tipo en el árbol, documenta su convención y propósito siguiendo el formato de este archivo.

## Próximos pasos

- Validar que la nomenclatura se aplique en todo el proyecto.
- ¿Deseas agregar comentarios personalizados por tipo/ruta? Indícalo para mejorar esta referencia.
