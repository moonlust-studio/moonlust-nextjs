// ✅ File: pages/index.tsx – Trang chủ Moonlust dùng i18n client-side + fix SSR + polished UI

import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import mockStories from '@/lib/mock/mockStories';

export default function Home() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (router.isReady) setIsReady(true);
  }, [router.isReady]);

  const locale = router.locale || 'vi';
  const stories = useMemo(() => (isReady ? mockStories[locale] || [] : []), [isReady, locale]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const matchCategory = selectedCategory === 'all' || story.genre.includes(selectedCategory);
      const matchSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [stories, selectedCategory, searchTerm]);

  const latestStories = filteredStories.slice(0, 6);
  const hotStories = filteredStories.slice(6, 12);

  if (!isReady) return null;

  return (
    <>
      <Head>
        <title>Moonlust – {t('meta.site_title')}</title>
        <meta name="description" content={t('meta.site_description')} />
        <meta name="keywords" content="truyện người lớn, truyện 18+, truyện gợi cảm, Moonlust, truyện tâm lý" />
        <meta property="og:title" content={t('meta.site_title')} />
        <meta property="og:description" content={t('meta.site_description')} />
        <meta property="og:type" content="website" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-20 pt-32">
        {/* ✅ HERO SECTION – Moonlust kế hoạch cấp 3 */}
<section className="text-center max-w-3xl mx-auto mb-12">
  <p className="text-sm italic text-gray-500 mb-2">
    “Where desire meets emotion, and stories leave a mark...”
  </p>
  <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-5 drop-shadow-sm">
    Moonlust
  </h1>
  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
    {t('meta.site_description')}
  </p>
  <div className="mt-8">
    <Link
  href="/truyen/vang-chong"
  className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
>
  {t('hero.cta_featured')}
</Link>
  </div>
</section>


        {/* 🔁 BỎ PHẦN CŨ – BUTTON KHÔNG LIÊN KẾT */}
        {/*
        <div className="mt-6 text-center">
          <Link
            href="/truyen/vang-chong"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
          >
            {t('readFromStart')} →
          </Link>
        </div>
        */}

        {/* ✅ FILTER BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mt-10 w-full">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="all">{t('filter.all_categories')}</option>
            {[...new Set(stories.flatMap((s) => s.genre))].map((g) => (
              <option key={g as string} value={g as string}>{g as string}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder={t('filter.search_placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-3 py-2 w-full md:w-64"
          />
        </div>

        {/* ✅ TRUYỆN MỚI */}
        <section className="max-w-5xl mx-auto w-full mt-10">
          <h2 className="text-xl font-semibold text-pink-700 mb-4">{t('section.latest')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {latestStories.map((story) => (
              <Link
                key={story.slug}
                href={`/truyen/${story.slug}`}
                className="bg-white rounded shadow hover:shadow-md transition"
              >
                <img src={story.cover} alt={story.title} className="w-full h-48 object-cover rounded-t" />
                <div className="p-3">
                  <h3 className="font-semibold text-pink-700">{story.title}</h3>
                  <p className="text-xs text-gray-500">{story.genre.join(', ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ✅ TRUYỆN HOT */}
        <section className="max-w-5xl mx-auto w-full mt-12">
          <h2 className="text-xl font-semibold text-pink-700 mb-4">{t('section.hot')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {hotStories.map((story) => (
              <Link
                key={story.slug}
                href={`/truyen/${story.slug}`}
                className="bg-white rounded shadow hover:shadow-md transition"
              >
                <img src={story.cover} alt={story.title} className="w-full h-48 object-cover rounded-t" />
                <div className="p-3">
                  <h3 className="font-semibold text-pink-700">{story.title}</h3>
                  <p className="text-xs text-gray-500">{story.genre.join(', ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
    },
  };
};
