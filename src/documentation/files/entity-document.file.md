# path
/src/_{modulo}/_back/{entity}/infra/{entityName}.document.ts

descripcion
Interface que define la estructura del documento MongoDB para la entidad.

# nomenclatura
{PascalCase(entityName)}Document

# dependencias
- Lista de importaciones de librerías:
  - Ninguna por defecto
- Lista de importaciones de otros tipos de archivos del proyecto:
  - Ninguna por defecto
- Lista de exportaciones de este archivo:
  - export interface {PascalCase(entityName)}Document

# plantilla inicial
```typescript
export interface {PascalCase(entityName)}Document {
  // Propiedades base
}
```

# Patrones de uso

## Agregar campos al documento

### Prompt del usuario
"Agregar campo createdAt al documento de {entityName}"

#### Partes detectadas
- Campo: createdAt

#### Incrementando las partes
Se agregan campos según la persistencia requerida.

#### Aplicacion de partes
```typescript
export interface {PascalCase(entityName)}Document {
  createdAt: Date;
}
```
