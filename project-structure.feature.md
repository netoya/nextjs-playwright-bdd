# Guía: Estructura de documento feature

Este archivo explica cómo estructurar y documentar una feature siguiendo la arquitectura modular del proyecto. Sirve como referencia para crear documentos de cualquier caso de uso o funcionalidad.

## Propósito

Facilitar la trazabilidad, colaboración y ejecución ordenada de acciones técnicas, agrupando los pasos por responsabilidad y tipo de artefacto. Así, cualquier desarrollador o agente AI puede identificar rápidamente qué archivos modificar y en qué orden.

## Estructura recomendada

### Encabezado
- **Título:** Nombre de la feature.
- **Descripción:** Breve explicación del objetivo y alcance.
- **Entidades involucradas:** Lista de entidades principales que participan.

### Secciones agrupadas
Las se agrupan por el tipo de responsabilidad y el flujo natural de desarrollo:

#### 1. Entidad
Define la estructura principal del dominio. Aquí se crean o modifican las clases que representan el modelo de datos.
- Ejemplo: `/src/_{module}/_back/{entity}/domain/{entity}.entity.ts`

#### 2. Interface y Repository
Define las interfaces y repositorios que permiten la abstracción y acceso a datos. Incluye la definición de métodos y la lógica de negocio principal.
- Ejemplo: `/src/_{module}/_back/{entity}/domain/{entity}.repository.interface.ts`, `/src/_{module}/_back/{entity}/infra/{entity}.repository.ts`

#### 3. Implementación y Dependency Injection
Incluye los artefactos de infraestructura (documentos, esquemas, mappers) y el registro de dependencias en el contenedor DI. Permite conectar el dominio con la base de datos y otros servicios.
- Ejemplo: `/src/_{module}/_back/{entity}/infra/{entity}.document.ts`, `/src/_{module}/_back/shared/infra/di/dependencies.ts`

#### 4. Caso de uso y Presentación
Define la lógica específica de la feature y su presentación (entrada/salida HTTP, validaciones, pasos). Cada caso de uso reside en su propia carpeta.
- Ejemplo: `/src/_{module}/_back/{entity}/usecase/{usecase}/{usecase}.presentation.ts`

#### 5. Rutas
Define las rutas de la entidad y del módulo, y su registro global si aplica. Permite exponer la feature vía API.
- Ejemplo: `/src/_{module}/_back/{entity}/entity.routes.ts`, `/src/_app/_back/routes.ts`

## Justificación de la agrupación

- **Modularidad:** Cada sección corresponde a una responsabilidad clara dentro del flujo de desarrollo, facilitando la mantenibilidad y escalabilidad.
- **Trazabilidad:** Permite identificar rápidamente qué archivos y clases están involucrados en la feature.
- **Colaboración:** Facilita el trabajo en equipo, ya que cada desarrollador puede abordar una sección específica sin solaparse.
- **Automatización:** Los agentes AI pueden ejecutar acciones de manera ordenada y documentar el avance.

## Ejemplo de estructura

```markdown
# Feature: Nombre de la feature

Descripción: ...

## Entidades involucradas
- {entity1}
- {entity2}

## Pasos agrupados por tipo

### Entidad
- [ ] `/src/_{module}/_back/{entity}/domain/{entity}.entity.ts`
  - Definir la clase ...

### Interface y Repository
- [ ] `/src/_{module}/_back/{entity}/domain/{entity}.repository.interface.ts`
  - Definir la interfaz ...
- [ ] `/src/_{module}/_back/{entity}/infra/{entity}.repository.ts`
  - Implementar la clase ...

### Implementación y Dependency Injection
- [ ] `/src/_{module}/_back/{entity}/infra/{entity}.document.ts`
  - Definir el tipo ...
- [ ] `/src/_{module}/_back/shared/infra/di/dependencies.ts`
  - Registrar dependencias ...

### Caso de uso y Presentación
- [ ] `/src/_{module}/_back/{entity}/usecase/{usecase}/`
  - [ ] `{usecase}.presentation.ts` ...
  - [ ] `{usecase}.usecase.ts` ...
  - [ ] `{usecase}.step.ts` (opcional) ...

### Rutas
- [ ] `/src/_{module}/_back/{entity}/entity.routes.ts` ...
- [ ] `/src/_{module}/_back/{entity}/routes.ts` ...
- [ ] `/src/_app/_back/routes.ts` (si aplica) ...
```

---
¿Falta alguna sección, justificación o ejemplo relevante? Indícalo para mejorar esta guía.
