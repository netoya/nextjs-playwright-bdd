# path
/src/_{modulo}/_back/{entity}/infra/{entityName}.mapper.ts

descripcion
Clase que transforma datos entre el documento MongoDB y la entidad de dominio.

# nomenclatura
{PascalCase(entityName)}Mapper

# dependencias
- Lista de importaciones de librerías:
  - Ninguna por defecto
- Lista de importaciones de otros tipos de archivos del proyecto:
  - import {PascalCase(entityName)}Document desde './{entityName}.document'
  - import {PascalCase(entityName)} desde '../domain/{entityName}.entity'
- Lista de exportaciones de este archivo:
  - export class {PascalCase(entityName)}Mapper

# plantilla inicial
```typescript
export class {PascalCase(entityName)}Mapper {
  // Métodos de transformación
}
```

# Patrones de uso

## Agregar métodos de mapeo

### Prompt del usuario
"Agregar método toDomain en el mapper de {entityName}"

#### Partes detectadas
- Método: toDomain

#### Incrementando las partes
Se agregan métodos para transformar entre persistencia y dominio.

#### Aplicacion de partes
```typescript
import { {PascalCase(entityName)}Document } from './{entityName}.document';
import { {PascalCase(entityName)} } from '../domain/{entityName}.entity';

export class {PascalCase(entityName)}Mapper {
  toDomain(doc: {PascalCase(entityName)}Document): {PascalCase(entityName)} {
    // lógica de transformación
    return new {PascalCase(entityName)}();
  }
}
```
