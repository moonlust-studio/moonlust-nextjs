'use client';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-pink-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-center text-pink-700">
        <p>&copy; 2025 Moonlust. {t('footer.rights')}</p>
        <div className="mt-2 space-x-4">
          <Link href="/terms" className="hover:underline">
            {t('footer.terms')}
          </Link>
          <Link href="/privacy" className="hover:underline">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
