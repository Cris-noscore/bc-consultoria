import type { NextConfig } from "next";

/**
 * next.config.ts
 * Configurações otimizadas para performance e SEO (Google Cloud Ready).
 */
const nextConfig: NextConfig = {
  // 1. Essencial para o Google Cloud (Cloud Run/App Engine)
  output: 'standalone',
  
  // 2. Otimização de Imagens (AVIF + WebP)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    unoptimized: false,
  },

  // 3. Segurança e Performance
  poweredByHeader: false, // Oculta que o site usa Next.js (Segurança)
  productionBrowserSourceMaps: false, // Código fonte não visível para o usuário
  compress: true, // Comprime os arquivos para carregar mais rápido
  reactStrictMode: true, // Melhorias de desenvolvimento
};

export default nextConfig;