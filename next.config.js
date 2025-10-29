const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para export estático (DonWeb)
  output: 'export',
  trailingSlash: true,
  // Fix para el warning de workspace root
  outputFileTracingRoot: __dirname,
  // Excluir páginas de admin del build estático
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Deshabilitar funcionalidades incompatibles con export estático
  experimental: {
    esmExternals: false,
  },
  images: {
    // Deshabilitar optimización de imágenes para export estático
    unoptimized: true,
    domains: ['localhost'],
  },
  webpack: (config, { isServer }) => {
    // Configuración para evitar ChunkLoadError
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

module.exports = withNextIntl(nextConfig);