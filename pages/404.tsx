import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NotFoundPage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter(); // ⚠️ lấy locale mới

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-[60vh] py-20 px-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">{t('not_found_message')}</p>
      <Link
        href="/"
        locale={locale} // ✅ Đảm bảo link về đúng ngôn ngữ
        className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700"
      >
        {t('button.back_home')}
      </Link>
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

NotFoundPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
