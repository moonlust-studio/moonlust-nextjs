// =============================================
// ✅ File: components/NoResult.tsx
// ✅ Description: Thông báo không tìm thấy truyện
// =============================================

export default function NoResult({ t }) {
  return (
    <div className="text-center py-16 text-gray-500 text-lg">
      {t('message.no_result', 'Không tìm thấy truyện nào phù hợp.')}
    </div>
  );
}
