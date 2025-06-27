// ✅ FILE: lib/mock/mockStories.en.ts – Danh sách truyện mock tiếng Anh

import { Story } from './mockStories.vi'; // ✅ Dùng chung kiểu dữ liệu Story

const mockStoriesEn: Story[] = [
  {
    id: '1',
    slug: 'vang-chong', // ⚠️ Giữ slug gốc để routing đồng bộ giữa các ngôn ngữ
    title: 'When He’s Gone', // Tên truyện dịch sang tiếng Anh
    description: 'An emotionally gripping story of a lonely wife whose husband is away—until her first love suddenly reappears.',
    genre: ['Emotional', 'Infidelity'],
    chapters: 13,
    status: 'ongoing',
    cover: '/images/vangchong.jpg' // ✅ Đồng bộ ảnh với bản tiếng Việt & Nhật
  },
  {
    id: '2',
    slug: 'vung-trom', // ✅ Đồng bộ lại slug với bản gốc tiếng Việt
    title: 'Forbidden Game',
    description: 'A dangerous game between those hiding secret desires, where boundaries are made to be broken.',
    genre: ['Psychological', 'Adult'],
    chapters: 18,
    status: 'completed',
    cover: '/covers/cam-do.jpg'
  },
  {
    id: '3',
    slug: 'co-gia-su', // ✅ Slug gốc giữ nguyên để tránh lỗi gọi mock
    title: 'Burning Night',
    description: 'A passionate story revolving around a fateful night that changes a young woman’s life forever.',
    genre: ['Erotic Drama'],
    chapters: 24,
    status: 'ongoing',
    cover: '/covers/dem-nong.jpg'
  }
];

export default mockStoriesEn;
