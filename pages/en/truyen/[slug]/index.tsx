// ✅ File: pages/en/truyen/[slug]/index.tsx – Story Info page for English

import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getMockStoryBySlug } from '@/lib/api/stories';
import mockStories from '@/lib/mock/mockStories';

type StoryPageProps = {
  story: any;
};

export default function StoryPage({ story }: StoryPageProps) {
  if (!story) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl text-pink-600 font-semibold animate-pulse">
          Story not found.
        </h1>
      </div>
    );
  }

  const pageTitle = `${story.title} – Story Info | Moonlust`;
  const description =
    story.description || story.summary || 'A sensual and emotional adult fiction story from Moonlust.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${story.title}, Moonlust, erotic story`} />
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
              alt={story.title || 'Cover'}
              width={200}
              height={300}
              className="rounded shadow"
            />
          )}
          <div>
            <p className="mb-2">
              <strong>📖 Summary:</strong> {story.description || story.summary}
            </p>
            <p className="mb-1">
              <strong>🗂 Genre:</strong> {(story.genre || []).join(', ')}
            </p>
            <p className="mb-1">
              <strong>📌 Status:</strong> {story.status === 'completed' ? 'Completed' : 'Ongoing'}
            </p>
            <p className="mb-1">
              <strong>📚 Chapters:</strong> {story.chapters}
            </p>

            <div className="mt-6">
              <Link
                href={`/en/truyen/${story.slug}/toc`}
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 font-medium"
              >
                Read from the beginning →
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

// ✅ Static props: Load story content for the English locale
export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const story = getMockStoryBySlug(slug, 'en');

  return {
    props: {
      story,
    },
  };
}

// ✅ Static paths: Generate paths for English stories
export const getStaticPaths: GetStaticPaths = async () => {
  const lang = 'en';
  const stories = mockStories[lang] || [];

  const paths = stories.map((story) => ({
    params: { slug: story.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
