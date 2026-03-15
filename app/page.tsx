import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaOrgDynamic from "@/components/SchemaOrgDynamic";
import { getOrganizationSchema, SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seoSchemas";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => (
    <div className="py-24 bg-gray-50 flex items-center justify-center" aria-busy="true">
      <div className="w-8 h-8 border-4 border-red-900 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
  ssr: true,
});

const PhasesSection = dynamic(() => import("@/components/PhasesSection"), {
  ssr: true,
});

const DifferentialsSection = dynamic(() => import("@/components/DifferentialsSection"), {
  ssr: true,
});

const ContactFooterSection = dynamic(() => import("@/components/ContactFooterSection"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | Intermediação de Negócios`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <SchemaOrgDynamic schema={getOrganizationSchema() as Record<string, unknown>} />

      {/* ── HERO ── */}
      <section
        aria-label="Apresentação da BC Consultoria"
        className="bg-gradient-to-b from-white to-gray-50 text-gray-900 py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* LOGOTIPO NO CORPO DA PÁGINA */}
            <div className="flex items-center gap-6 mb-12">
              <Image
                src="/bc_logo_melhorado.png"
                alt="Logo BC Consultoria"
                width={250}
                height={250}
                className="h-40 w-40 object-contain"
                priority
              />
              <div>
                <div className="text-2xl font-bold text-red-900 leading-none">BC</div>
                <div className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Consultoria</div>
              </div>
            </div>

            <p className="text-red-900 font-semibold text-sm uppercase tracking-widest mb-3">
              Mais de 20 anos de experiência
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Intermediação de Negócios{" "}
              <span className="text-red-900">Estratégica</span> para sua Empresa
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Especialistas em conectar empresas a recursos financeiros,
              oportunidades e soluções regulatórias através de uma rede
              consolidada com as principais instituições do Brasil.
            </p>

            <div className="flex flex-wrap gap-4">
              <WhatsAppButton
                messageType="consultor"
                className="bg-red-900 hover:bg-red-800 text-white px-6 py-3"
                showLabel
              />
              <a
                href="/sobre"
                className="border border-gray-300 hover:border-red-900 text-gray-900 hover:text-red-900 px-6 py-3 rounded font-bold transition-colors focus-visible:outline-2 focus-visible:outline-red-900 focus-visible:outline-offset-2"
              >
                Nossa História
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-[320px] mx-auto">
            <div className="aspect-square rounded-full border-8 border-white shadow-2xl overflow-hidden relative">
              <Image
                src="/silvioceo"
                alt="Silvio Silveira, CEO e Fundador da BC Consultoria, com mais de 20 anos de experiência em intermediação de negócios"
                fill
                sizes="(max-width: 768px) 250px, 320px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 right-0 md:-right-6 bg-white p-4 rounded-lg shadow-xl border border-gray-200 max-w-xs">
              <div className="text-red-900 text-lg font-bold mb-1">Silvio Silveira</div>
              <div className="text-gray-600 text-sm">CEO &amp; Fundador</div>
              <div className="text-gray-500 text-xs mt-1">20+ anos de experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS (lazy) ── */}
      <ServicesSection />

      {/* ── FASES DE IMPLEMENTAÇÃO (lazy) ── */}
      <PhasesSection />

      {/* ── DIFERENCIAIS ESTRATÉGICOS (lazy) ── */}
      <DifferentialsSection />

      {/* ── CONTATO FINAL (lazy) ── */}
      <ContactFooterSection />
    </>
  );
}