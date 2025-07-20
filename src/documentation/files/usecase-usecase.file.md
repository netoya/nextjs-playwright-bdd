# path
/src/_{modulo}/_back/{entity}/usecase/{useCaseName}/{useCaseName}.usecase.ts

descripcion
Clase que implementa la lógica de un caso de uso específico para la entidad.
Debe seguir el formato de inyección de dependencias usando tsyringe, incluyendo el decorador `@injectable()` para la clase y el uso de `@inject` en el constructor para el repositorio. El método principal debe ser `execute`, que recibe los parámetros definidos en la interfaz correspondiente.

# nomenclatura
{PascalCase(useCaseName)}UseCase

# dependencias
- Lista de importaciones de librerías:
  - import { injectable, inject } desde 'tsyringe'
- Lista de importaciones de otros tipos de archivos del proyecto:
  - import type I{PascalCase(entityName)}Repository desde '../domain/{entity}.repository.interface'
- Lista de exportaciones de este archivo:
  - export class {PascalCase(useCaseName)}UseCase

# plantilla inicial
```typescript
import { injectable, inject } from "tsyringe";
import type { I{PascalCase(entityName)}Repository } from "../domain/{entity}.repository.interface";

export interface {PascalCase(useCaseName)}Params {
  // Definir los parámetros requeridos
}

@injectable()
export class {PascalCase(useCaseName)}UseCase {
  constructor(
    @inject("{PascalCase(entityName)}Repository") private readonly repository: I{PascalCase(entityName)}Repository
  ) {}
  // Métodos base
  async execute(params: {PascalCase(useCaseName)}Params): Promise<{PascalCase(useCaseName)}Params> {
    // lógica de ejecución
    return params;
  }
}
```

# Patrones de uso

## Agregar lógica de caso de uso

### Prompt del usuario
"Agregar método execute al caso de uso {useCaseName}"

#### Partes detectadas
- Método: execute

#### Incrementando las partes
Se agregan métodos según la lógica del caso de uso.

#### Aplicacion de partes
```typescript
export interface {PascalCase(useCaseName)}Params {
  // Definir los parámetros requeridos
}

export class {PascalCase(useCaseName)}UseCase {
  async execute(params: {PascalCase(useCaseName)}Params): Promise<any> {
    // lógica de ejecución
    // ejemplo de uso del parámetro
    // const { campo } = params;
    return {};
  }
}
```

## Agregar logica para crear entidad

### Prompt del usuario
"Agregar caso de uso para crear {entityName}"

#### Partes detectadas
- Se requiere un método para crear la entidad usando el repositorio.
- Se debe definir la interfaz de parámetros para la creación.
- Se debe usar inyección de dependencias y tipado estricto.

#### Incrementando las partes
- Interfaz: `Create{PascalCase(entityName)}Params`
- Clase: `Create{PascalCase(entityName)}UseCase`
- Método: `execute(params: Create{PascalCase(entityName)}Params): Promise<{PascalCase(entityName)} | null>`
- Uso de DI: `@injectable()` y `@inject`

#### Aplicación de partes
```typescript
import { injectable, inject } from "tsyringe";
import type { I{PascalCase(entityName)}Repository } from "../domain/{entity}.repository.interface";
import type { {PascalCase(entityName)} } from "../domain/{entity}.entity";

export interface Create{PascalCase(entityName)}Params {
  // campos requeridos para crear
}

@injectable()
export class Create{PascalCase(entityName)}UseCase {
  constructor(
    @inject("{PascalCase(entityName)}Repository") private readonly repository: I{PascalCase(entityName)}Repository
  ) {}

  async execute(params: Create{PascalCase(entityName)}Params): Promise<{PascalCase(entityName)} | null> {
    // lógica de creación usando el repositorio
    return await this.repository.create(params as any);
  }
}
```

## Agregar lógica para actualizar entidad

### Prompt del usuario
"Agregar caso de uso para actualizar {entityName}"

#### Partes detectadas
- Se requiere un método para actualizar la entidad usando el repositorio.
- Se debe definir la interfaz de parámetros para la actualización.
- Se debe usar inyección de dependencias y tipado estricto.

#### Incrementando las partes
- Interfaz: `Update{PascalCase(entityName)}Params`
- Clase: `Update{PascalCase(entityName)}UseCase`
- Método: `execute(params: Update{PascalCase(entityName)}Params): Promise<{PascalCase(entityName)} | null>`
- Uso de DI: `@injectable()` y `@inject`

#### Aplicación de partes
```typescript
import { injectable, inject } from "tsyringe";
import type { I{PascalCase(entityName)}Repository } from "../domain/{entity}.repository.interface";
import type { {PascalCase(entityName)} } from "../domain/{entity}.entity";

export interface Update{PascalCase(entityName)}Params {
  id: string;
  // campos a actualizar
}

@injectable()
export class Update{PascalCase(entityName)}UseCase {
  constructor(
    @inject("{PascalCase(entityName)}Repository") private readonly repository: I{PascalCase(entityName)}Repository
  ) {}

  async execute(params: Update{PascalCase(entityName)}Params): Promise<{PascalCase(entityName)} | null> {
    // lógica de actualización usando el repositorio
    return await this.repository.update(params.id, params);
  }
}
```

## Agregar lógica para listar entidades

### Prompt del usuario
"Agregar caso de uso para listar {entityName}"

#### Partes detectadas
- Se requiere un método para obtener todas las entidades usando el repositorio.
- Se debe definir la interfaz de parámetros para la consulta (puede ser vacía o incluir filtros/paginación).
- Se debe usar inyección de dependencias y tipado estricto.

#### Incrementando las partes
- Interfaz: `List{PascalCase(entityName)}Params` (opcional, para filtros)
- Clase: `List{PascalCase(entityName)}UseCase`
- Método: `execute(params?: List{PascalCase(entityName)}Params): Promise<{PascalCase(entityName)}[]>`
- Uso de DI: `@injectable()` y `@inject`

#### Aplicación de partes
```typescript
import { injectable, inject } from "tsyringe";
import type { I{PascalCase(entityName)}Repository } from "../domain/{entity}.repository.interface";
import type { {PascalCase(entityName)} } from "../domain/{entity}.entity";

export interface List{PascalCase(entityName)}Params {
  // filtros, paginación, etc. (opcional)
}

@injectable()
export class List{PascalCase(entityName)}UseCase {
  constructor(
    @inject("{PascalCase(entityName)}Repository") private readonly repository: I{PascalCase(entityName)}Repository
  ) {}

  async execute(params?: List{PascalCase(entityName)}Params): Promise<{PascalCase(entityName)}[]> {
    // lógica de listado usando el repositorio
    return await this.repository.findAll(params);
  }
}
```

## Agregar lógica para obtener entidad por id

### Prompt del usuario
"Agregar caso de uso para obtener {entityName} por id"

#### Partes detectadas
- Se requiere un método para obtener la entidad por id usando el repositorio.
- Se debe definir la interfaz de parámetros con el id.
- Se debe usar inyección de dependencias y tipado estricto.

#### Incrementando las partes
- Interfaz: `Get{PascalCase(entityName)}Params`
- Clase: `Get{PascalCase(entityName)}UseCase`
- Método: `execute(params: Get{PascalCase(entityName)}Params): Promise<{PascalCase(entityName)} | null>`
- Uso de DI: `@injectable()` y `@inject`

#### Aplicación de partes
```typescript
import { injectable, inject } from "tsyringe";
import type { I{PascalCase(entityName)}Repository } from "../domain/{entity}.repository.interface";
import type { {PascalCase(entityName)} } from "../domain/{entity}.entity";

export interface Get{PascalCase(entityName)}Params {
  id: string;
}

@injectable()
export class Get{PascalCase(entityName)}UseCase {
  constructor(
    @inject("{PascalCase(entityName)}Repository") private readonly repository: I{PascalCase(entityName)}Repository
  ) {}

  async execute(params: Get{PascalCase(entityName)}Params): Promise<{PascalCase(entityName)} | null> {
    // lógica de obtención usando el repositorio
    return await this.repository.findById(params.id);
  }
}
```

## Agregar lógica para eliminar entidad

### Prompt del usuario
"Agregar caso de uso para eliminar {entityName}"

#### Partes detectadas
- Se requiere un método para eliminar la entidad usando el repositorio.
- Se debe definir la interfaz de parámetros con el id.
- Se debe usar inyección de dependencias y tipado estricto.

#### Incrementando las partes
- Interfaz: `Delete{PascalCase(entityName)}Params`
- Clase: `Delete{PascalCase(entityName)}UseCase`
- Método: `execute(params: Delete{PascalCase(entityName)}Params): Promise<boolean>`
- Uso de DI: `@injectable()` y `@inject`

#### Aplicación de partes
```typescript
import { injectable, inject } from "tsyringe";
import type { I{PascalCase(entityName)}Repository } from "../domain/{entity}.repository.interface";

export interface Delete{PascalCase(entityName)}Params {
  id: string;
}

@injectable()
export class Delete{PascalCase(entityName)}UseCase {
  constructor(
    @inject("{PascalCase(entityName)}Repository") private readonly repository: I{PascalCase(entityName)}Repository
  ) {}

  async execute(params: Delete{PascalCase(entityName)}Params): Promise<boolean> {
    // lógica de eliminación usando el repositorio
    return await this.repository.delete(params.id);
  }
}
```
