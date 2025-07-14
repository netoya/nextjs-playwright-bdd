// TypographyDemo.tsx
// Ejemplos exactos de la documentación de Shadcn UI para Typography
// Título: Typography
// Descripción: Componentes tipográficos para títulos, párrafos, listas y más.

import TypographyH1 from "@/_shared/_front/ui/components/ui/typographyH1";
import TypographyH2 from "@/_shared/_front/ui/components/ui/typographyH2";
import TypographyH3 from "@/_shared/_front/ui/components/ui/typographyH3";
import TypographyH4 from "@/_shared/_front/ui/components/ui/typographyH4";
import TypographyP from "@/_shared/_front/ui/components/ui/typographyP";
import TypographyBlockquote from "@/_shared/_front/ui/components/ui/typographyBlockquote";
import TypographyList from "@/_shared/_front/ui/components/ui/typographyList";
import TypographyListItem from "@/_shared/_front/ui/components/ui/typographyListItem";
import TypographyLead from "@/_shared/_front/ui/components/ui/typographyLead";
import TypographyLarge from "@/_shared/_front/ui/components/ui/typographyLarge";
import TypographySmall from "@/_shared/_front/ui/components/ui/typographySmall";
import TypographyMuted from "@/_shared/_front/ui/components/ui/typographyMuted";

export function TypographyDemo() {
  return (
    <section>
      <h3>Typography</h3>
      <p>Componentes tipográficos para títulos, párrafos, listas y más.</p>
      <div className="space-y-4">
        <TypographyH1>Heading 1</TypographyH1>
        <TypographyH2>Heading 2</TypographyH2>
        <TypographyH3>Heading 3</TypographyH3>
        <TypographyH4>Heading 4</TypographyH4>
        <TypographyP>Este es un párrafo de ejemplo.</TypographyP>
        <TypographyLead>Lead text</TypographyLead>
        <TypographyLarge>Large text</TypographyLarge>
        <TypographySmall>Small text</TypographySmall>
        <TypographyMuted>Muted text</TypographyMuted>
        <TypographyBlockquote>
          &quot;Esto es un blockquote de ejemplo.&quot;
        </TypographyBlockquote>
        <TypographyList>
          <TypographyListItem>Elemento de lista 1</TypographyListItem>
          <TypographyListItem>Elemento de lista 2</TypographyListItem>
        </TypographyList>
      </div>
    </section>
  );
}

export default TypographyDemo;
