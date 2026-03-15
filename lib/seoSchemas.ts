/**
 * lib/seoSchemas.ts
 * Schemas dinâmicos centralizados para SEO (Schema.org)
 * Utilizados em todas as páginas do site BC Consultoria
 */

export const SITE_URL = "https://businesscenterconsult.com.br";
export const SITE_NAME = "BC Consultoria";
export const SITE_DESCRIPTION =
  "Excelência em intermediação de negócios há mais de 20 anos. Conectamos empresas a recursos financeiros, oportunidades imobiliárias e soluções regulatórias.";

// ─── Schema da Organização (Home) ─────────────────────────────────────────────
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: "BC Consult",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.webp`,
        telephone: "+5511913535562",
        email: "contato@businesscenterconsult.com.br",
        founder: "Silvio Silveira",
        foundingDate: "2002",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Alameda Mamoré, 503 - Conj. 64",
          addressLocality: "Barueri",
          addressRegion: "SP",
          postalCode: "06454-040",
          addressCountry: "BR",
        },
        sameAs: [
          "https://www.linkedin.com/company/bc-consultoria",
          "https://www.instagram.com/bcconsultoria",
          "https://www.facebook.com/bcconsultoria",
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        areaServed: { "@type": "Country", name: "Brazil" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${SITE_NAME} | Intermediação de Negócios`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        description: SITE_DESCRIPTION,
      },
    ],
  };
}

// ─── Schema de Serviços ────────────────────────────────────────────────────────
export function getServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/servicos`,
    name: "Serviços | BC Consultoria",
    description:
      "Intermediação Financeira, Ativos e Investimentos, Regularização e Compliance para empresas no Brasil.",
    url: `${SITE_URL}/servicos`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    hasPart: [
      {
        "@type": "Service",
        name: "Intermediação Financeira Estratégica",
        description:
          "Captação de recursos junto a BNDES, Banco do Brasil, Caixa Econômica Federal e investidores privados.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Brazil",
      },
      {
        "@type": "Service",
        name: "Intermediação de Ativos e Investimentos",
        description:
          "Projetos em mineração, commodities, energia solar e criptoativos.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Brazil",
      },
      {
        "@type": "Service",
        name: "Regularização, Licenças e Compliance",
        description:
          "Licenças ambientais, AVCB, due diligence e registros empresariais.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Brazil",
      },
    ],
  };
}

// ─── Schema de Contato ────────────────────────────────────────────────────────
export function getContactSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contato`,
    name: "Contato | BC Consultoria",
    description: "Entre em contato com a BC Consultoria via WhatsApp ou formulário.",
    url: `${SITE_URL}/contato`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": `${SITE_URL}/#organization` },
  };
}

// ─── Schema da Página Sobre ───────────────────────────────────────────────────
export function getAboutSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/sobre`,
    name: "Sobre | BC Consultoria",
    description:
      "Conheça a história, liderança e valores da BC Consultoria.",
    url: `${SITE_URL}/sobre`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}
