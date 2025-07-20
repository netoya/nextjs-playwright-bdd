# path
/src/_{modulo}/_back/{entity}/domain/{entityName}.repository.interface.ts

descripcion
Interface que define los métodos de acceso y manipulación para la entidad en el repositorio.

# nomenclatura
I{PascalCase(entityName)}Repository

# dependencias
- Lista de importaciones de librerías:
  - Ninguna por defecto
- Lista de importaciones de otros tipos de archivos del proyecto:
  - import {PascalCase(entityName)} desde './{entityName}.entity'
- Lista de exportaciones de este archivo:
  - export interface I{PascalCase(entityName)}Repository

# plantilla inicial
```typescript
export interface I{PascalCase(entityName)}Repository {
  // Métodos base
}
```

# Patrones de uso

## Agregar métodos al repositorio

### Prompt del usuario
"Agregar método findById al repositorio de {entityName}"

#### Partes detectadas
- Método: findById
- Parámetro: id
- Retorno: {entityName}

#### Incrementando las partes
Se agregan métodos según necesidades de acceso a datos.

#### Aplicacion de partes
```typescript
import { {PascalCase(entityName)} } from './{entityName}.entity';

export interface I{PascalCase(entityName)}Repository {
  findById(id: string): Promise<{PascalCase(entityName)} | null>;
}
```
