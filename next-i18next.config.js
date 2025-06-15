// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'ja', 'zh'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
