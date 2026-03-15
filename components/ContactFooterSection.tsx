/**
 * components/ContactFooterSection.tsx
 * Seção de CTA final com lazy loading — carregada apenas quando visível.
 */

import Link from "next/link";

export default function ContactFooterSection() {
  return (
    <section
      aria-label="Chamada para ação — contato"
      className="py-16 bg-gradient-to-r from-gray-900 to-red-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Pronto para Transformar Oportunidades em Resultados?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Nossa equipe responde em até 15 minutos. Atendimento especializado e personalizado.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contato"
            className="bg-white text-red-900 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Fale Conosco
          </Link>
          <Link
            href="/servicos"
            className="border border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Ver Serviços
          </Link>
        </div>
        <p className="text-gray-400 text-sm mt-6">
          ⚡ Resposta em até 15 minutos • Atendimento especializado
        </p>
      </div>
    </section>
  );
}
