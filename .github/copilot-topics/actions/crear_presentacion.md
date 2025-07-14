# Guía para crear archivos de presentación (`presentation`) en casos de uso

## 1. Propósito

El archivo de presentación conecta el caso de uso con la capa de API o UI, gestionando la entrada/salida HTTP y la resolución de dependencias.

## 2. Ubicación recomendada

- Por cada caso de uso que exponga una API, crea `{casoDeUso}.presentation.ts` dentro de la carpeta correspondiente:
  - `/src/_{modulo}/_back/{entity}/usecase/{casoDeUso}/{casoDeUso}.presentation.ts`

## 3. Estructura básica

```typescript
"use server";
import { container } from "tsyringe";
import { NombreDelCasoDeUso } from "./{casoDeUso}.usecase";
import { NextApiRequest, NextApiResponse } from "next";

export async function nombrePresentacion(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usecase = container.resolve(NombreDelCasoDeUso);
    // Ejecutar el caso de uso con los datos del request
    const resultado = await usecase.execute(/* argumentos */);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
```

## 4. Checklist de pasos

- [ ] Crear archivo `{casoDeUso}.presentation.ts` en la carpeta del caso de uso.
- [ ] Importar el caso de uso y resolverlo con `container.resolve` (tsyringe).
- [ ] Usar `NextApiRequest` y `NextApiResponse` para manejar la petición y respuesta.
- [ ] Extraer los datos necesarios del request (`req.body`, `req.query`, etc).
- [ ] Ejecutar el caso de uso y devolver el resultado con el status adecuado.
- [ ] Manejar errores y devolver mensajes claros.
- [ ] Validar el tipado y la integración con el caso de uso.

## 5. Ejemplo concreto

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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
```

## 6. Recomendaciones

- Mantén la lógica de presentación simple y delega toda la lógica de negocio al caso de uso.
- Usa nombres claros y consistentes para las funciones de presentación.
- Si el caso de uso puede fallar (por ejemplo, entidad no encontrada), devuelve el status HTTP adecuado (`404`, `400`, etc).
- Documenta cualquier decisión relevante o validación especial.

---
¿Falta algún ejemplo o recomendación? Sugiere mejoras para mantener la guía actualizada y útil para todos los agentes AI.
