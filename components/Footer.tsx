// ✅ File: components/Footer.tsx – đã fix Hydration + dịch đúng

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { t, ready } = useTranslation('common');
  const { isReady } = useRouter();
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (ready && isReady) {
      setCanRender(true);
    }
  }, [ready, isReady]);

  // ✅ Tránh hydration mismatch
  if (!canRender) return null;

  return (
    <footer className="w-full bg-pink-50 border-t border-pink-100 text-center py-6 text-sm text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-2 flex flex-col sm:flex-row justify-center gap-6 text-pink-600 font-medium">
          <Link href="/about">{t('footer.about')}</Link>
          <Link href="/contact">{t('footer.contact')}</Link>
          <Link href="/policy">{t('footer.policy')}</Link>
        </div>
        <div className="flex justify-center items-center gap-2 text-xs text-gray-500">
          <img src="/moonlust-logo.png" alt="Moonlust Logo" className="h-6 w-6 rounded-full shadow" />
          <span>© Moonlust 2025. {t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
}
