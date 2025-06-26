// ✅ File: pages/vi/index.tsx – Trang chủ Moonlust tiếng Việt
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import mockStories from '@/lib/mock/mockStories';
import { Story } from '@/lib/types';

export default function HomePage() {
  const { t } = useTranslation('common');
  const stories: Story[] = mockStories['vi'] || [];

  return (
    <>
      <Head>
        <title>{t('meta.site_title')}</title>
        <meta name="description" content={t('meta.site_description')} />
        <meta name="keywords" content="truyện người lớn, truyện ngoại tình, truyện cảm xúc, Moonlust" />
        <meta property="og:title" content={t('meta.site_title')} />
        <meta property="og:description" content={t('meta.site_description')} />
        <meta property="og:type" content="website" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          {t('intro.hero_title')}
        </h1>
        <p className="text-center text-pink-600 mb-10">
          {t('intro.hero_text')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/vi/truyen/${story.slug}`}
              className="border border-pink-200 rounded-xl p-4 hover:shadow-lg transition bg-white"
            >
              <h2 className="text-xl font-semibold text-pink-700 mb-2">{story.title}</h2>

              {/* Tóm tắt nếu có */}
              {story.summary && (
                <p className="text-sm text-gray-600 line-clamp-3">{story.summary}</p>
              )}

              {/* Trạng thái + số chương */}
              <p className="mt-2 text-xs text-gray-400">
                {t('statusLabel')}: {t(`status.${story.status}`)} • {t('chapters')}: {story.chapters}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale || 'vi';
  return {
    props: {
      ...(await serverSideTranslations(lang, ['common'])),
    },
  };
};
