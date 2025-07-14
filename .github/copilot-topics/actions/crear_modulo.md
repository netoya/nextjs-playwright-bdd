

# Guía para crear un módulo

## 1. Ubicación recomendada

- Cada módulo debe residir en `/src/_{modulo}/`.
- Ejemplo: `/src/_app/`, `/src/_product/`, `/src/_agency/`.

## 2. Estructura básica

- `_back/` para lógica, entidades y casos de uso.
- `_front/` para UI, servicios y plantillas.

## 3. Checklist de pasos

- [ ] Crear carpeta `/src/_{modulo}/`.
- [ ] Crear subcarpetas `_back/` y `_front/`.
- [ ] En `_back/`, crear carpetas por entidad (`domain/`, `infra/`, `feature/`, `usecase/`).
- [ ] En `_front/`, crear carpetas por tipo de componente (`atomic/`, `molecule/`, `organism/`, `template/`).
- [ ] Validar la estructura con `.project-structure.md`.
- [ ] Registrar dependencias en `di/dependencies.ts` si aplica.
- [ ] Documentar la estructura y decisiones relevantes.

## 4. Ejemplo concreto

```text
src/
  _product/
    _back/
      product/
        domain/
        infra/
        feature/
        usecase/
      shared/
        infra/
          di/
    _front/
      product/
        atomic/
        molecule/
        organism/
        template/
```

## 5. Recomendaciones

- Usa nombres claros y consistentes para carpetas y archivos.
- Revisa `.project-structure.md` antes de crear o modificar módulos.
- Documenta cualquier decisión relevante o validación especial.

---
¿Falta algún ejemplo o recomendación? Sugiere mejoras para mantener la guía actualizada y útil para todos los agentes AI.
