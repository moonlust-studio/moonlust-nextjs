// ✅ File: lib/api/stories.ts – API giả lập lấy thông tin truyện theo slug
import mockStories from '@/lib/mock/mockStories';

// ✅ Hàm lấy thông tin truyện theo slug và locale
export function getMockStoryBySlug(slug: string, locale: string = 'vi') {
  const stories = mockStories[locale] || [];
  return stories.find((s) => s.slug === slug) || null;
}
