// ✅ Đây mới là nội dung đúng của `next.config.js`

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['vi', 'en', 'ja'],
    defaultLocale: 'vi',
    localeDetection: false, // ✅ Tắt tự động chuyển locale
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
