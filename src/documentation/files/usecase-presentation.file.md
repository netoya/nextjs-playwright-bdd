# path
/src/_{modulo}/_back/{entity}/usecase/{useCaseName}/{useCaseName}.presentation.ts

descripcion
Función que expone la presentación HTTP/API del caso de uso.

# nomenclatura
{camelCase(useCaseName)}Presentation

# dependencias
- Lista de importaciones de librerías:
  - import { container } desde 'tsyringe'
  - import { NextApiRequest, NextApiResponse } desde 'next'
- Lista de importaciones de otros tipos de archivos del proyecto:
  - import {PascalCase(useCaseName)}UseCase desde './{useCaseName}.usecase'
- Lista de exportaciones de este archivo:
  - export async function {camelCase(useCaseName)}Presentation

# plantilla inicial
```typescript
"use server";
import { container } from "tsyringe";
import { {PascalCase(useCaseName)}UseCase } from "./{useCaseName}.usecase";
import { NextApiRequest, NextApiResponse } from "next";

export async function {camelCase(useCaseName)}Presentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usecase = container.resolve({PascalCase(useCaseName)}UseCase);
    // Ejecutar el caso de uso con los datos del request
    const resultado = await usecase.execute(/* argumentos */);
    res.status(200).json(resultado);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: String(error) });
    }
  }
}
```

# Patrones de uso

## Agregar lógica de presentación

### Prompt del usuario
"Agregar respuesta JSON en la presentación de {useCaseName}"

#### Partes detectadas
- Respuesta: JSON

#### Incrementando las partes
Se agregan respuestas y manejo de errores según la API.

#### Aplicacion de partes
```typescript
"use server";
import { container } from "tsyringe";
import { CreateAgencyUseCase } from "./createAgency.usecase";
import { NextApiRequest, NextApiResponse } from "next";

export async function createAgencyPresentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usecase = container.resolve(CreateAgencyUseCase);
    const agency = await usecase.execute(req.body);
    res.status(201).json(agency);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: String(error) });
    }
  }
}
```
