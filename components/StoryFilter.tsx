// =============================================
// ✅ File: components/StoryFilter.tsx
// ✅ Description: Bộ lọc thể loại + ô tìm kiếm truyện
// =============================================

export default function StoryFilter({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  t,
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border rounded px-4 py-2 w-full md:w-60"
      >
        <option value="all">{t('filter.all_categories', 'Tất cả thể loại')}</option>
        <option value="Tình cảm">{t('filter.love', 'Tình cảm')}</option>
        <option value="Ngoại tình">{t('filter.cheating', 'Ngoại tình')}</option>
        <option value="Erotic Drama">{t('filter.erotic', 'Erotic Drama')}</option>
        <option value="Người lớn">{t('filter.adult', 'Người lớn')}</option>
      </select>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={t('filter.search_placeholder', 'Tìm kiếm theo tiêu đề...')}
        className="border rounded px-4 py-2 w-full md:w-80"
      />
    </section>
  );
}
