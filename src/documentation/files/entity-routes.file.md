# path
/src/_{modulo}/_back/{entity}/{entityName}.routes.ts

descripcion
Define las rutas backend específicas para la entidad.

# nomenclatura
{entityName}.routes.ts

# dependencias
- Lista de importaciones de librerías:
  - Ninguna por defecto
- Lista de importaciones de otros tipos de archivos del proyecto:
  - import {create{PascalCase(entityName)}Presentation} desde './usecase/create{PascalCase(entityName)}/create{PascalCase(entityName)}.presentation'
  - import {get{PascalCase(entityName)}Presentation} desde './usecase/get{PascalCase(entityName)}/get{PascalCase(entityName)}.presentation'
- Lista de exportaciones de este archivo:
  - export const {camelCase(entityName)}Routes

# plantilla inicial
```typescript
import { create{PascalCase(entityName)}Presentation } from "./usecase/create{PascalCase(entityName)}/create{PascalCase(entityName)}.presentation";
import { get{PascalCase(entityName)}Presentation } from "./usecase/get{PascalCase(entityName)}/get{PascalCase(entityName)}.presentation";

export const {camelCase(entityName)}Routes = {
  "POST/api/{entityName}/create/": create{PascalCase(entityName)}Presentation,
  "GET/api/{entityName}/:id/": get{PascalCase(entityName)}Presentation,
};
```

# Patrones de uso

## Agregar rutas

### Prompt del usuario
"Agregar ruta GET /{entityName}/list"

#### Partes detectadas
- Ruta: GET /{entityName}/list

#### Incrementando las partes
Se agregan rutas según la API de la entidad.

#### Aplicacion de partes
```typescript
export const {camelCase(entityName)}Routes = {
  "GET/api/{entityName}/list/": (req, res) => {
    res.json([]);
  },
};
```
