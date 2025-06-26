// ✅ File: lib/api/loadMarkdownChapter.ts
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

/**
 * ✅ Load nội dung chương truyện từ file markdown → HTML
 * @param slug - Tên slug của truyện (vd: 'vang-chong')
 * @param id - Số chương (vd: 1)
 * @param locale - Ngôn ngữ (vi, en, ja)
 * @returns Nội dung HTML đã render từ markdown
 */
export default async function loadMarkdownChapter(
  slug: string,
  id: number,
  locale: string = 'vi'
): Promise<string> {
  try {
    const fileName = `chapter-${id}.md`;

    const chapterPath = path.join(
      process.cwd(),
      'content',
      slug,
      locale,
      fileName
    );

    // ✅ Nếu file không tồn tại → trả về HTML báo lỗi nhẹ
    if (!fs.existsSync(chapterPath)) {
      console.warn(`⚠️ Không tìm thấy file: ${chapterPath}`);
      return '<p><em>Nội dung đang được cập nhật...</em></p>';
    }

    const rawMarkdown = fs.readFileSync(chapterPath, 'utf8');
    const renderedHtml = marked(rawMarkdown);

    return renderedHtml;
  } catch (error) {
    console.error(`❌ Lỗi khi đọc chương: ${slug}/chapter-${id} (${locale})`, error);
    return '<p><em>Đã xảy ra lỗi khi tải nội dung chương.</em></p>';
  }
}
