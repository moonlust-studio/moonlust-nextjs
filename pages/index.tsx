import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import mockStories from '../lib/mockStories';
import Header from '@/components/Header';

export default function Home() {
  const { t } = useTranslation('common');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStories = mockStories.filter((story) => {
    const matchCategory = selectedCategory === 'all' || story.genre.includes(selectedCategory);
    const matchSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const latestStories = filteredStories.slice(0, 6);
  const hotStories = filteredStories.slice(6, 12);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{t('meta.site_title')}</title>
        <meta name="description" content={t('meta.site_description')} />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section with CTA + Illustration */}
        <section className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white text-center py-16 px-4 relative overflow-hidden">
          <div className="max-w-5xl mx-auto z-10 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {t('intro.hero_title', 'Chào mừng bạn đến với Moonlust')}
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              {t('intro.hero_text', 'Khám phá những câu chuyện gợi cảm, sâu sắc và đầy cảm xúc.')}
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/stories">
                <span className="px-6 py-2 bg-white text-pink-600 font-semibold rounded-xl shadow hover:bg-pink-100 transition">
                  {t('button.explore', 'Khám phá')}
                </span>
              </Link>
              <Link href="/about">
                <span className="px-6 py-2 border border-white font-semibold rounded-xl hover:bg-white/10 transition">
                  {t('button.learn_more', 'Tìm hiểu thêm')}
                </span>
              </Link>
            </div>
          </div>
          <img
            src="/illustrations/hero.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 bottom-0 w-48 md:w-64 opacity-70 hidden sm:block"
          />
        </section>

        {/* Bộ lọc + Search */}
        <section className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-60"
          >
            <option value="all">{t('filter.all_categories', 'Tất cả thể loại')}</option>
            <option value="Tình cảm">{t('filter.love', 'Tình cảm')}</option>
            <option value="Ngoại tình">{t('filter.cheating', 'Ngoại tình')}</option>
            <option value="Erotic Drama">{t('filter.erotic', 'Erotic Drama')}</option>
            <option value="Người lớn">{t('filter.adult', 'Người lớn')}</option>
          </select>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('filter.search_placeholder', 'Tìm kiếm theo tiêu đề...')}
            className="border rounded px-4 py-2 w-full md:w-80"
          />
        </section>

        {/* Truyện mới cập nhật */}
        <section className="max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-bold mb-4">{t('section.latest', 'Truyện mới cập nhật')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {latestStories.map((story) => (
              <Link href={`/stories/${story.id}`} key={story.id}>
                <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
                  <img
                    src={story.cover}
                    alt={story.title}
                    className="w-full h-40 object-cover"
                    onError={(e) => (e.currentTarget.src = '/placeholder.jpg')}
                  />
                  <div className="p-2">
                    <h3 className="text-sm font-semibold truncate">{story.title}</h3>
                    <p className="text-xs text-gray-500">{t(`status.${story.status}`, story.status)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Truyện hot nhất */}
        <section className="max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-bold mb-4">{t('section.hot', 'Truyện hot nhất')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hotStories.map((story) => (
              <Link href={`/stories/${story.id}`} key={story.id}>
                <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
                  <img
                    src={story.cover}
                    alt={story.title}
                    className="w-full h-40 object-cover"
                    onError={(e) => (e.currentTarget.src = '/placeholder.jpg')}
                  />
                  <div className="p-2">
                    <h3 className="text-sm font-semibold truncate">{story.title}</h3>
                    <p className="text-xs text-gray-500">{t(`status.${story.status}`, story.status)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-pink-50 border-t border-pink-100 text-center py-6 text-sm text-gray-700 mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2 flex flex-col sm:flex-row justify-center gap-6 text-pink-600 font-medium">
            <Link href="/about">{t('footer.about', 'Giới thiệu')}</Link>
            <Link href="/contact">{t('footer.contact', 'Liên hệ')}</Link>
            <Link href="/policy">{t('footer.policy', 'Chính sách')}</Link>
          </div>
          <div className="flex justify-center items-center gap-2 text-xs text-gray-500">
            <img src="/moonlust-logo.png" alt="Moonlust Logo" className="h-6 w-6 rounded-full shadow" />
            <span>© Moonlust 2025. {t('footer.copyright', 'Bản quyền thuộc Moonlust')}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
