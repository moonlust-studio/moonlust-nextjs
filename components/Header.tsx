'use client';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Globe } from 'lucide-react';

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const handleChange = (newLocale: string) => {
    if (newLocale !== locale) {
      router.push(asPath, asPath, { locale: newLocale });
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <img src="/moonlust-logo.png" alt="Moonlust Logo" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/">{t('menu.home')}</Link>
            <Link href="/adult">{t('menu.adult')}</Link>
            <Link href="/art">{t('menu.art')}</Link>
            <Link href="/health">{t('menu.health')}</Link>
            <Link href="/languages">{t('menu.multilang')}</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
