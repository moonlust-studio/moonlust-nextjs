// ✅ FILE: lib/api/chapters.ts – Load chương & metadata chương theo ngôn ngữ

import chaptersMap from '@/lib/mock/mockChapters';
import loadMarkdownChapter from './loadMarkdownChapter';

/**
 * ✅ Trả về nội dung chương từ mock hoặc file .md
 */
export async function getMockChapter(slug: string, id: number, locale: string) {
  const chapterMeta = chaptersMap?.[locale]?.[slug]?.[id];
  if (!chapterMeta) return null;

  let content = chapterMeta.content;

  if (!content) {
    try {
      content = await loadMarkdownChapter(slug, id, locale);
    } catch (err) {
      console.warn(`[getMockChapter] ❌ Không thể load file: ${slug}/chapter-${id} (${locale})`);
      content = '<p><em>Nội dung đang được cập nhật...</em></p>';
    }
  }

  return {
    id,
    title: chapterMeta.titleHidden || '',
    tag: chapterMeta.tag || '',
    content: content || '<p><em>Nội dung đang được cập nhật...</em></p>',
  };
}

/**
 * ✅ Lấy danh sách metadata các chương để hiển thị TOC hoặc nav
 */
export function getMockChapterList(slug: string, locale: string = 'vi') {
  const chapterSet = chaptersMap?.[locale]?.[slug];
  if (!chapterSet) return [];

  return Object.entries(chapterSet).map(([id, meta]) => {
    const m = meta as { titleHidden?: string; tag?: string };
    return {
      id: Number(id),
      title: m.titleHidden || '',
      tag: m.tag || '',
    };
  });
}
