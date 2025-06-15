// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import SubNav from '@/components/SubNav';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <main className="bg-white min-h-screen font-sans text-base antialiased text-gray-800">
      <Head>
        <title>{t('site_title')}</title>
        <meta name="description" content={t('site_description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f472b6" />
      </Head>

      <Header />
      <SubNav />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-lg font-bold text-gray-800">{t('welcome')}</h2>
        <p>{t('intro_text')}</p>
      </section>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
