/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ BẮT BUỘC cho Cloudflare Pages static hosting
  i18n: {
    locales: ['vi', 'en', 'ja'],
    defaultLocale: 'vi',
    localeDetection: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
