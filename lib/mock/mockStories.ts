// ✅ File: lib/mock/mockStories.ts

import mockStoriesVi from './mockStories.vi';
import mockStoriesEn from './mockStories.en';
import mockStoriesJa from './mockStories.ja';

const mockStories = {
  vi: mockStoriesVi,
  en: mockStoriesEn,
  ja: mockStoriesJa,
};
// ✅ FILE: lib/mock/mockStories.ts

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

export default mockStories;
