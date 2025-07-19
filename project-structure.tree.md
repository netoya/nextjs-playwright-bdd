# Project structure tree (generic)
- {moduleName}
-- _back
--- {entityName}
---- domain
----- {entityName}.entity.ts
----- {entityName}.repository.interface.ts
----- {entityName}.service.ts
---- infra
----- {entityName}.document.ts
----- {entityName}.mapper.ts
----- {entityName}.repository.ts
----- {entityName}.schema.ts
---- feature (opcional)
----- {featureName}.ts
---- entity.routes.ts
---- usecase
----- {usecaseName}/
------ {usecaseName}.presentation.ts
------ {usecaseName}.step.ts (opcional)
--- backend.routes.ts
--- shared
---- infra
----- di/
------ dependencies.ts
-- documentation (opcional)
--- ENTITIES-DEFINITIONS.md
--- ENTITIES-IMPLEMENTATION.md
-- shared
- _front
-- {entityName}
--- atomic/
--- molecule/
--- organism/
--- template/
--- page/
--- service/
- _shared
-- _front
--- ui/
---- components/
---- hooks/
---- utils/
--- uiDemo/
---- component/


# Actions releates as parts (actuales)
Las acciones están documentadas en la carpeta `#file:actions`.
| Archivo directo                                                               | Actions               |
| ----------------------------------------------------------------------------- | --------------------- |
| /src/_{modulo}/_back/{entity}/domain/{entity}.entity.ts                       | crear_domain.md       |
| /src/_{modulo}/_back/{entity}/domain/{entity}.repository.interface.ts         | crear_domain.md       |
| /src/_{modulo}/_back/{entity}/domain/{entity}.service.ts                      | crear_domain.md       |
| /src/_{modulo}/_back/{entity}/infra/{entity}.document.ts                      | crear_infra.md        |
| /src/_{modulo}/_back/{entity}/infra/{entity}.mapper.ts                        | crear_infra.md        |
| /src/_{modulo}/_back/{entity}/infra/{entity}.repository.ts                    | crear_infra.md        |
| /src/_{modulo}/_back/{entity}/infra/{entity}.schema.ts                        | crear_infra.md        |
| /src/_{modulo}/                                                               | crear_modulo.md       |
| /src/_{modulo}/_back/{entity}/usecase/{casoDeUso}/{casoDeUso}.presentation.ts | crear_presentacion.md |
| /src/_{modulo}/_back/{entity}/routes.ts                                       | crear_rutas.md        |
| /src/_{modulo}/_back/{entity}/entity.routes.ts                                | crear_rutas.md        |
| /src/_{modulo}/_back/backend.routes.ts                                        | crear_rutas.md        |
| /src/_shared/_front/ui/components/ui/{componente}.tsx                         | crear_ui.md           |
| /src/_{modulo}/_back/{entity}/usecase/{casoDeUso}/{casoDeUso}.usecase.ts      | crear_usecase.md      |
| /src/_{modulo}/_back/shared/infra/di/dependencies.ts                          | registrar_di.md       |
