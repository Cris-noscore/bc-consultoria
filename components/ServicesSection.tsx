"use client";

/**
 * components/ServicesSection.tsx
 * Seção de serviços com lazy loading — carregada apenas quando visível.
 * Hierarquia de títulos: H2 (seção) → H3 (cada serviço)
 */

import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    title: "Financeiro",
    description: "Crédito, capital de giro, investimentos e projetos especiais junto às principais instituições financeiras do Brasil.",
    messageType: "financeiro" as const,
    colorClass: "text-red-900",
    btnClass: "w-full bg-green-600 hover:bg-green-700 text-white py-2",
  },
  {
    title: "Regulatório",
    description: "Licenças, compliance e soluções legais para sua empresa operar com segurança jurídica.",
    messageType: "regulatorio" as const,
    colorClass: "text-purple-700",
    btnClass: "w-full bg-purple-600 hover:bg-purple-700 text-white py-2",
  },
  {
    title: "Regularização",
    description: "AVCB, licenças ambientais e processos corporativos para regularizar sua empresa.",
    messageType: "regularizacao" as const,
    colorClass: "text-red-700",
    btnClass: "w-full bg-red-600 hover:bg-red-700 text-white py-2",
  },
  {
    title: "Consultor",
    description: "Atendimento direto com especialista BC Consultoria para soluções personalizadas.",
    messageType: "consultor" as const,
    colorClass: "text-blue-700",
    btnClass: "w-full bg-blue-600 hover:bg-blue-700 text-white py-2",
  },
];

export default function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="py-24 bg-gray-90">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="services-heading" className="text-3xl font-bold text-center mb-3">
          Nossos Serviços
        </h2>
        <p className="text-center text-gray-600 mb-2 text-lg font-semibold">
          Fale com nossos especialistas
        </p>
        <p className="text-center mb-10 text-gray-500">
          Escolha o setor desejado:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((svc) => (
            <article key={svc.title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <h3 className={`text-xl font-bold mb-2 ${svc.colorClass}`}>{svc.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{svc.description}</p>
              <WhatsAppButton
                messageType={svc.messageType}
                className={svc.btnClass}
                showLabel
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
