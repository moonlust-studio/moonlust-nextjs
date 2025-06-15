// ✅ FILE: pages/index.tsx
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('meta.site_title')}</title>
        <meta name="description" content={t('meta.site_description')} />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-gray-800 p-6">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {t('intro.welcome')}
        </h1>
        <p className="text-lg max-w-xl text-center">
          {t('intro.text')}
        </p>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}