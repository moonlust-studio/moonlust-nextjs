'use client';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-pink-600 font-bold text-xl">
          Moonlust
        </Link>
        <nav className="space-x-4 text-sm">
          <Link href="/truyen" className="text-gray-700 hover:text-pink-600">
            {t('menu.stories')}
          </Link>
          <Link href="/gioi-thieu" className="text-gray-700 hover:text-pink-600">
            {t('menu.about')}
          </Link>
          <Link href="/lien-he" className="text-gray-700 hover:text-pink-600">
            {t('menu.contact')}
          </Link>
        </nav>
      </div>
    </header>
  );
}
