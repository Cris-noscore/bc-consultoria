import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaOrgDynamic from "@/components/SchemaOrgDynamic";
import { getServicesSchema, SITE_URL } from "@/lib/seoSchemas";

export const metadata: Metadata = {
  title: "Serviços | BC Consultoria",
  description: "Conheça os serviços especializados da BC Consultoria: Intermediação Financeira, Ativos e Investimentos, Regularização e Compliance.",
  alternates: { canonical: `${SITE_URL}/servicos` },
};

export default function ServicosPage() {
  return (
    <>
      <SchemaOrgDynamic schema={getServicesSchema() as Record<string, unknown>} />

      <section aria-label="Apresentação dos serviços" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-900 font-semibold text-sm uppercase tracking-widest mb-3">Expertise de mais de 20 anos</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Nossos <span className="text-red-900">Serviços</span> Especializados
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mais de 20 anos de expertise em intermediação estratégica, atuando junto às principais instituições financeiras e órgãos reguladores do Brasil.
            </p>
          </div>
          <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/about.jpg" alt="Equipe BC Consultoria em reunião de estratégia de negócios" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-6">
                <h2 className="text-xl font-bold">Soluções Estratégicas</h2>
                <p className="text-sm">Financeiro • Investimentos • Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col">
              <div className="text-red-900 text-3xl mb-4" aria-hidden="true">🏦</div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">Intermediação Financeira Estratégica</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Captação de recursos estruturada junto às principais instituições financeiras:</p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>• BNDES</li><li>• Banco do Brasil</li><li>• Caixa Econômica Federal</li><li>• Investidores Privados</li><li>• Factoring</li>
              </ul>
              <p className="text-gray-700 italic text-sm mb-4">Análise de viabilidade, estruturação de projetos e acompanhamento integral.</p>
              <div className="mt-auto"><WhatsAppButton messageType="financeiro" className="w-full bg-green-600 hover:bg-green-700 text-white py-2" showLabel /></div>
            </article>

            <article className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col">
              <div className="text-red-900 text-3xl mb-4" aria-hidden="true">📊</div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">Intermediação de Ativos e Investimentos</h3>
              <p className="text-gray-700 mb-4">Projetos aprovados e operações estruturadas em:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Mineração", "Commodities", "Energia Solar", "Cripto"].map(item => (
                  <span key={item} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">{item}</span>
                ))}
              </div>
              <div className="mt-auto"><WhatsAppButton messageType="regulatorio" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2" showLabel /></div>
            </article>

            <article className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col">
              <div className="text-red-900 text-3xl mb-4" aria-hidden="true">⚖️</div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">Regularização, Licenças e Compliance</h3>
              <ul className="text-gray-700 space-y-2 text-sm mb-4">
                <li>• Licenças ambientais (LP, LI, LO)</li><li>• AVCB e segurança contra incêndio</li><li>• Due diligence e compliance</li><li>• Registros empresariais</li>
              </ul>
              <div className="mt-auto"><WhatsAppButton messageType="regularizacao" className="w-full bg-red-600 hover:bg-red-700 text-white py-2" showLabel /></div>
            </article>
          </div>

          <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Precisa de uma solução personalizada?</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">Nossa equipe está pronta para analisar seu caso e oferecer a melhor estratégia de intermediação para seu negócio.</p>
            <WhatsAppButton messageType="consultor" className="bg-white text-red-900 hover:bg-gray-100 px-8 py-3 font-bold" showLabel />
            <p className="text-gray-300 text-sm mt-6">⚡ Atendimento especializado e personalizado</p>
          </div>
        </div>
      </section>
    </>
  );
}