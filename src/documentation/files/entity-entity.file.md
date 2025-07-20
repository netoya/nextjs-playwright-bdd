# path
/src/_{modulo}/_back/{entity}/domain/{entityName}.entity.ts

descripcion
Clase que representa la entidad de dominio, con sus propiedades y lógica de negocio.

# nomenclatura
{PascalCase(entityName)}

# dependencias
- Lista de importaciones de librerías:
  - Ninguna por defecto
- Lista de importaciones de otros tipos de archivos del proyecto:
  - Ninguna por defecto
- Lista de exportaciones de este archivo:
  - export class {PascalCase(entityName)}

# plantilla inicial
```typescript
export class {PascalCase(entityName)} {
  constructor(
    public id: string,
    // ...otras propiedades públicas...
  ) {}
  // Métodos de negocio
}
```

# Patrones de uso

## Agregar propiedades y métodos

### Prompt del usuario
"Agregar propiedad email y método validateEmail a la entidad {entityName}"

#### Partes detectadas
- Propiedad: email
- Método: validateEmail

#### Incrementando las partes
Se agregan propiedades y métodos según la lógica de negocio.

#### Aplicacion de partes
```typescript
export class {PascalCase(entityName)} {
  constructor(
    public email: string
    // ...otras propiedades públicas...
  ) {}

  validateEmail(): boolean {
    // lógica de validación
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.email);
  }
}
```
