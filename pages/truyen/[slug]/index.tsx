//moonlust-nextjs\pages\truyen\[slug]\index.tsx
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getMockStoryBySlug } from '@/lib/api/stories';
import mockStories from '@/lib/mock/mockStories';

type StoryPageProps = {
  story: any;
};

export default function StoryPage({ story }: StoryPageProps) {
  const { t } = useTranslation('common');

  if (!story) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl text-pink-600 font-semibold animate-pulse">
          {t('not_found')}
        </h1>
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

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-pink-700 mb-4 text-center">{story.title}</h1>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {story.cover && (
            <Image
              src={story.cover}
              alt={story.title}
              width={200}
              height={300}
              className="rounded shadow"
            />
          )}
          <div>
            <p className="mb-2">
              <strong>📖 {t('summary')}:</strong> {story.description || story.summary}
            </p>
            <p className="mb-1">
              <strong>🗂 {t('genre')}:</strong> {story.genre.join(', ')}
            </p>
            <p className="mb-1">
              <strong>📌 {t('statusLabel')}:</strong> {t(`status.${story.status}`)}
            </p>
            <p className="mb-1">
              <strong>📚 {t('chapters')}:</strong> {story.chapters}
            </p>

            <div className="mt-6">
              <Link
                href={`/truyen/${story.slug}/toc`}
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 font-medium"
              >
                {t('readFromStart')} →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

StoryPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

// ✅ Static props theo ngôn ngữ
export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const story = getMockStoryBySlug(slug, locale || 'vi');

  return {
    props: {
      ...(await serverSideTranslations(locale || 'vi', ['common'])),
      story,
    },
  };
}

// ✅ Static paths đa ngôn ngữ
// export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
//   const paths = locales!.flatMap((locale) =>
//     (mockStories[locale] || []).map((story) => ({
//       params: { slug: story.slug },
//       locale,
//     }))
//   );

//   return {
//     paths,
//     fallback: false,
//   };
// };
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const { default: mockStories } = await import('@/lib/mock/mockStories');

  const paths =
    locales?.flatMap((locale) =>
      (mockStories[locale] || []).map((story) => ({
        params: { slug: story.slug },
        locale,
      }))
    ) || [];

  console.log('DEBUG index.tsx getStaticPaths:', paths); // 👈 check Vercel log

  return {
    paths,
    fallback: false,
  };
};

