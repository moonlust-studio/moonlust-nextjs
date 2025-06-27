// ✅ File: pages/health.tsx
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/Layout';

export default function HealthPage() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>{t('health_page.title')} - Moonlust</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">💞 {t('health_page.title')}</h1>
        <p className="text-lg leading-relaxed">{t('health_page.description')}</p>
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
