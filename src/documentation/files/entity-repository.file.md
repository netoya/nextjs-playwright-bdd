# path
/src/_{modulo}/_back/{entity}/infra/{entityName}.repository.ts

descripcion
Implementación concreta del repositorio para la entidad, usando MongoDB.

# nomenclatura
{PascalCase(entityName)}Repository

# dependencias
- Lista de importaciones de librerías:
  - Ninguna por defecto
- Lista de importaciones de otros tipos de archivos del proyecto:
  - import {PascalCase(entityName)}Model desde './{entityName}.schema'
  - import {PascalCase(entityName)} desde '../domain/{entityName}.entity'
  - import I{PascalCase(entityName)}Repository desde '../domain/{entityName}.repository.interface'
  - import {PascalCase(entityName)}Document desde './{entityName}.document'
- Lista de exportaciones de este archivo:
  - export class {PascalCase(entityName)}Repository

# plantilla inicial
```typescript
import { I{PascalCase(entityName)}Repository } from '../domain/{entityName}.repository.interface';

export class {PascalCase(entityName)}Repository implements I{PascalCase(entityName)}Repository {
  // Métodos base
}
```

# Patrones de uso

## Agregar métodos de persistencia

### Prompt del usuario
"Agregar método save al repositorio de {entityName}"

#### Partes detectadas
- Método: save

#### Incrementando las partes
Se agregan métodos según la lógica de persistencia y actualizar la interface del repositorio.

#### Aplicacion de partes

```typescript
import { {PascalCase(entityName)}Model } from './{entityName}.schema';
import { {PascalCase(entityName)} } from '../domain/{entityName}.entity';
import { I{PascalCase(entityName)}Repository } from '../domain/{entityName}.repository.interface';
import { {PascalCase(entityName)}Document } from './{entityName}.document';

export class {PascalCase(entityName)}Repository implements I{PascalCase(entityName)}Repository {
  async save(data: {PascalCase(entityName)}): Promise<void> {
    await {PascalCase(entityName)}Model.create(data);
  }

  // Ejemplo de uso correcto de tipos:
  async findById(id: string): Promise<{PascalCase(entityName)} | null> {
    const doc = await {PascalCase(entityName)}Model.findOne({ id });
    return doc ? Mapper.toDomain(doc as {PascalCase(entityName)}Document) : null;
  }
}
```
