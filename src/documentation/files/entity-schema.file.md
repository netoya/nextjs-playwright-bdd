# path
/src/_{modulo}/_back/{entity}/infra/{entityName}.schema.ts

descripcion
Define el esquema y modelo de Mongoose para la entidad.

# nomenclatura
{PascalCase(entityName)}Schema, {PascalCase(entityName)}Model

# dependencias
- Lista de importaciones de librerías:
  - import { Schema, model, models } desde 'mongoose'
- Lista de importaciones de otros tipos de archivos del proyecto:
  - Ninguna por defecto
- Lista de exportaciones de este archivo:
  - export const {PascalCase(entityName)}Schema
  - export const {PascalCase(entityName)}Model

# plantilla inicial
```typescript
import { Schema, model, models } from 'mongoose';

export const {PascalCase(entityName)}Schema = new Schema({
  // Definición de campos
});

export const {PascalCase(entityName)}Model = models['{PascalCase(entityName)}'] || model('{PascalCase(entityName)}', {PascalCase(entityName)}Schema, '{PascalCase(entityName)}');
```

# Patrones de uso

## Agregar campos al esquema

### Prompt del usuario
"Agregar campo name al esquema de {entityName}"

#### Partes detectadas
- Campo: name

#### Incrementando las partes
Se agregan campos al objeto del esquema.

#### Aplicacion de partes
```typescript
export const {PascalCase(entityName)}Schema = new Schema({
  name: { type: String, required: true },
});
```
