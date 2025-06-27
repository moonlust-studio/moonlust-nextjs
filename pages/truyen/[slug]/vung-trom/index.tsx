// ✅ File: pages/truyen/vung-trom/index.tsx
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function VungTromPage() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>{t('vungtrom_meta_title')}</title>
        <meta name="description" content={t('vungtrom_meta_description')} />
      </Head>
      <div className="max-w-2xl mx-auto text-center py-12 px-4">
        <h1 className="text-2xl font-semibold mb-4">{t('coming_soon_title')}</h1>
        <p className="text-lg text-gray-700 mb-6">{t('coming_soon_story')}</p>
        <Link href="/" className="text-blue-600 hover:underline">
          {t('back_to_home')}
        </Link>
      </div>
    </Layout>
  );
}
