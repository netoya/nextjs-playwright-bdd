
# Guía para personalizar UI en cada módulo usando los componentes disponibles

Esta guía explica cómo aprovechar los componentes UI ya implementados en `src/_shared/_front/ui/components/ui/` para construir y personalizar interfaces dentro de cada módulo funcional del proyecto.



## Pasos recomendados para crear UI en módulos (alineado con copilot-instructions)

1. Ubica y reutiliza los componentes base en `src/_shared/_front/ui/components/ui/` (ejemplo: Table, Button, etc).
2. Crea el componente específico en el módulo correspondiente, siguiendo atomic design (`atomic/`, `molecule/`, etc) **o patrones avanzados como DataTable, Combobox, etc.**
3. Importa y utiliza los componentes base en el nuevo componente, evitando duplicar lógica o estilos.
4. Personaliza mediante props y variantes, manteniendo coherencia visual.
5. Documenta el uso y variantes en el propio módulo y enlaza al demo global si aplica.
6. Realiza pruebas visuales y funcionales usando los demos en `src/_shared/_front/uiDemo/component/`.
7. Actualiza esta guía si surge un nuevo patrón relevante.

> **Nota:** Además del flujo atomic, puedes seguir patrones avanzados de UI como DataTable, Combobox, etc., usando los demos y helpers disponibles en `uiDemo/component/`. Estos patrones son parte oficial de la arquitectura y permiten crear interfaces ricas y flexibles, manteniendo coherencia visual y funcional.

> Estos pasos están alineados y referenciados en `.github/copilot-instructions.md` para agentes AI y desarrolladores humanos.

## Ejemplo de uso en un módulo

```tsx
// src/_agency/_front/atomic/AgencyButton.tsx
import { Button } from "src/_shared/_front/ui/components/ui/button";

export function AgencyButton(props) {
  return <Button variant="outline" {...props}>Crear agencia</Button>;
}
```

### Demos de patrones, utilidades y variantes avanzadas

| Demo avanzado              | Descripción breve                                                                 | Ruta de referencia                              |
| -------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------- |
| `DataTableDemo`            | Tabla avanzada con filtrado, orden y paginación, usando composición y helpers.    | `uiDemo/component/DataTableDemo.tsx`            |
| `ComboboxDemo`             | Ejemplo de combobox accesible, integración con formularios y listas dinámicas.    | `uiDemo/component/ComboboxDemo.tsx`             |
| `RadioGroupFormDemo`       | Patrón de formulario con grupo de radios, validación y manejo de estado.          | `uiDemo/component/RadioGroupFormDemo.tsx`       |
| `ResizableHandleDemo`      | Ejemplo de handle para paneles redimensionables, integración con teclado y mouse. | `uiDemo/component/ResizableHandleDemo.tsx`      |
| `ResizableVerticalDemo`    | Paneles redimensionables verticalmente, composición avanzada.                     | `uiDemo/component/ResizableVerticalDemo.tsx`    |
| `ScrollAreaHorizontalDemo` | Scroll horizontal personalizado, útil para listas y galerías.                     | `uiDemo/component/ScrollAreaHorizontalDemo.tsx` |
| `DatePickerDemo`           | Selector de fecha avanzado, integración con `Calendar` y formularios.             | `uiDemo/component/DatePickerDemo.tsx`           |
| `SkeletonCardDemo`         | Placeholder visual para tarjetas, ejemplo de loading avanzado.                    | `uiDemo/component/SkeletonCardDemo.tsx`         |
| `CalendarDateOfBirthDemo`  | Ejemplo de calendario para fecha de nacimiento, con validaciones específicas.     | `uiDemo/component/CalendarDateOfBirthDemo.tsx`  |
| `CalendarMonthYearDemo`    | Selector de mes y año, variante de calendario.                                    | `uiDemo/component/CalendarMonthYearDemo.tsx`    |
| ...                        | ...                                                                               | ...                                             |

## Recomendaciones

- Usa los componentes base para mantener coherencia visual y funcional en toda la app.
- Si necesitas una variante visual, utiliza las props y variantes ya soportadas (ejemplo: `variant="outline"`, `size="sm"`).
- Para casos muy específicos, compón el componente base con lógica propia, pero sin modificar el original.
- Documenta el uso y personalización en el propio módulo, y enlaza al demo global si es relevante.

## Referencias y ejemplos

## Referencias y ejemplos



| Componente base  | Demo asociado        | Descripción breve                                                                                                 |
| ---------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `Accordion`      | `AccordionDemo`      | Conjunto apilado de encabezados interactivos que revelan secciones de contenido.                                  |
| `Alert`          | `AlertDemo`          | Llamado de atención para el usuario, con variantes de éxito, error y solo título/icono.                           |
| `AlertDialog`    | `AlertDialogDemo`    | Diálogo modal que interrumpe al usuario con contenido importante y espera una respuesta.                          |
| `AspectRatio`    | `AspectRatioDemo`    | Muestra contenido dentro de una proporción específica.                                                            |
| `Avatar`         | `AvatarDemo`         | Elemento de imagen con fallback para representar al usuario.                                                      |
| `Badge`          | `BadgeDemo`          | Muestra una insignia o componente con apariencia de badge, admite variantes y uso como enlace.                    |
| `Button`         | `ButtonDemo`         | Muestra un botón o componente con apariencia de botón, admite variantes.                                          |
| `Calendar`       | `CalendarDemo`       | Campo de fecha que permite a los usuarios ingresar y editar fechas.                                               |
| `Card`           | `CardDemo`           | Tarjeta con header, contenido y footer, ejemplo de formulario de login.                                           |
| `Carousel`       | `CarouselDemo`       | Carrusel con movimiento y swipe, construido usando Embla.                                                         |
| `Checkbox`       | `CheckboxDemo`       | Control de selección binaria.                                                                                     |
| `Collapsible`    | `CollapsibleDemo`    | Componente interactivo que expande/colapsa un panel.                                                              |
| `Command`        | `CommandDemo`        | Componente para mostrar y ejecutar comandos, con soporte para atajos de teclado.                                  |
| `ContextMenu`    | `ContextMenuDemo`    | Menú contextual que muestra acciones al hacer clic derecho o interactuar con un elemento.                         |
| `Dialog`         | `DialogDemo`         | Ventana superpuesta (modal) que inhabilita el contenido subyacente, útil para confirmaciones y formularios.       |
| `Drawer`         | `DrawerDemo`         | Panel lateral deslizable, útil para mostrar información adicional o formularios sin abandonar la vista principal. |
| `DropdownMenu`   | `DropdownMenuDemo`   | Menú desplegable con grupos, submenús y accesos rápidos.                                                          |
| `HoverCard`      | `HoverCardDemo`      | Tarjeta flotante para mostrar información adicional al pasar el mouse sobre un elemento.                          |
| `Input`          | `InputDemo`          | Campo de entrada de texto para formularios y componentes interactivos.                                            |
| `InputOTP`       | `InputOTPDemo`       | Componente accesible para ingresar códigos de un solo uso (OTP), con funcionalidad de copiar y pegar.             |
| `Label`          | `LabelDemo`          | Etiqueta para formularios.                                                                                        |
| `Label`          | `LabelDemo`          | Renderiza una etiqueta accesible asociada a controles de formulario.                                              |
| `Menubar`        | `MenubarDemo`        | Menú persistente visual, común en aplicaciones de escritorio, que provee acceso rápido a comandos consistentes.   |
| `NavigationMenu` | `NavigationMenuDemo` | Colección de enlaces para navegar sitios web.                                                                     |
| `Pagination`     | `PaginationDemo`     | Paginación con navegación de páginas, enlaces siguiente y anterior.                                               |
| `Popover`        | `PopoverDemo`        | Muestra contenido enriquecido en un portal, activado por un botón.                                                |
| `Progress`       | `ProgressDemo`       | Muestra un indicador de progreso de una tarea, normalmente como barra de progreso.                                |
| `Checkbox`       | `CheckboxDemo`       | Control que permite al usuario alternar entre marcado y no marcado.                                               |
| `RadioGroup`     | `RadioGroupDemo`     | Grupo de botones de radio, solo uno puede estar seleccionado.                                                     |
| `Resizable`      | `ResizableDemo`      | Paneles redimensionables horizontales con soporte de teclado.                                                     |
| `ScrollArea`     | `ScrollAreaDemo`     | Scroll personalizado con estilos cross-browser.                                                                   |
| `Select`         | `SelectDemo`         | Lista de opciones para seleccionar, activada por un botón.                                                        |
| `Separator`      | `SeparatorDemo`      | Separador visual o semántico de contenido.                                                                        |
| `Sheet`          | `SheetDemo`          | Extiende el componente Dialog para mostrar contenido complementario.                                              |
| `Sidebar`        | `SidebarDemo`        | Barra lateral con grupos y menús de navegación.                                                                   |
| `Skeleton`       | `SkeletonCardDemo`   | Placeholder visual para mostrar mientras el contenido está cargando.                                              |
| `Slider`         | `SliderDemo`         | Input donde el usuario selecciona un valor dentro de un rango.                                                    |
| `Sonner`         | `SonnerDemo`         | Componente toast para notificaciones en React.                                                                    |
| `Switch`         | `SwitchDemo`         | Control que permite alternar entre activado y desactivado.                                                        |
| `Table`          | `TableDemo`          | Tabla de datos con encabezado, cuerpo y pie.                                                                      |
| `Tabs`           | `TabsDemo`           | Navegación por pestañas con contenido asociado.                                                                   |
| `Textarea`       | `TextareaDemo`       | Área de texto para formularios y componentes interactivos.                                                        |
| `Toggle`         | `ToggleDemo`         | Botón de alternancia.                                                                                             |
| `ToggleGroup`    | `ToggleGroupDemo`    | Grupo de botones de dos estados que pueden activarse o desactivarse.                                              |
| `Tooltip`        | `TooltipDemo`        | Popup que muestra información relacionada a un elemento cuando recibe foco o hover.                               |
| `Typography`     | `TypographyDemo`     | Componentes tipográficos para títulos, párrafos, listas y más.                                                    |

<!-- Solo se muestran los primeros 10 componentes UI en orden alfabético. -->
> Consulta la carpeta `src/_shared/_front/ui/components/ui/` para ver la implementación base y `src/_shared/_front/uiDemo/component/` para ejemplos de integración y variantes.

## Buenas prácticas

- Documenta cada componente con comentarios JSDoc y ejemplos de uso.
- Mantén los componentes base desacoplados de la lógica de negocio.
- Usa los demo para validar props, variantes y estilos.
- Si el componente requiere integración con hooks o contexto, documenta el flujo en el demo.

## Recursos

- [Convenciones de estructura](../../../project-structure.md)
- [Ejemplos reales de demo](../../../src/_shared/_front/uiDemo/component/)
- [Componentes base](../../../src/_shared/_front/ui/components/ui/)

---
