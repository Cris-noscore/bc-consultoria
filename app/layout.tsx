import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaOrgDynamic from "@/components/SchemaOrgDynamic";
import { getOrganizationSchema, SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seoSchemas";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Intermediação de Negócios`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.webp", // Ícone padrão da aba
    shortcut: "/favicon.webp",
    apple: "/favicon.webp", // Ícone para quando salvam no iPhone
  },
  keywords: [
    "consultoria financeira",
    "intermediação de negócios",
    "captação de recursos",
    "BNDES",
    "regularização empresarial",
    "compliance",
    "Barueri",
    "Alphaville",
    "São Paulo",
  ],
  authors: [{ name: "BC Consultoria", url: SITE_URL }],
  creator: "BC Consultoria",
  publisher: "BC Consultoria",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Intermediação de Negócios`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/logo.webp`,
        width: 1200,
        height: 630,
        alt: `Logo ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Intermediação de Negócios`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/logo.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#7f1d1d",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        {/* Skip to content para acessibilidade via teclado */}
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo principal
        </a>

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <WhatsAppButton variant="floating" />

        {/* Schema.org global da organização */}
        <SchemaOrgDynamic schema={getOrganizationSchema() as Record<string, unknown>} />
      </body>
    </html>
  );
}
