// ✅ File: lib/api/stories.ts – getMockStoryBySlug hỗ trợ đa ngôn ngữ + kiểu Story

import { Story } from '@/lib/types'; // ✅ do ba đang dùng file types.ts chung
import mockStoriesVi from '../mock/mockStories.vi';
import mockStoriesEn from '../mock/mockStories.en';
import mockStoriesJa from '../mock/mockStories.ja';

export function getMockStoryBySlug(slug: string, locale: string = 'vi'): Story | undefined {
  const storiesByLocale: Record<string, Story[]> = {
    vi: mockStoriesVi,
    en: mockStoriesEn,
    ja: mockStoriesJa,
  };

  const stories = storiesByLocale[locale] || mockStoriesVi;
  return stories.find((story) => story.slug === slug);
}
