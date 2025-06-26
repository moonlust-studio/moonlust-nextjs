// ✅ FILE: lib/mock/mockStories.vi.ts

import { Story } from '@/lib/types'; // Import chuẩn type chung

const mockStoriesVi: Story[] = [
  {
    id: '1',
    slug: 'vang-chong',
    title: 'Vắng Chồng',
    description: 'Một câu chuyện cảm xúc sâu sắc về người vợ cô đơn khi chồng đi xa, và người cũ bất ngờ xuất hiện.',
    genre: ['Tình cảm', 'Ngoại tình'],
    chapters: 13,
    status: 'ongoing',
    cover: '/images/vangchong.jpg',
  },
  {
    id: '2',
    slug: 'vung-trom',
    title: 'Vụng Trộm',
    description: 'Một trò chơi nguy hiểm giữa những con người mang khát khao thầm kín, nơi ranh giới bị thử thách.',
    genre: ['Tâm lý', 'Người lớn'],
    chapters: 18,
    status: 'completed',
    cover: '/covers/cam-do.jpg',
  },
  {
    id: '3',
    slug: 'co-gia-su',
    title: 'Cô Gia Sư',
    description: 'Câu chuyện nóng bỏng xoay quanh một đêm định mệnh thay đổi cả cuộc đời người phụ nữ trẻ.',
    genre: ['Erotic Drama'],
    chapters: 24,
    status: 'ongoing',
    cover: '/covers/dem-nong.jpg',
  },
];

export default mockStoriesVi;
