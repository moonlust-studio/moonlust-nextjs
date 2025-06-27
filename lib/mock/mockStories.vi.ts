// ✅ FILE: lib/mock/mockStories.vi.ts

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

const mockStoriesVi: Story[] = [
  {
    id: 'vang-chong',
    slug: 'vang-chong',
    title: 'Vắng Chồng',
    description: 'Một câu chuyện cảm xúc sâu sắc về người vợ cô đơn khi chồng đi xa, và người cũ bất ngờ xuất hiện.',
    genre: ['Tình cảm', 'Ngoại tình'],
    chapters: 13,
    status: 'ongoing',
    cover: '/images/vangchong.jpg',
  },
  {
    id: 'vung-trom',
    slug: 'vung-trom',
    title: 'Vụng Trộm',
    description: 'Một trò chơi nguy hiểm giữa những con người mang khát khao thầm kín.',
    genre: ['Tâm lý', 'Người lớn'],
    chapters: 0,
    status: 'ongoing',
    cover: '/images/vungtrom.jpg',
  },
  {
    id: 'co-gia-su',
    slug: 'co-gia-su',
    title: 'Cô Gia Sư',
    description: 'Một đêm định mệnh thay đổi cả cuộc đời người phụ nữ trẻ.',
    genre: ['Erotic Drama', 'Tình dục học'],
    chapters: 0,
    status: 'ongoing',
    cover: '/images/thuky.jpg',
  }
];

export default mockStoriesVi;
