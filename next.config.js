const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        // Adiciona um objeto vazio à propriedade node
      }
    }

    return config
  },
}

module.exports = nextConfig
