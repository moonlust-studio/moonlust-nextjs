// ✅ FILE: lib/mock/mockStories.ts

import mockStoriesVi from './mockStories.vi';
import mockStoriesEn from './mockStories.en';
import mockStoriesJa from './mockStories.ja';
import { Story } from '@/lib/types'; // Import chuẩn type Story

// ✅ Chuẩn hóa theo định dạng đa ngôn ngữ
const mockStories: Record<string, Story[]> = {
  vi: mockStoriesVi,
  en: mockStoriesEn,
  ja: mockStoriesJa,
};

export default mockStories;
