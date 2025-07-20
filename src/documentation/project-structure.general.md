# Documentación General de la Estructura del Proyecto

---

## Dependencias principales

- **Base de datos:** MongoDB (`mongoose`) // ODM para modelado y acceso a la base de datos
- **UI:** React, Tailwind CSS // Framework de UI y utilidades de estilos
- **Framework:** Next.js // Framework principal para SSR y API routes
- **Testing/BDD:** Playwright, Playwright-BDD // Testing end-to-end y BDD
- **DI:** tsyringe // Inyección de dependencias
- **Otros:** reflect-metadata, path-to-regexp // Metadatos y utilidades de rutas

---

## Estructura base y formato

```tree
src
└── _{moduleName} // raíz de un módulo funcional
    └── _back // lógica, entidades, casos de uso
        └── {entityName} // entidad específica
            └── domain // interfaces y entidades puras
                ├── {entityName}.repository.interface.ts // interface del repositorio
                └── {entityName}.entity.ts // entidad de dominio
            └── infra // implementaciones, mappers, esquemas
                ├── {entityName}.repository.ts // implementación del repositorio
                ├── {entityName}.document.ts // definición de documento MongoDB
                ├── {entityName}.schema.ts // esquema y modelo de MongoDB
                └── {entityName}.mapper.ts // mapeo entre dominio y persistencia
            └── usecase // casos de uso
                └── {useCaseName} // carpeta por caso de uso
                    ├── {useCaseName}.usecase.ts // lógica del caso de uso
                    └── {useCaseName}.presentation.ts // presentación HTTP/API
            └── {entityName}.routes.ts // rutas backend de la entidad
        └── {moduleName}.routes.ts // rutas backend del módulo
```

---

## Convenciones

- **_{moduleName}:** Carpeta raíz de cada módulo funcional. Ejemplo: `_app`, `_agency`.
- **_back:** Lógica de backend, entidades, casos de uso.
- **{entityName}:** Carpeta para cada entidad. Ejemplo: `product`, `agency`.
- **domain:** Interfaces y entidades puras.
- **infra:** Implementaciones, mappers, esquemas y repositorios.
- **usecase:** Casos de uso, cada uno en su propia carpeta.
- **routes.ts:** Archivo de rutas para la entidad o módulo.

---

## Ejemplo de extensión

Para agregar una nueva entidad:
1. Crea la carpeta `{entityName}` bajo `src/_{moduleName}/_back/`.
2. Agrega subcarpetas `domain/`, `infra/`, `usecase/` siguiendo el patrón.
3. Implementa los archivos base (`entity.ts`, `repository.ts`, etc.) y documenta cada uno con comentarios.
4. Actualiza el archivo de rutas si aplica.


## Flujo de ejecución por capas

1. **Interacción externa**
   - El usuario o sistema externo realiza una petición (API, SSR, etc.).

2. **Rutas (Routing)**
   - La petición es recibida por el archivo de rutas correspondiente (`{entityName}.routes.ts` o `{moduleName}.routes.ts`).
   - Se determina el controlador o handler adecuado.

3. **Presentación (Presentation)**
   - El controlador invoca la capa de presentación (`{useCaseName}.presentation.ts`), donde se gestionan validaciones y formato de entrada/salida.

4. **Caso de uso (Use Case)**
   - La presentación llama al caso de uso (`{useCaseName}.usecase.ts`), que contiene la lógica de negocio específica.

5. **Dominio**
   - El caso de uso interactúa con las entidades de dominio y sus interfaces (`domain/`).

6. **Infraestructura**
   - Si se requiere persistencia o integración, el caso de uso utiliza los repositorios y mappers definidos en `infra/` para acceder a la base de datos u otros servicios.

7. **Respuesta**
   - El resultado fluye de regreso por las capas hasta la presentación, que lo retorna al usuario o sistema externo.


- Sigue el patrón de árbol para nuevos módulos y entidades.
- Documenta cada archivo con comentarios al final de la línea explicando su propósito.
- Si surge un nuevo patrón, actualiza esta guía y los ejemplos.

---

## Próximos pasos

- ¿Deseas agregar alguna descripción o comentario especial para algún tipo/ruta relevante?
- Si detectas nuevas convenciones, notifícalo para actualizar la documentación global.
