// ✅ pages/en/truyen/[slug]/chapters/[id].tsx

import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getMockStoryBySlug } from '@/lib/api/stories';
import { getMockChapter, getMockChapterList } from '@/lib/api/chapters';
import mockStories from '@/lib/mock/mockStories';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ChapterPage({ story, chapter, chapterList }: any) {
  if (!chapter || !story) {
    return (
      <main className="text-center py-20">
        <h1 className="text-xl text-red-600 font-semibold">
          Chapter not found.
        </h1>
        <Link href="/en/truyen" className="text-pink-600 underline mt-4 inline-block">
          ← Back to story list
        </Link>
      </main>
    );
  }

  const { id: chapterId, content } = chapter;
  const slug = story.slug;
  const sortedIds = chapterList.map((c: any) => c.id).sort((a: number, b: number) => a - b);
  const currentIndex = sortedIds.indexOf(chapterId);
  const prevId = currentIndex > 0 ? sortedIds[currentIndex - 1] : null;
  const nextId = currentIndex < sortedIds.length - 1 ? sortedIds[currentIndex + 1] : null;

  const pageTitle = `Chapter ${String(chapterId).padStart(2, '0')} – ${story.title} | Moonlust`;

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
          <Link href={`/en/truyen/${slug}`} className="text-sm text-pink-600 underline block mb-2">
            ← Back to story
          </Link>
          <h1 className="text-2xl font-bold text-pink-700">
            Chapter {String(chapterId).padStart(2, '0')}
          </h1>
        </div>

        <article
          className="prose prose-pink max-w-none text-justify leading-loose"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex justify-between items-center mt-12 border-t pt-6 text-sm text-pink-600">
          {prevId ? (
            <Link href={`/en/truyen/${slug}/chapters/${prevId}`} className="hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Link>
          ) : <div />}

          {nextId ? (
            <Link href={`/en/truyen/${slug}/chapters/${nextId}`} className="hover:underline flex items-center gap-1">
              Next
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </main>
    </>
  );
}

ChapterPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const id = Number(params?.id);

  const story = getMockStoryBySlug(slug, 'en');
  const chapter = await getMockChapter(slug, id, 'en');
  const chapterList = getMockChapterList(slug, 'en') || [];

  if (!story || !chapter) return { notFound: true };

  return {
    props: {
      story,
      chapter,
      chapterList,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const lang = 'en';
  const stories = mockStories[lang] || [];

  const paths = stories.flatMap((story) => {
    const chapterCount = story.chapters ?? 0;
    return Array.from({ length: chapterCount }, (_, i) => ({
      params: {
        slug: story.slug,
        id: String(i + 1),
      },
    }));
  });

  return {
    paths,
    fallback: false,
  };
};




