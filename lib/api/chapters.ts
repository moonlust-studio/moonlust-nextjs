import chaptersMap from '@/lib/mock/mockChapters';
import loadMarkdownChapter from './loadMarkdownChapter';

/**
 * ✅ Lấy nội dung chương từ mock + file markdown đã render HTML
 */
export async function getMockChapter(slug: string, id: number, locale: string) {
  const metadata = chaptersMap?.[locale]?.[slug]?.[id];
  if (!metadata) return null;

  let contentHtml = metadata.content;

  // ✅ Nếu chưa có nội dung HTML → cố gắng load từ file markdown
  if (!contentHtml) {
    try {
      contentHtml = await loadMarkdownChapter(slug, id, locale);
    } catch (error) {
      console.warn(`[getMockChapter] Không thể load file .md cho ${slug}/chapter-${id} (${locale})`);
      contentHtml = '<p><em>Nội dung đang được cập nhật...</em></p>'; // ✅ fallback để không crash build
    }
  }

  return {
    id,
    title: metadata.titleHidden || '',
    tag: metadata.tag || '',
    content: contentHtml || '<p><em>Nội dung đang được cập nhật...</em></p>',
  };
}

/**
 * ✅ Lấy danh sách metadata của các chương truyện (dùng cho TOC, nav...)
 */
export function getMockChapterList(slug: string, locale: string = 'vi') {
  const chapters = chaptersMap?.[locale]?.[slug];
  if (!chapters) return [];

  return Object.entries(chapters).map(([id, meta]) => {
    const m = meta as { titleHidden?: string; tag?: string };
    return {
      id: Number(id),
      title: m.titleHidden || '',
      tag: m.tag || '',
    };
  });
}
