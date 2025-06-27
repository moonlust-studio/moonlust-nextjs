// ✅ Gộp chi tiết truyện + danh sách chương – chuẩn UX hiện đại
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getMockStoryBySlug } from '@/lib/api/stories';
import { getMockChapterList } from '@/lib/api/chapters';
import mockStories from '@/lib/mock/mockStories';

type StoryPageProps = {
  story: any;
  chapters: { id: number }[];
};

export default function StoryPage({ story, chapters }: StoryPageProps) {
  const { t } = useTranslation('common');

  if (!story) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl text-pink-600 font-semibold animate-pulse">{t('not_found')}</h1>
      </div>
    );
  }

  const pageTitle = `${story.title} – ${t('storyInfo')} | Moonlust`;
  const description = story.description || story.summary || t('defaultStoryDescription');

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${story.title}, Moonlust, truyện người lớn`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* ✅ Chi tiết truyện */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
          <Image
            src={story.cover}
            alt={story.title}
            width={220}
            height={320}
            className="rounded shadow w-full md:w-52 object-cover"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-pink-700 mb-2">{story.title}</h1>
            <p className="text-sm text-gray-500 mb-1">{story.genre.join(', ')}</p>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
            <p className="text-xs text-gray-400 mt-2">
              {t('statusLabel')}: {t(`status.${story.status}`)} • {chapters.length} {t('chapters')}
            </p>
          </div>
        </div>

        {/* ✅ Danh sách chương (ẩn tiêu đề, giữ chân độc giả) */}
        <section>
          <h2 className="text-lg font-semibold text-pink-600 mb-3">
            {t('chapters')} ({chapters.length})
          </h2>
          <div className="rounded border border-pink-100 divide-y max-h-[400px] overflow-y-auto">
            {chapters.map((ch) => (
              <Link
                key={ch.id}
                href={`/truyen/${story.slug}/chapters/${ch.id}`}
                className="block px-5 py-3 hover:bg-pink-50 text-sm transition-all"
              >
                {t('chapter')} {ch.id}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

StoryPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

// ✅ Static props theo ngôn ngữ + chapter list
export const getStaticProps: GetStaticProps = async ({ locale, params }: GetStaticPropsContext) => {
  const slug = params?.slug as string;
  const usedLocale = locale || 'vi';

  const story = getMockStoryBySlug(slug, usedLocale);
  const chapters = getMockChapterList(slug, usedLocale);

  if (!story) {
    console.warn(`[❌ NOT FOUND] story not found for locale="${usedLocale}" slug="${slug}"`);
    return { notFound: true };
  }

  return {
    props: {
      ...(await serverSideTranslations(usedLocale, ['common'])),
      story,
      chapters,
    },
  };
};

// ✅ Static paths đa ngôn ngữ
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: { params: { slug: string }; locale: string }[] = [];

  for (const locale of locales || []) {
    const stories = mockStories[locale];
    if (!stories) continue;

    for (const story of stories) {
      paths.push({ params: { slug: story.slug }, locale });
    }
  }

  return {
    paths,
    fallback: false,
  };
};
