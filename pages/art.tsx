// ✅ File: pages/art.tsx
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function ArtPage() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>{t('art_page.title')} - Moonlust</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">🎨 {t('art_page.title')}</h1>
        <p className="text-lg leading-relaxed mb-4">{t('art_page.description')}</p>

        {/* Mock image or illustration */}
        <div className="mt-6 shadow rounded-lg overflow-hidden">
          <img src="/illustrations/art.jpg" alt={t('art_page.title')} className="w-full object-cover" />
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-pink-600 hover:underline">
            ← {t('button.back_home')}
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
