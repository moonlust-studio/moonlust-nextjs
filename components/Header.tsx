'use client';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  const { t, ready } = useTranslation('common');
  const [showLangs, setShowLangs] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  if (!ready) return null;

  const handleChange = (newLocale: string) => {
    setShowLangs(false);
    if (newLocale !== locale) {
      router.push(asPath, asPath, { locale: newLocale });
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/moonlust-logo.png" alt="Moonlust Logo" className="h-8 w-auto rounded-full shadow" />
          <span className="text-lg font-semibold">Moonlust</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-5 text-sm font-medium">
          <Link href="/">{t('menu.home')}</Link>
          <Link href="/stories">{t('menu.adult')}</Link>
          <Link href="/art">{t('menu.art')}</Link>
          <Link href="/health">{t('menu.health')}</Link>
          <Link href="/languages">{t('menu.multilang')}</Link>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3 relative">
          <button onClick={() => setShowLangs(!showLangs)} className="p-2 rounded-full hover:bg-white/20">
            <Globe className="w-5 h-5" />
          </button>

          {showLangs && (
            <div className="absolute top-10 right-0 bg-white text-pink-600 rounded shadow p-2 z-50 flex gap-2">
              {locales?.map((lng) => (
                <button
                  key={lng}
                  onClick={() => handleChange(lng)}
                  className={`px-2 py-1 rounded-full text-sm font-bold border ${
                    locale === lng
                      ? 'bg-pink-600 text-white border-pink-600'
                      : 'border-pink-300 hover:bg-pink-50'
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          )}

          <button className="px-4 py-1 bg-white text-pink-600 rounded-xl text-sm font-semibold">
            {t('button.login')}
          </button>
          <button className="px-4 py-1 bg-white text-pink-600 rounded-xl text-sm font-semibold">
            {t('button.register')}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-white">
            {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      {showMobileMenu && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/">{t('menu.home')}</Link>
          <Link href="/stories">{t('menu.adult')}</Link>
          <Link href="/art">{t('menu.art')}</Link>
          <Link href="/health">{t('menu.health')}</Link>
          <Link href="/languages">{t('menu.multilang')}</Link>

          <div className="flex gap-2 mt-2">
            <button className="flex-1 bg-white text-pink-600 px-3 py-1 rounded-xl font-semibold">
              {t('button.login')}
            </button>
            <button className="flex-1 bg-white text-pink-600 px-3 py-1 rounded-xl font-semibold">
              {t('button.register')}
            </button>
          </div>

          <div className="flex gap-2 mt-2">
            {locales?.map((lng) => (
              <button
                key={lng}
                onClick={() => handleChange(lng)}
                className={`flex-1 px-2 py-1 rounded-full text-sm font-bold border ${
                  locale === lng
                    ? 'bg-pink-600 text-white border-pink-600'
                    : 'border-pink-300 text-pink-600 hover:bg-pink-50'
                }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
