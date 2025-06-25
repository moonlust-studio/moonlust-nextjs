// ✅ File: pages/index.tsx – Trang chủ Moonlust tối ưu SEO + i18n
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import mockStories from '@/lib/mock/mockStories';

export default function Home() {
  const { t } = useTranslation('common');
  const { locale = 'vi' } = useRouter();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const stories = mockStories[locale] || [];

  const filteredStories = stories.filter((story) => {
    const matchCategory = selectedCategory === 'all' || story.genre.includes(selectedCategory);
    const matchSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const latestStories = filteredStories.slice(0, 6);
  const hotStories = filteredStories.slice(6, 12);

  return (
    <>
      <Head>
        <title>{t('meta.site_title')}</title>
        <meta name="description" content={t('meta.site_description')} />
        <meta name="keywords" content="truyện người lớn, truyện 18+, truyện gợi cảm, Moonlust, truyện tâm lý" />
        <meta property="og:title" content={t('meta.site_title')} />
        <meta property="og:description" content={t('meta.site_description')} />
        <meta property="og:type" content="website" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">
          {t('intro.hero_title')}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {t('intro.hero_text')}
        </p>

        {/* Bộ lọc và tìm kiếm */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
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

        {/* Truyện mới cập nhật */}
        <section className="mb-10">
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

        {/* Truyện hot */}
        <section>
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

// ✅ Gắn layout để có Header/Footer
Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

// ✅ Dùng i18n đa ngôn ngữ
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
