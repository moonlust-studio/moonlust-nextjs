//moonlust-nextjs\pages\truyen\[slug]\chapters\[id].tsx
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getMockStoryBySlug } from '@/lib/api/stories';
import { getMockChapter, getMockChapterList } from '@/lib/api/chapters';
import mockStories from '@/lib/mock/mockStories';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ChapterPage({ story, chapter, chapterList }) {
  const { t } = useTranslation('common');

  if (!story || !chapter) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl text-red-600 font-semibold">{t('not_found')}</h1>
        <Link href="/truyen" className="text-pink-600 underline mt-4 inline-block">
          {t('button.back_to_list')}
        </Link>
      </div>
    );
  }

  const { id: chapterId, content } = chapter;
  const slug = story.slug;

  const sortedIds = chapterList.map((c) => c.id).sort((a, b) => a - b);
  const currentIndex = sortedIds.indexOf(chapterId);
  const prevId = currentIndex > 0 ? sortedIds[currentIndex - 1] : null;
  const nextId = currentIndex < sortedIds.length - 1 ? sortedIds[currentIndex + 1] : null;

  const pageTitle = `${t('chapter')} ${chapterId} – ${story.title} | Moonlust`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={story.description || story.summary} />
        <meta name="keywords" content={`${story.title}, chapter ${chapterId}, Moonlust`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={story.description || story.summary} />
        <meta property="og:type" content="article" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center mb-6">
          <Link href={`/truyen/${slug}`} className="text-sm text-pink-600 underline mb-2 block">
            ← {t('button.back_to_story')}
          </Link>
          <h1 className="text-2xl font-bold text-pink-700">
            {t('chapter')} {String(chapterId).padStart(2, '0')}
          </h1>
        </div>

        <article
          className="prose prose-pink max-w-none text-justify leading-loose"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex justify-between items-center mt-12 border-t pt-6 text-sm text-pink-600">
          {prevId ? (
            <Link
              href={`/truyen/${slug}/chapters/${prevId}`}
              className="hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> {t('nav.prev')}
            </Link>
          ) : (
            <div />
          )}

          {nextId ? (
            <Link
              href={`/truyen/${slug}/chapters/${nextId}`}
              className="hover:underline flex items-center gap-1"
            >
              {t('nav.next')} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </>
  );
}

ChapterPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ✅ Dữ liệu props chương
export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const id = Number(params?.id);
  const lang = locale || 'vi';

  const story = getMockStoryBySlug(slug, lang);
  const chapter = await getMockChapter(slug, id, lang);
  const chapterList = getMockChapterList(slug, lang) || [];

  return {
    props: {
      ...(await serverSideTranslations(lang, ['common'])),
      story,
      chapter,
      chapterList,
    },
  };
}

// ✅ Danh sách đường dẫn chương truyện cho từng ngôn ngữ
// export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
//   const paths =
//     locales?.flatMap((locale) =>
//       (mockStories[locale] || []).flatMap((story) =>
//         Array.from({ length: story.chapters || 1 }, (_, i) => ({
//           params: { slug: story.slug, id: String(i + 1) },
//           locale,
//         }))
//       )
//     ) || [];

//   return {
//     paths,
//     fallback: false,
//   };
// };
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: { params: { slug: string; id: string }; locale: string }[] = [];

  for (const locale of locales || []) {
    const stories = mockStories[locale];

    if (stories && Array.isArray(stories)) {
      for (const story of stories) {
        for (let i = 1; i <= story.chapters; i++) {
          paths.push({
            params: { slug: story.slug, id: i.toString() },
            locale,
          });
        }
      }
    }
  }

  console.log('[🧩 getStaticPaths for chapters]', JSON.stringify(paths, null, 2));

  return {
    paths,
    fallback: false,
  };
};

