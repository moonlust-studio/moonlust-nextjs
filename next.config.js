// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['vi', 'en', 'ja', 'zh'],
    defaultLocale: 'vi',
    localeDetection: true,
  },
  reactStrictMode: true,
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