# Nomenclatura de archivos y entidades

## agency.repository.interface.ts
### repositorio interface
| tipo de dato | prefijo | case               | ejemplo           |
| ------------ | ------- | ------------------ | ----------------- |
| interface    | "I"     | PascalCase entidad | IAgencyRepository |

## agency.entity.ts
### entidad principal
| tipo de dato | prefijo | case               | ejemplo |
| ------------ | ------- | ------------------ | ------- |
| clase        | ""      | PascalCase entidad | Agency  |

## entity.routes.ts
### rutas por entidad
| tipo de dato | prefijo | case                             | ejemplo            |
| ------------ | ------- | -------------------------------- | ------------------ |
| constante    | ""      | camelCase entidad + EntityRoutes | agencyEntityRoutes |

## backend.routes.ts
### rutas globales backend
| tipo de dato | prefijo | case                             | ejemplo             |
| ------------ | ------- | -------------------------------- | ------------------- |
| constante    | ""      | camelCase módulo + BackendRoutes | agencyBackendRoutes |

## agency.document.ts
### documento mongoose
| tipo de dato | prefijo | case                          | ejemplo        |
| ------------ | ------- | ----------------------------- | -------------- |
| tipo         | ""      | PascalCase entidad + Document | AgencyDocument |

## agency.mapper.ts
### mapper
| tipo de dato | prefijo | case                        | ejemplo      |
| ------------ | ------- | --------------------------- | ------------ |
| clase        | ""      | PascalCase entidad + Mapper | AgencyMapper |

## agency.repository.ts
### repositorio implementación
| tipo de dato | prefijo | case                            | ejemplo          |
| ------------ | ------- | ------------------------------- | ---------------- |
| clase        | ""      | PascalCase entidad + Repository | AgencyRepository |

## agency.schema.ts
### esquema mongoose
| tipo de dato | prefijo | case                       | ejemplo      |
| ------------ | ------- | -------------------------- | ------------ |
| constante    | ""      | camelCase entidad + Schema | agencySchema |

## agency.service.ts
### servicio de dominio
| tipo de dato | prefijo | case                         | ejemplo       |
| ------------ | ------- | ---------------------------- | ------------- |
| clase        | ""      | PascalCase entidad + Service | AgencyService |

## agency.routes.ts
### rutas de entidad
| tipo de dato | prefijo | case                       | ejemplo      |
| ------------ | ------- | -------------------------- | ------------ |
| constante    | ""      | camelCase entidad + Routes | agencyRoutes |

## backend.routes.ts
### rutas backend módulo
| tipo de dato | prefijo | case                      | ejemplo      |
| ------------ | ------- | ------------------------- | ------------ |
| constante    | ""      | camelCase módulo + Routes | agencyRoutes |

## dependencies.ts
### registro de dependencias DI
| tipo de dato | prefijo | case                                | ejemplo              |
| ------------ | ------- | ----------------------------------- | -------------------- |
| constante    | ""      | camelCase                           | dependencies         |
| registro DI  | "I"     | PascalCase entidad + Repository     | IAgencyRepository    |
| registro DI  | ""      | PascalCase entidad + RepositoryImpl | AgencyRepositoryImpl |

## {casoDeUso}.presentation.ts
### presentación caso de uso
| tipo de dato | prefijo | case                                | ejemplo                  |
| ------------ | ------- | ----------------------------------- | ------------------------ |
| clase        | ""      | PascalCase casoDeUso + Presentation | CreateAgencyPresentation |

## {casoDeUso}.usecase.ts
### caso de uso
| tipo de dato | prefijo | case                           | ejemplo             |
| ------------ | ------- | ------------------------------ | ------------------- |
| clase        | ""      | PascalCase casoDeUso + UseCase | CreateAgencyUseCase |

## {casoDeUso}.step.ts
### step de caso de uso (opcional)
| tipo de dato | prefijo | case                        | ejemplo          |
| ------------ | ------- | --------------------------- | ---------------- |
| clase        | ""      | PascalCase casoDeUso + Step | CreateAgencyStep |

## {componente}.tsx
### componente UI base
| tipo de dato | prefijo | case       | ejemplo |
| ------------ | ------- | ---------- | ------- |
| componente   | ""      | PascalCase | Button  |
