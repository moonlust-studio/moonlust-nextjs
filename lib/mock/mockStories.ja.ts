// ✅ FILE: lib/mock/mockStories.ja.ts

import { Story } from '@/lib/types'; // dùng chuẩn interface toàn cục

const mockStoriesJa: Story[] = [
  {
    id: '1',
    slug: 'vang-chong',
    title: '夫がいない日々',
    description: 'ハー・アイン――遠くに単身赴任する夫を待ちながら、偶然に再会した初恋の人…',
    genre: ['不倫', '感情', 'ドラマ'],
    chapters: 13,
    status: 'ongoing',
    cover: '/images/vangchong.jpg',
  }
];

export default mockStoriesJa;
