// ✅ File: lib/api/loadMarkdownChapter.ts

import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

/**
 * Load markdown chương truyện theo locale
 * @param slug - slug của truyện (vd: 'vang-chong')
 * @param id - số chương (vd: 1)
 * @param locale - ngôn ngữ (vi, en, ja)
 * @returns HTML đã render từ markdown
 */
export default async function loadMarkdownChapter(
  slug: string,
  id: number,
  locale: string = 'vi'
): Promise<string> {
  try {
    // ✅ Chuẩn hóa đường dẫn tới file markdown
    const fileName = `chapter-${id}.md`;
    const chapterPath = path.resolve(
      process.cwd(),
      'content',
      slug,
      locale,
      fileName
    );

    // ✅ Kiểm tra tồn tại trước khi đọc
    if (!fs.existsSync(chapterPath)) {
      console.warn(`⚠️ File không tồn tại: ${chapterPath}`);
      return '<p><em>Content not found.</em></p>';
    }

    // ✅ Đọc file và chuyển sang HTML
    const rawMarkdown = fs.readFileSync(chapterPath, 'utf8');
    return marked(rawMarkdown);
  } catch (error) {
    console.error(`❌ Lỗi load markdown tại ${slug}/${locale}/chapter-${id}.md`, error);
    return '<p><em>Content not found.</em></p>';
  }
}
