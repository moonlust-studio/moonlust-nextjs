import { Story } from './mockStories.vi';

const mockStoriesJa: Story[] = [
  {
    id: 'vang-chong',
    slug: 'vang-chong',
    title: '夫がいない日々',
    description: 'ハー・アイン――遠くに単身赴任する夫を待ちながら、偶然に再会した初恋の人…',
    genre: ['不倫', '感情', 'ドラマ'],
    chapters: 13,
    status: 'completed',
    cover: '/images/vangchong.jpg'
  },
  {
    id: 'vung-trom',
    slug: 'vung-trom',
    title: '秘めた関係',
    description: '交わってはいけない二人の、再会から始まる関係。',
    genre: ['心理', '大人向け'],
    chapters: 0,
    status: 'ongoing',
    cover: '/images/vungtrom.jpg'
  },
  {
    id: 'co-gia-su',
    slug: 'co-gia-su',
    title: '家庭教師',
    description: '静かなレッスンの裏側で、何かが目覚め始める…',
    genre: ['エロティックドラマ', '性心理'],
    chapters: 0,
    status: 'ongoing',
    cover: '/images/thuky.jpg'
  }
];

export default mockStoriesJa;
