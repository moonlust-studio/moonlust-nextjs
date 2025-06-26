// ✅ FILE: pages/vi/truyen/[slug]/chapters/[id].tsx – phiên bản refactor static export

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Layout from '@/components/Layout';
import { getMockStoryBySlug } from '@/lib/api/stories';
import { getMockChapter, getMockChapterList } from '@/lib/api/chapters';
import mockStories from '@/lib/mock/mockStories';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ChapterPage({ story, chapter, chapterList }: any) {
  const [hydrated, setHydrated] = useState(false); // ✅ Tránh lỗi mismatch giữa SSR & CSR

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  if (!chapter || !story) {
    return (
      <main className="text-center py-20">
        <h1 className="text-xl text-red-600 font-semibold">Không tìm thấy chương truyện</h1>
        <Link href="/vi/truyen" className="text-pink-600 underline mt-4 inline-block">
          ← Quay lại danh sách truyện
        </Link>
      </main>
    );
  }

  const { id: chapterId, content } = chapter;
  const slug = story.slug;
  const sortedIds = chapterList.map((c: any) => c.id).sort((a, b) => a - b);
  const currentIndex = sortedIds.indexOf(chapterId);
  const prevId = currentIndex > 0 ? sortedIds[currentIndex - 1] : null;
  const nextId = currentIndex < sortedIds.length - 1 ? sortedIds[currentIndex + 1] : null;

  const pageTitle = `Chương ${String(chapterId).padStart(2, '0')} – ${story.title} | Moonlust`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={story.description || story.summary || ''} />
        <meta name="keywords" content={`${story.title}, chương ${chapterId}, Moonlust`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={story.description || story.summary || ''} />
        <meta property="og:type" content="article" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10" suppressHydrationWarning>
        <div className="text-center mb-6">
          <Link href={`/vi/truyen/${slug}`} className="text-sm text-pink-600 underline block mb-2">
            ← Quay lại truyện
          </Link>
          <h1 className="text-2xl font-bold text-pink-700">
            Chương {String(chapterId).padStart(2, '0')}
          </h1>
        </div>

        <article
          className="prose prose-pink max-w-none text-justify leading-loose"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex justify-between items-center mt-12 border-t pt-6 text-sm text-pink-600">
          {prevId ? (
            <Link href={`/vi/truyen/${slug}/chapters/${prevId}`} className="hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Chương trước
            </Link>
          ) : <div />}

          {nextId ? (
            <Link href={`/vi/truyen/${slug}/chapters/${nextId}`} className="hover:underline flex items-center gap-1">
              Chương sau
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

// ✅ Static export-compatible getStaticProps
export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const id = Number(params?.id);
  const lang = 'vi'; // Do nằm trong thư mục /vi/

  const story = getMockStoryBySlug(slug, lang);
  const chapter = await getMockChapter(slug, id, lang);
  const chapterList = getMockChapterList(slug, lang) || [];

  if (!story || !chapter) return { notFound: true };

  return {
    props: {
      story,
      chapter,
      chapterList,
    },
  };
}

// ✅ getStaticPaths cho static export
export const getStaticPaths: GetStaticPaths = async () => {
  const lang = 'vi';
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
