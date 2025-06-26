// ✅ File: lib/api/stories.ts – getMockStoryBySlug hỗ trợ đa ngôn ngữ

import mockStoriesVi from '../mock/mockStories.vi';
import mockStoriesEn from '../mock/mockStories.en';
import mockStoriesJa from '../mock/mockStories.ja';

export function getMockStoryBySlug(slug: string, locale: string = 'vi') {
  const storiesByLocale = {
    vi: mockStoriesVi,
    en: mockStoriesEn,
    ja: mockStoriesJa,
  };

  const stories = storiesByLocale[locale] || mockStoriesVi;
  return stories.find((story) => story.slug === slug);
}
