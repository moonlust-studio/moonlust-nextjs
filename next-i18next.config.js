// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'ja', 'zh'],
    localeDetection: true, // ✅ Thêm dòng này để bật tự phát hiện ngôn ngữ trình duyệt
  },
  localePath: './public/locales',
};
