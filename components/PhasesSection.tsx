"use client";

/**
 * components/PhasesSection.tsx
 * Seção de Fases de Implementação com timeline visual.
 * Mostra as 4 fases do processo de intermediação da BC Consultoria.
 */

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Diagnóstico",
    description:
      "Análise profunda da situação financeira, necessidades e objetivos da sua empresa.",
    details: [
      "Avaliação de crédito e capacidade de endividamento",
      "Mapeamento de necessidades específicas",
      "Identificação de oportunidades",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    number: 2,
    title: "Estruturação",
    description:
      "Desenvolvimento de estratégia personalizada e estruturação da operação.",
    details: [
      "Elaboração de proposta customizada",
      "Preparação de documentação",
      "Alinhamento de expectativas",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    number: 3,
    title: "Captação",
    description:
      "Apresentação junto às instituições e negociação dos melhores termos.",
    details: [
      "Apresentação em instituições financeiras",
      "Negociação de taxas e prazos",
      "Acompanhamento de aprovação",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    number: 4,
    title: "Monitoramento",
    description:
      "Acompanhamento contínuo e suporte pós-operação para garantir sucesso.",
    details: [
      "Monitoramento de desembolso",
      "Suporte na utilização dos recursos",
      "Acompanhamento contínuo",
    ],
    color: "from-red-500 to-red-600",
  },
];

export default function PhasesSection() {
  return (
    <section
      aria-labelledby="phases-heading"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            id="phases-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nosso Processo em{" "}
            <span className="text-red-900">4 Fases</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um caminho estruturado e comprovado para transformar oportunidades
            em resultados concretos para sua empresa.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Linha conectora (apenas em desktop) */}
          <div
            className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-red-500 -z-10"
            aria-hidden="true"
          />

          {phases.map((phase, index) => (
            <motion.article
              key={phase.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* Número da fase com círculo colorido */}
              <div className="flex justify-center mb-6">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-3xl shadow-lg relative z-10`}
                >
                  {phase.number}
                </div>
              </div>

              {/* Card da fase */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow flex-1 flex flex-col border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {phase.title}
                </h3>

                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {phase.description}
                </p>

                {/* Lista de detalhes */}
                <ul className="space-y-3 flex-1">
                  {phase.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Pronto para iniciar sua transformação?
          </p>
          <a
            href="/contato"
            className="inline-block bg-red-900 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-red-900 focus-visible:outline-offset-2"
          >
            Agende sua Consultoria Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
