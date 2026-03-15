import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaOrgDynamic from "@/components/SchemaOrgDynamic";
import { getAboutSchema, SITE_URL } from "@/lib/seoSchemas";

export const metadata: Metadata = {
  title: "Sobre | BC Consultoria",
  description: "Conheça a história, liderança e valores da BC Consultoria. Mais de 20 anos conectando empresas a oportunidades no Brasil.",
  alternates: { canonical: `${SITE_URL}/sobre` },
};

const parceiros = [
  { name: "BNDES", logo: "/bndes.png" },
  { name: "Banco do Brasil", logo: "/bb.png" },
  { name: "Caixa Econômica", logo: "/caixa.png" },
  { name: "Investimentos", logo: "/investimento.png" },
];

export default function SobrePage() {
  return (
    <>
      <SchemaOrgDynamic schema={getAboutSchema() as Record<string, unknown>} />

      <section aria-label="Apresentação sobre a BC Consultoria" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-900 font-semibold text-sm uppercase tracking-widest mb-3">Nossa História</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Sobre a <span className="text-red-900">BC Consultoria</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Mais de 20 anos construindo pontes entre oportunidades e recursos no mercado brasileiro.
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton messageType="consultor" className="bg-red-900 hover:bg-red-800 text-white px-6 py-3" showLabel />
              <a href="/contato" className="border border-gray-300 hover:border-red-900 text-gray-900 hover:text-red-900 px-6 py-3 rounded font-bold transition-colors focus-visible:outline-2 focus-visible:outline-red-900 focus-visible:outline-offset-2">
                Fale Conosco
              </a>
            </div>
          </div>
          <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/about.webp" alt="Sede da BC Consultoria no Edifício Icon, Alphaville, Barueri SP" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-6">
                <h2 className="text-xl font-bold">Sede em Alphaville</h2>
                <p className="text-sm">Alameda Mamoré, 503 - Edifício Icon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-content-heading" className="bg-white text-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          <h2 id="about-content-heading" className="sr-only">Conteúdo sobre a empresa</h2>

          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-l-4 border-red-900 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Nossa Trajetória</h3>
            <p className="text-gray-700 leading-relaxed">
              Há mais de 20 anos atuamos como protagonistas na intermediação de negócios no Brasil, oferecendo soluções integradas e estratégicas que conectam empresas a recursos financeiros, oportunidades imobiliárias e soluções regulatórias.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-l-4 border-gray-300 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Liderança e Expertise</h3>
            <p className="text-gray-700 leading-relaxed">
              Sob a liderança do CEO Silvio Silveira, construímos uma trajetória sólida junto às principais instituições financeiras do país, com foco em resultados concretos e relacionamentos de longo prazo.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Nossos Parceiros Estratégicos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {parceiros.map((item) => (
                <div key={item.name} className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
                  <Image src={item.logo} alt={`Logo ${item.name} - parceiro estratégico da BC Consultoria`} width={140} height={80} className="object-contain mb-2" />
                  <span className="text-sm text-gray-600 font-semibold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center mb-10">Nossos Pilares Fundamentais</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "⚖️", title: "Ética e Transparência", text: "Relacionamentos construídos com confiança absoluta e integridade." },
                { icon: "🎯", title: "Foco em Resultados", text: "Soluções que geram crescimento sustentável para nossos clientes." },
                { icon: "🧠", title: "Expertise Setorial", text: "Conhecimento profundo dos mercados financeiro e regulatório." },
              ].map((item) => (
                <div key={item.title} className="bg-gradient-to-b from-white to-red-50 p-8 rounded-2xl border shadow-lg text-center">
                  <div className="text-5xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para Transformar Oportunidades em Resultados?</h3>
            <p className="text-gray-600 mb-6">Nossa equipe está preparada para conduzir sua empresa ao próximo nível.</p>
            <WhatsAppButton messageType="consultor" className="bg-red-900 hover:bg-red-800 text-white px-8 py-3" showLabel />
          </div>
        </div>
      </section>
    </>
  );
}
