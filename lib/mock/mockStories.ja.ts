// ✅ FILE: lib/mock/mockStories.ja.ts – Truyện mock tiếng Nhật

// ✅ Dùng lại type Story từ tiếng Việt
import { Story } from './mockStories.vi';

// ✅ Danh sách truyện mock tiếng Nhật
const mockStoriesJa: Story[] = [
  {
    id: '1',
    slug: 'vang-chong', // ⚠️ Giữ slug gốc tiếng Việt để routing đúng
    title: '夫がいない日々', // Vắng Chồng (phiên bản tiếng Nhật)
    description: 'ハー・アイン――遠くに単身赴任する夫を待ちながら、偶然に再会した初恋の人…',
    genre: ['不倫', '感情', 'ドラマ'], // 📌 Tách theo thể loại Nhật
    chapters: 13,
    status: 'ongoing',
    cover: '/images/vangchong.jpg' // 🔁 Nên đồng bộ tên ảnh với các bản ngôn ngữ khác
  }
];

export default mockStoriesJa;
