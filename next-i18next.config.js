// ✅ File: next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'ja', 'zh'],
  },
  localePath: path.resolve('./public/locales'), // ✅ Dùng path.resolve để tương thích Vercel
};
