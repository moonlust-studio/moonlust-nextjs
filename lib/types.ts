// ✅ FILE: lib/types.ts – sửa lại interface chuẩn
export interface Story {
  id: string; // ✅ thêm dòng này!
  slug: string;
  title: string;
  genre: string[];
  status: string;
  chapters: number;
  cover?: string;
  description?: string;
  summary?: string;
}
