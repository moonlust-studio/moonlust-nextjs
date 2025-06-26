// ✅ File: pages/vi/truyen/[slug]/toc.tsx – Danh sách chương tiếng Việt

import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getMockStoryBySlug } from '@/lib/api/stories';
import { getMockChapterList } from '@/lib/api/chapters';
import mockStories from '@/lib/mock/mockStories';
import { BookOpen } from 'lucide-react';

type ChapterListPageProps = {
  story: any;
  chapterList: { id: number; tag?: string }[];
};

export default function ChapterListPage({ story, chapterList }: ChapterListPageProps) {
  const { t } = useTranslation('common');

  if (!story) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl text-red-600 font-semibold">{t('not_found')}</h1>
        <Link href="/vi/truyen" className="text-pink-600 underline mt-4 inline-block">
          {t('button.back_to_list')}
        </Link>
      </div>
    );
  }

  const pageTitle = `${story.title} – ${t('chapter')} | Moonlust`;
  const description = t('chapter_list_desc', {
    title: story.title,
    count: chapterList.length,
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${story.title}, danh sách chương, Moonlust`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-4 text-center">
          <Link href={`/vi/truyen/${story.slug}`} className="text-pink-600 underline text-sm">
            ← {t('button.back_to_story')}
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          📚 {story.title} – {t('chapter')}
        </h1>

        {chapterList.length > 0 ? (
          <ul className="space-y-3">
            {chapterList.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  href={`/vi/truyen/${story.slug}/chapters/${chapter.id}`}
                  className="group block px-5 py-3 bg-white rounded-2xl border border-pink-200 shadow-md hover:shadow-lg hover:border-pink-400 transition duration-200"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg text-pink-800 group-hover:text-pink-600">
                      <BookOpen className="inline-block w-5 h-5 mr-2 text-pink-400 group-hover:text-pink-600" />
                      {t('chapter')} {String(chapter.id).padStart(2, '0')}
                    </span>
                    {chapter.tag && (
                      <span className="text-xs text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full">
                        {chapter.tag}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">{t('no_chapters')}</p>
        )}
      </main>
    </>
  );
}

ChapterListPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const lang = locale || 'vi';

  const story = getMockStoryBySlug(slug, lang);
  const chapterList = getMockChapterList(slug, lang) || [];

  return {
    props: {
      ...(await serverSideTranslations(lang, ['common'])),
      story,
      chapterList,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const lang = 'vi';
  const stories = mockStories[lang] || [];

  const paths = stories.map((story) => ({
    params: { slug: story.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
