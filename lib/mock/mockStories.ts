// ✅ FILE: lib/mock/mockStories.ts

import mockStoriesVi from './mockStories.vi';
import mockStoriesEn from './mockStories.en';
import mockStoriesJa from './mockStories.ja';

export interface Story {
  id: string;
  slug: string;
  title: string;
  description: string;
  genre: string[];
  chapters: number;
  status: 'completed' | 'ongoing';
  cover: string;
}

// ✅ Tập hợp các mock truyện theo locale
const mockStories = {
  vi: mockStoriesVi,
  en: mockStoriesEn,
  ja: mockStoriesJa,
};

export default mockStories;
