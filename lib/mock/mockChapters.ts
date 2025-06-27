// ✅ File: lib/api/chapters.ts – API layer lấy dữ liệu chương từ mock theo ngôn ngữ
import mockChaptersVi from './mockChapters.vi';
import mockChaptersEn from './mockChapters.en';
import mockChaptersJa from './mockChapters.ja';
import fs from 'fs';
import path from 'path';

// ✅ Map dữ liệu chương theo locale
const chaptersMap: { [locale: string]: any } = {
  vi: mockChaptersVi,
  en: mockChaptersEn,
  ja: mockChaptersJa,
};

export default chaptersMap;

/**
 * ✅ Đọc nội dung markdown thủ công nếu chương không có content
 * @param slug - slug truyện
 * @param id - số chương
 * @param locale - ngôn ngữ
 * @returns nội dung HTML đã format
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
 * ✅ Trả về nội dung chương cụ thể
 * - Ưu tiên lấy từ mock
 * - Nếu không có, sẽ đọc file markdown hoặc file chỉ định trong `filepath`
 */
export function getChapterById(slug: string, id: number, locale: string = 'vi') {
  const story = chaptersMap[locale]?.[slug];
  const chapter = story?.[id];
  if (!chapter) return null;

  let content = chapter.content;

  // ✅ Nếu có filepath (dẫn tới file .md), load nội dung từ đó
  if (!content && chapter.filepath) {
    try {
      const filePath = path.join(process.cwd(), chapter.filepath);
      const raw = fs.readFileSync(filePath, 'utf-8');
      content = `<p>${raw.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br/>')}</p>`;
    } catch (error) {
      console.warn(`[mockChapters] Không thể đọc file: ${chapter.filepath}`);
      content = '<p><em>Nội dung đang được cập nhật...</em></p>';
    }
  }

  // ✅ Nếu không có content và không có filepath → thử đọc file markdown mặc định
  if (!content) {
    content = loadMarkdown(slug, id, locale);
  }

  return {
    id,
    ...chapter,
    content,
  };
}

/**
 * ✅ Trả về danh sách metadata chương để hiển thị TOC
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

// ✅ Export lại hàm đúng chuẩn Moonlust API
export const getMockChapter = getChapterById;
export const getMockChapterList = getChapterList;
