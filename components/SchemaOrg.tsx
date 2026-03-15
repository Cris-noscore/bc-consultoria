export default function SchemaOrg() {
  const siteUrl = "https://businesscenterconsult.com.br";
  const siteName = "BC Consultoria";
  const description = "Excelência em intermediação de negócios há mais de 20 anos. Conectamos empresas a recursos financeiros, oportunidades imobiliárias e soluções regulatórias.";
  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Schema da Organização
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        "name": siteName,
        "alternateName": "BC Consult",
        "description": description,
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "telephone": "+5511913535562",
        "email": "contato@businesscenterconsult.com.br",
        "founder": "Silvio Silveira",
        "foundingDate": "2002",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Alameda Mamoré, 503",
          "addressLocality": "Barueri",
          "addressRegion": "SP",
          "postalCode": "06454-040",
          "addressCountry": "BR"
        },
        "sameAs": [
          "https://www.linkedin.com/company/bc-consultoria",
          "https://www.instagram.com/bcconsultoria",
          "https://www.facebook.com/bcconsultoria"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$",
        "areaServed": {
          "@type": "Country",
          "name": "Brazil"
        }
      },
      
      // Schema do Site
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": siteName,
        "description": description,
        "publisher": {
          "@id": `${siteUrl}/#organization`
        }
      },
      
      // Schema da Página Inicial (se quiser incluir)
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        "url": siteUrl,
        "name": `${siteName} | Intermediação de Negócios`,
        "isPartOf": {
          "@id": `${siteUrl}/#website`
        },
        "about": {
          "@id": `${siteUrl}/#organization`
        },
        "description": description
      },
      
      // Schema da Localização (Breadcrumb)
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contato",
            "item": `${siteUrl}/contato`
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}