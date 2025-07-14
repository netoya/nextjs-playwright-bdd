# Guía para crear archivos de dominio (`domain`) de una entidad

## 1. Propósito

El archivo de dominio define la entidad principal, sus interfaces y servicios asociados. Es la base de la lógica de negocio y el tipado centralizado.

## 2. Ubicación recomendada

- Por cada entidad, crea los archivos en:
  - `/src/_{modulo}/_back/{entity}/domain/`
  - Ejemplo: `/src/_app/_back/product/domain/product.entity.ts`

## 3. Estructura básica

- `{entity}.entity.ts`: Define la clase o interfaz principal de la entidad.
- `{entity}.repository.interface.ts`: Interfaz para el repositorio de persistencia.
- `{entity}.service.ts`: Servicio con lógica de negocio específica.

## 4. Checklist de pasos

- [ ] Crear `{entity}.entity.ts` con los atributos y métodos principales.
- [ ] Crear `{entity}.repository.interface.ts` con los métodos CRUD y de consulta.
- [ ] Crear `{entity}.service.ts` para lógica de negocio y validaciones.
- [ ] Validar el tipado y la integración con infraestructura y casos de uso.
- [ ] Documentar cualquier decisión relevante o validación especial.

## 5. Ejemplo concreto

### product.entity.ts
```typescript
export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description?: string
  ) {}
}
```

### product.repository.interface.ts
```typescript
export interface ProductRepository {
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  create(product: Product): Promise<Product>;
  update(product: Product): Promise<Product>;
  delete(id: string): Promise<void>;
}
```

### product.service.ts
```typescript
import { Product } from "./product.entity";
import { ProductRepository } from "./product.repository.interface";

export class ProductService {
  constructor(private repository: ProductRepository) {}

  async getProduct(id: string) {
    return this.repository.findById(id);
  }

  async createProduct(product: Product) {
    // Validaciones y lógica de negocio
    return this.repository.create(product);
  }
}
```

## 6. Recomendaciones

- Mantén el dominio libre de dependencias de infraestructura.
- Usa nombres claros y consistentes para entidades, interfaces y servicios.
- Centraliza el tipado y la lógica de negocio aquí.
- Documenta cualquier decisión relevante o validación especial.

---
¿Falta algún ejemplo o recomendación? Sugiere mejoras para mantener la guía actualizada y útil para todos los agentes AI.
