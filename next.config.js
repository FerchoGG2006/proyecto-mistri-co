/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para export estático (DonWeb)
  output: 'export',
  trailingSlash: true,
  // Fix para el warning de workspace root
  outputFileTracingRoot: __dirname,
  images: {
    // Deshabilitar optimización de imágenes para export estático
    unoptimized: true,
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

module.exports = nextConfig;