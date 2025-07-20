
# Guía de Prompts para la Documentación y Configuración del Proyecto

Esta carpeta contiene los prompts y pasos para documentar y configurar la estructura de un proyecto, orientados a agentes AI y desarrolladores. Cada archivo corresponde a una etapa clave en la generación de documentación técnica y estructural.


## Descripción de los Prompts

### Estructura del Árbol del Proyecto
Analiza y documenta la estructura de módulos, entidades y archivos del proyecto a partir del árbol de estructura. El resultado se guarda en `src/documentation/project-structure.tree.md`.

### Arquitectura y Convenciones Generales
Genera documentación sobre la arquitectura, convenciones y flujos clave del proyecto. Se apoya en el árbol de estructura y produce `src/documentation/project-structure.general.md`.

### Nomenclatura y Reglas de Nombre
Documenta la nomenclatura y convenciones de nombres para archivos y entidades, asegurando coherencia y extensibilidad. El resultado se guarda en `src/documentation/project-structure.nomenclature.md`.

### Tipos Generales de Archivos
Genera documentación sobre los tipos generales de archivos, sus plantillas y patrones de uso. Crea archivos en `src/documentation/files/` siguiendo el formato `{nombre-del-archivo}.file.md`.


## Proceso Sugerido


El proceso sugerido para utilizar estos prompts y generar la documentación estructural del proyecto es el siguiente:

1. **Ejecución secuencial de los prompts:**
   - Comienza con el prompt de "Estructura del Árbol del Proyecto" para obtener una visión clara de los módulos, entidades y archivos principales.
   - Continúa con "Arquitectura y Convenciones Generales" para documentar la organización, dependencias y flujos clave del proyecto.
   - Luego utiliza "Nomenclatura y Reglas de Nombre" para definir y estandarizar los nombres de archivos, entidades y rutas.
   - Finaliza con "Tipos Generales de Archivos" para describir los patrones, plantillas y ejemplos de cada tipo de archivo relevante.

2. **Revisión y uso de la documentación generada:**
   - Utiliza los archivos generados como referencia rápida para nuevos desarrolladores, agentes AI y cualquier persona que se integre al proyecto.
   - Asegúrate de que la documentación sea clara, accesible y esté alineada con la estructura real del proyecto.

3. **Actualización continua:**
   - Repite el proceso cada vez que la estructura del proyecto cambie o se agreguen nuevos módulos, entidades o convenciones.
   - Mantén los archivos de documentación actualizados para garantizar coherencia y facilitar el trabajo colaborativo.


## Consideraciones Finales

- Todos los archivos generados están pensados para ser genéricos y adaptables.
- La nomenclatura y estructura deben seguir las convenciones documentadas para mantener la coherencia.
