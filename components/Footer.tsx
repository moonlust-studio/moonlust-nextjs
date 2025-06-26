import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t, ready } = useTranslation('common');
  if (!ready) return null;

  return (
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
  );
}
