"use client";

/**
 * components/DifferentialsSection.tsx
 * Seção de Diferenciais Estratégicos da BC Consultoria.
 * Destaca os 4 pilares que diferenciam a empresa no mercado.
 */

import { motion } from "framer-motion";
import { Brain, Network, Zap, Shield } from "lucide-react";

const differentials = [
  {
    icon: Brain,
    title: "Experiência Consolidada",
    description:
      "Mais de 20 anos atuando como intermediadores estratégicos no mercado financeiro brasileiro, com histórico comprovado de sucesso.",
    highlights: [
      "20+ anos de mercado",
      "Centenas de operações bem-sucedidas",
      "Expertise em múltiplos setores",
    ],
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Network,
    title: "Rede de Contatos Privilegiada",
    description:
      "Relacionamentos consolidados com as principais instituições financeiras, órgãos reguladores e investidores do Brasil.",
    highlights: [
      "Parcerias com BNDES, Banco do Brasil, Caixa",
      "Acesso a investidores privados",
      "Rede de especialistas regulatórios",
    ],
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Zap,
    title: "Agilidade e Eficiência",
    description:
      "Processos otimizados que garantem respostas rápidas e soluções ágeis, reduzindo o tempo de captação de recursos.",
    highlights: [
      "Resposta em até 15 minutos",
      "Processos streamlined",
      "Decisões rápidas",
    ],
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Shield,
    title: "Transparência e Conformidade",
    description:
      "Atuação pautada em ética, transparência total e conformidade com regulamentações, garantindo segurança jurídica.",
    highlights: [
      "Compliance total",
      "Transparência em todas as operações",
      "Segurança jurídica garantida",
    ],
    color: "from-red-50 to-red-100",
    iconColor: "text-red-600",
  },
];

export default function DifferentialsSection() {
  return (
    <section
      aria-labelledby="differentials-heading"
      className="py-24 bg-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            id="differentials-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Por Que Escolher a{" "}
            <span className="text-red-900">BC Consultoria</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossos diferenciais estratégicos garantem resultados superiores e
            segurança em cada operação.
          </p>
        </div>

        {/* Grid de Diferenciais */}
        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.article
                key={diff.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${diff.color} rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-shadow`}
              >
                {/* Ícone */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-white rounded-lg ${diff.iconColor}`}>
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {diff.title}
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {diff.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {diff.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 font-medium"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${diff.iconColor.replace("text-", "bg-")}`}
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Nossos Números</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <p className="text-red-100">Anos de Experiência</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-red-100">Operações Realizadas</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">R$ 2B+</div>
              <p className="text-red-100">Em Recursos Captados</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
