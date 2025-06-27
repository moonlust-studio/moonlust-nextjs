// ✅ FILE: lib/api/loadMarkdownChapter.ts

import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

/**
 * ✅ Load nội dung chương từ file markdown → HTML
 * @param slug - Slug của truyện (ví dụ: 'vang-chong')
 * @param id - Số chương (ví dụ: 1)
 * @param locale - Ngôn ngữ ('vi', 'en', 'ja')
 * @returns HTML đã được render từ file markdown
 */
export default async function loadMarkdownChapter(
  slug: string,
  id: number,
  locale: string = 'vi'
): Promise<string> {
  try {
    // 📁 Đường dẫn tới file markdown
    const filePath = path.resolve(process.cwd(), 'content', slug, locale, `chapter-${id}.md`);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Không tìm thấy file: ${filePath}`);
      return '<p><em>Nội dung đang được cập nhật...</em></p>';
    }

    // 📄 Đọc và render HTML
    const raw = fs.readFileSync(filePath, 'utf8').trim();
    return marked(raw);
  } catch (error) {
    console.error(`❌ Lỗi khi load markdown: ${slug}/${locale}/chapter-${id}.md`, error);
    return '<p><em>Nội dung đang được cập nhật...</em></p>';
  }
}
