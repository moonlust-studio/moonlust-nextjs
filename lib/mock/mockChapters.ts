// ✅ File: lib/mock/mockChapters.ts

import vi from './mockChapters.vi';
import en from './mockChapters.en';
import ja from './mockChapters.ja';
import chaptersMap from './mockChapters';

const allChapters = { vi, en, ja };
export default allChapters;

/**
 * ✅ Lấy nội dung chương cụ thể từ metadata đã có sẵn
 */
export function getChapterById(slug: string, id: number, locale: string = 'vi') {
  const story = allChapters[locale]?.[slug];
  const chapter = story?.[id];
  if (!chapter) return null;

  return {
    id,
    ...chapter,
    content: chapter.content || '<p><em>Nội dung đang được cập nhật...</em></p>'
  };
}

/**
 * ✅ Lấy danh sách metadata các chương
 */
export function getChapterList(slug: string, locale: string = 'vi') {
  const story = allChapters[locale]?.[slug];
  if (!story) return [];

  return Object.entries(story).map(([id, meta]) => {
    const m = meta as { titleHidden?: string; tag?: string };
    return {
      id: Number(id),
      title: m.titleHidden || '',
      tag: m.tag || '',
    };
  });
}

export const getMockChapter = getChapterById;
export const getMockChapterList = getChapterList;
