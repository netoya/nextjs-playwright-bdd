# Guía: Crear infraestructura (`infra`) para una entidad

Este documento describe los pasos realizados para crear la infraestructura de la entidad `agency` siguiendo la arquitectura del proyecto.

## Pasos realizados

1. **Crear carpeta infra:**
   - Ubicación: `/src/_agency/_back/agency/infra/`

2. **Definir el esquema Mongoose:**
   - Archivo: `agency.schema.ts`
   - Contenido: Definición del esquema y modelo Mongoose para la entidad `Agency`.
   - El tipado principal se centraliza en `agency.document.ts` y se importa en el esquema, mapper y repositorio.

3. **Implementar el repositorio:**
   - Archivo: `agency.repository.ts`
   - Contenido: Implementación de la interfaz `IAgencyRepository` usando Mongoose. Métodos: `findById`, `findAll`, `create`, `update`, `delete`.
   - Adaptación: Uso de `AgencyMapper.toDomain` para transformar documentos MongoDB a la entidad del dominio.
   - Decorar la clase con `@singleton()` de tsyringe para facilitar la inyección automática.
   - No es necesario forzar el tipado en el repositorio, se infiere por el mapper.

4. **Crear el mapper:**
   - Archivo: `agency.mapper.ts`
   - Contenido: Clase `AgencyMapper` con métodos estáticos `toDomain` (documento a entidad) y `toPersistence` (entidad a documento).
   - El tipado se importa desde `agency.document.ts`.

5. **Refactorizar el repositorio:**
   - Eliminar el método privado de mapeo y utilizar el mapper externo en todos los métodos del repositorio.
   - Eliminar casteos innecesarios y tipado redundante.

## Recomendaciones
- Mantener el tipado estricto y centralizado en `agency.document.ts`.
- Usar métodos `toDomain` y `toPersistence` en los mappers para estandarizar la conversión.
- Decorar repositorios y servicios con `@singleton()` para facilitar la inyección automática.
- Centralizar la lógica de transformación en el mapper para facilitar mantenibilidad y pruebas.
- Registrar el repositorio en el sistema de dependencias (`di/dependencies.ts`) si se requiere inyección.

---

# Checklist genérico para crear infraestructura (`infra`) de una entidad

Utiliza esta lista como referencia rápida para futuras acciones en la carpeta `infra` de cualquier entidad.

## Checklist

- [ ] Crear carpeta `infra` en `/src/_{modulo}/_back/{entity}/infra/`
- [ ] Definir el esquema Mongoose (`{entity}.schema.ts`)
    - Estructura y modelo de la entidad
    - Centralizar el tipado en `{entity}.document.ts`
- [ ] Implementar el repositorio (`{entity}.repository.ts`)
    - Métodos: `findById`, `findAll`, `create`, `update`, `delete`
    - Usar interfaz de repositorio
    - Utilizar el mapper externo para conversión
    - Decorar con `@singleton()` para inyección automática
- [ ] Crear el mapper (`{entity}.mapper.ts`)
    - Clase con métodos `toDomain` y `toPersistence`
    - Importar el tipado desde `{entity}.document.ts`
- [ ] Refactorizar el repositorio para usar el mapper externo y eliminar tipado redundante
- [ ] Mantener tipado estricto y centralizado
- [ ] Registrar el repositorio en el sistema de dependencias (`di/dependencies.ts`) si aplica
- [ ] Documentar cualquier decisión relevante

---


# Ejemplo de código para infraestructura

## Ejemplo: product.schema.ts
```typescript
import mongoose, { Schema } from "mongoose";
import { ProductDocument } from "./product.document";

const ProductSchema = new Schema<ProductDocument>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

export const ProductModel = mongoose.model<ProductDocument>("Product", ProductSchema);
```

## Ejemplo: product.mapper.ts
```typescript
import { Product } from "../domain/product.entity";
import { ProductDocument } from "./product.document";

export class ProductMapper {
  static toDomain(doc: ProductDocument): Product {
    return new Product(doc._id.toString(), doc.name, doc.price, doc.description);
  }
  static toPersistence(entity: Product): ProductDocument {
    return {
      _id: entity.id,
      name: entity.name,
      price: entity.price,
      description: entity.description,
    };
  }
}
```

## Ejemplo: product.repository.ts
```typescript
import { singleton } from "tsyringe";
import { ProductModel } from "./product.schema";
import { ProductMapper } from "./product.mapper";
import { ProductRepository } from "../domain/product.repository.interface";
import { Product } from "../domain/product.entity";

@singleton()
export class ProductRepositoryImpl implements ProductRepository {
  async findById(id: string): Promise<Product | null> {
    const doc = await ProductModel.findById(id);
    return doc ? ProductMapper.toDomain(doc) : null;
  }
  async findAll(): Promise<Product[]> {
    const docs = await ProductModel.find();
    return docs.map(ProductMapper.toDomain);
  }
  async create(product: Product): Promise<Product> {
    const doc = await ProductModel.create(ProductMapper.toPersistence(product));
    return ProductMapper.toDomain(doc);
  }
  async update(product: Product): Promise<Product> {
    const doc = await ProductModel.findByIdAndUpdate(product.id, ProductMapper.toPersistence(product), { new: true });
    return doc ? ProductMapper.toDomain(doc) : null;
  }
  async delete(id: string): Promise<void> {
    await ProductModel.findByIdAndDelete(id);
  }
}
```

## Ejemplo: Registro en di/dependencies.ts
```typescript
import { container } from "tsyringe";
import { ProductRepository } from "../domain/product.repository.interface";
import { ProductRepositoryImpl } from "../infra/product.repository";

container.registerSingleton<ProductRepository>("ProductRepository", ProductRepositoryImpl);
```

---
Estos ejemplos pueden adaptarse para cualquier entidad siguiendo la misma estructura y convenciones del proyecto.
