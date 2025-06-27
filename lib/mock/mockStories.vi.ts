// ✅ FILE: lib/mock/mockStories.vi.ts – Dữ liệu truyện mock tiếng Việt

// ✅ Kiểu dữ liệu cho truyện (dùng chung toàn hệ thống)
export type Story = {
  id: string;
  slug: string;
  title: string;
  description: string;
  genre: string[];
  chapters: number;
  status: 'ongoing' | 'completed';
  cover: string;
};

// ✅ Danh sách truyện giả lập – tiếng Việt
const mockStoriesVi: Story[] = [
  {
    id: '1',
    slug: 'vang-chong',
    title: 'Vắng Chồng',
    description: 'Một câu chuyện cảm xúc sâu sắc về người vợ cô đơn khi chồng đi xa, và người cũ bất ngờ xuất hiện.',
    genre: ['Tình cảm', 'Ngoại tình'],
    chapters: 13,
    status: 'ongoing',
    cover: '/images/vangchong.jpg', // ✅ Ảnh cover truyện (ưu tiên dùng thư mục /images)
  },
  {
    id: '2',
    slug: 'vung-trom',
    title: 'Vụng Trộm',
    description: 'Một trò chơi nguy hiểm giữa những con người mang khát khao thầm kín, nơi ranh giới bị thử thách.',
    genre: ['Tâm lý', 'Người lớn'],
    chapters: 18,
    status: 'completed',
    cover: '/images/vungtrom.jpg', // 🔁 RECOMMENDED: Đổi tên ảnh cho đồng bộ (nên dùng /images)
  },
  {
    id: '3',
    slug: 'co-gia-su',
    title: 'Cô Gia Sư',
    description: 'Câu chuyện nóng bỏng xoay quanh một đêm định mệnh thay đổi cả cuộc đời người phụ nữ trẻ.',
    genre: ['Erotic Drama', 'Tình dục học'],
    chapters: 24,
    status: 'ongoing',
    cover: '/images/cogiasu.jpg', // 🔁 Đồng bộ tên file ảnh
  }
];

export default mockStoriesVi;
