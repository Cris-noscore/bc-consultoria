import type { NextConfig } from "next";

/**
 * next.config.ts
 * Configurações otimizadas para performance, SEO e Google Cloud Run.
 */
const nextConfig: NextConfig = {
  // 1. Essencial para o Google Cloud (Cloud Run/App Engine)
  output: 'standalone',
  
  // 2. Otimização de Imagens (AVIF + WebP)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 ano de cache para imagens otimizadas
    unoptimized: false,
    // ⚠️ IMPORTANTE: Se você usar imagens externas, adicione os domínios aqui
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleapis.com', // Exemplo para imagens do Google
      },
      // Adicione outros domínios conforme necessário
    ],
  },

  // 3. Segurança e Performance
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compress: true,
  reactStrictMode: true,

  // 4. NOVO: Headers de cache otimizados para o Cloud Run
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|ico|css|js)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache de 1 ano para assets estáticos
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // 5. NOVO: Redirecionamentos (se necessário)
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-page',
  //       destination: '/new-page',
  //       permanent: true, // 301 redirect
  //     },
  //   ];
  // },
};

export default nextConfig;