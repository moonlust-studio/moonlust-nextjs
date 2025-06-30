// ✅ File: pages/stories.tsx – Đa ngôn ngữ danh sách truyện

import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import mockStories from '../lib/mock/mockStories';
import type { Story } from '@/lib/mock/mockStories';
import Layout from '@/components/Layout';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function StoriesPage() {
  const { locale } = useRouter();
  const lang = (locale as 'vi' | 'en' | 'ja') || 'vi';
  const stories: Story[] = mockStories[lang] || [];

  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>{t('story_list_title')} - Moonlust</title>
        <meta name="description" content={t('story_list_description')} />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">
          {t('story_list_title')}
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={story.cover}
                alt={story.title}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-pink-700">{story.title}</h2>
                <p className="text-sm text-gray-600">{story.genre.join(', ')}</p>
                <p className="text-xs mt-1 text-gray-500">
                  {story.chapters} {t('chapter_unit')} •{' '}
                  {story.status === 'completed' ? t('status_completed') : t('status_ongoing')}
                </p>
                <Link
                  href={`/truyen/${story.slug}`}
                  className="inline-block mt-3 text-sm text-pink-600 hover:underline font-medium"
                >
                  {t('read_now')} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
