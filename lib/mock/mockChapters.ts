import mockChaptersVi from './mockChapters.vi';
import mockChaptersEn from './mockChapters.en';
import mockChaptersJa from './mockChapters.ja';
import fs from 'fs';
import path from 'path';

const chaptersMap: { [locale: string]: any } = {
  vi: mockChaptersVi,
  en: mockChaptersEn,
  ja: mockChaptersJa,
};

export default chaptersMap;

/**
 * ✅ Load nội dung từ markdown nếu chưa có content
 */
function loadMarkdown(slug: string, id: number, locale: string): string {
  try {
    const filePath = path.join(process.cwd(), 'content', slug, locale, `chapter-${id}.md`);
    const raw = fs.readFileSync(filePath, 'utf-8');
    return `<p>${raw.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br/>')}</p>`;
  } catch (error) {
    console.warn(`[mockChapters] Không tìm thấy file .md cho ${slug}/chapter-${id} (${locale})`);
    return '<p><em>Nội dung đang được cập nhật...</em></p>';
  }
}

/**
 * ✅ Lấy nội dung chương cụ thể
 */
export function getChapterById(slug: string, id: number, locale: string = 'vi') {
  const story = chaptersMap[locale]?.[slug];
  const chapter = story?.[id];
  if (!chapter) return null;

  let content = chapter.content;
  if (!content && chapter.filepath) {
    try {
      const filePath = path.join(process.cwd(), chapter.filepath);
      const raw = fs.readFileSync(filePath, 'utf-8');
      content = `<p>${raw.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br/>')}</p>`;
    } catch (error) {
      console.warn(`[mockChapters] Không thể đọc file: ${chapter.filepath}`);
      content = '<p><em>Nội dung đang được cập nhật...</em></p>';
    }
  } else if (!content) {
    content = loadMarkdown(slug, id, locale);
  }

  return { id, ...chapter, content };
}

/**
 * ✅ Lấy danh sách metadata các chương
 */
export function getChapterList(slug: string, locale: string = 'vi') {
  const story = chaptersMap[locale]?.[slug];
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
