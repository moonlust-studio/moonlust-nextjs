// ✅ FILE: lib/mock/mockStories.en.ts

import { Story } from '@/lib/types'; // Dùng type chung cho toàn project

const mockStoriesEn: Story[] = [
  {
    id: '1',
    slug: 'vang-chong',
    title: 'When He’s Gone',
    description: 'An emotionally gripping story of a lonely wife whose husband is away—until her first love suddenly reappears.',
    genre: ['Emotional', 'Infidelity'],
    chapters: 13,
    status: 'ongoing',
    cover: '/images/vangchong.jpg',
  },
  {
    id: '2',
    slug: 'tro-choi-cam-doan',
    title: 'Forbidden Game',
    description: 'A dangerous game between those hiding secret desires, where boundaries are made to be broken.',
    genre: ['Psychological', 'Adult'],
    chapters: 18,
    status: 'completed',
    cover: '/covers/cam-do.jpg',
  },
  {
    id: '3',
    slug: 'dem-nong-chay',
    title: 'Burning Night',
    description: 'A passionate story revolving around a fateful night that changes a young woman’s life forever.',
    genre: ['Erotic Drama'],
    chapters: 24,
    status: 'ongoing',
    cover: '/covers/dem-nong.jpg',
  },
];

export default mockStoriesEn;
