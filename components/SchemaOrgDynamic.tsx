"use client";

/**
 * components/SchemaOrgDynamic.tsx
 * Componente reutilizável para renderizar schemas Schema.org em qualquer página.
 * Aceita qualquer objeto de schema válido.
 */

interface SchemaOrgDynamicProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaOrgDynamic({ schema }: SchemaOrgDynamicProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
