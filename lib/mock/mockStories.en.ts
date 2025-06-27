import { Story } from './mockStories.vi';

const mockStoriesEn: Story[] = [
  {
    id: 'vang-chong',
    slug: 'vang-chong',
    title: 'When He’s Gone',
    description: 'An emotionally gripping story of a lonely wife whose husband is away—until her first love suddenly reappears.',
    genre: ['Emotional', 'Infidelity'],
    chapters: 13,
    status: 'completed',
    cover: '/images/vangchong.jpg'
  },
  {
    id: 'vung-trom',
    slug: 'vung-trom',
    title: 'Secret Affair',
    description: 'A forbidden connection that should’ve stayed buried...',
    genre: ['Psychological', 'Adult'],
    chapters: 0,
    status: 'ongoing',
    cover: '/images/vungtrom.jpg'
  },
  {
    id: 'co-gia-su',
    slug: 'co-gia-su',
    title: 'The Private Tutor',
    description: 'Something inappropriate begins to stir behind tutoring sessions.',
    genre: ['Erotic Drama', 'Sexual Psychology'],
    chapters: 0,
    status: 'ongoing',
    cover: '/images/thuky.jpg'
  }
];

export default mockStoriesEn;
