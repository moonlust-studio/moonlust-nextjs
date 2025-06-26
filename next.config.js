// ✅ FILE: next.config.js – chuẩn static export, bỏ i18n & serverActions
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Xuất static để dùng Cloudflare Pages
  experimental: {
    // ⚠️ Chỉ bật optimizeCss nếu cần (không bật nếu gây lỗi)
    optimizeCss: true,
    // serverActions: true, // ❌ BỎ nếu không dùng app router
  },
  // ⚠️ Nếu dùng image optimization, nên thêm:
  images: {
    unoptimized: true, // ⚠️ static export không hỗ trợ Image tối ưu
  },
};

module.exports = nextConfig;
