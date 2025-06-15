// ✅ FILE: next.config.js
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  localeDetection: true,
  async rewrites() {
    return [
      {
        source: '/:locale(en|vi|ja|zh)/:path*',
        destination: '/:path*',
      },
      {
        source: '/:locale(en|vi|ja|zh)',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;