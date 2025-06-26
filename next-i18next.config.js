// ✅ File: next-i18next.config.js

module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'ja', 'zh'],
    localeDetection: true, // ✅ Tự phát hiện ngôn ngữ trình duyệt (nên bật)
  },
  localePath: './public/locales', // ✅ Folder chứa file dịch đa ngôn ngữ
};
