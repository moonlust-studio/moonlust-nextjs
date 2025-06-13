// checklist: Review tổng thể chất lượng source code Moonlust

const moonlustChecklist = [
  {
    area: "SEO & Social Sharing",
    passed: true,
    notes: "Đã cấu hình chuẩn SEO: title, desc, keywords, openGraph, Twitter card. Tích hợp global component SeoHead."
  },
  {
    area: "Đa ngôn ngữ (i18n)",
    passed: true,
    notes: "Đã có dynamic language switch + auto detect IP + thư mục dịch chuẩn hoá vi/en/ja."
  },
  {
    area: "Trang chủ (Homepage)",
    passed: true,
    notes: "Hiển thị 3 truyện nổi bật (Card grid), có ảnh + tiêu đề + mô tả + trạng thái. Responsive đẹp."
  },
  {
    area: "Trang chi tiết truyện",
    passed: true,
    notes: "Đã có slug động, hiển thị 3 chương + ảnh đầu mỗi chương + đa ngôn ngữ nội dung."
  },
  {
    area: "Giao diện hình ảnh",
    passed: true,
    notes: "Đã gắn ảnh logo truyện, ảnh minh họa chương, bo góc, shadow đẹp, dùng CDN path chuẩn."
  },
  {
    area: "Phân quyền & User",
    passed: false,
    notes: "Chưa tích hợp chức năng login / register (đang chờ Firebase/Auth0)."
  },
  {
    area: "Bình luận & đánh giá",
    passed: false,
    notes: "Chưa tích hợp hệ thống comment hoặc rating. Sẽ gắn sau khi có user auth."
  },
  {
    area: "Lưu lịch sử đọc",
    passed: true,
    notes: "Đã dùng localStorage ghi nhớ truyện vừa đọc, chuẩn bị sẵn để gắn DB sau."
  },
  {
    area: "Quản trị truyện (CMS)",
    passed: false,
    notes: "Chưa triển khai admin UI/backend CMS, nhưng đã dự trù sẽ dùng Next Admin hoặc Headless CMS."
  },
  {
    area: "Quảng cáo / Hợp tác",
    passed: true,
    notes: "Đã có AdContactSection với nút liên hệ qua email + khối giao diện gọi CTA mạnh."
  }
];

export default moonlustChecklist;
