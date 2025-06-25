// ✅ types.ts – Interface thống nhất cho dữ liệu truyện
export interface Story {
  slug: string;
  title: string;
  description: string;
  status: 'ongoing' | 'completed';
  genre: string[]; // ✅ Thêm dòng này để hỗ trợ thể loại truyện
  coverImage: string;
  totalChapters: number;
}
