# path
`/src/_{modulo}/_back/{modulo}.routes.ts`

descripcion
Archivo que define las rutas backend para el módulo funcional.


# nomenclatura
Nombre: PascalCase(moduleName) + Routes
Ejemplo: `{ModuleName}Routes`

# dependencias
- Lista de importaciones de librerías:
  - Ninguna por defecto
- Lista de importaciones de otros tipos de archivos del proyecto:
  - import {entityName}Routes desde './{entityName}/{entityName}.routes'
- Lista de exportaciones de este archivo:
  - export const {moduleName}Routes





# plantilla inicial
```ts
// Importa los entity-routes que necesites
import { {entityName}Routes } from "./{entityName}/{entityName}.routes";

export const {moduleName}Routes = {
  ...{entityName}Routes,
  // ...otros entity-routes
};
```


# Patrones de uso

## Agregar entity-routes al módulo

### Prompt del usuario
"Agregar entity influencer al moduleRoutes"

#### Partes detectadas
- Entity: influencer

#### Incrementando las partes
Agregar el entity-routes usando spread en el objeto moduleRoutes.

#### Aplicacion de partes
```ts
import { {entityName}Routes } from "./{entityName}/{entityName}.routes";

export const {moduleName}Routes = {
  ...{entityName}Routes,
  // ...otros entity-routes
};
```
