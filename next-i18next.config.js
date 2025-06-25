// next-i18next.config.js
/** @type {import('next-i18next').UserConfig} */
const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'ja', 'zh'],
    localeDetection: false, // ✅ Phù hợp type UserConfig (true sẽ báo lỗi)
  },
  localePath: './public/locales',
};

module.exports = nextI18NextConfig;

