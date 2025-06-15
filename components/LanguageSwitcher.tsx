// components/LanguageSwitcher.tsx
import { useRouter } from 'next/router';
import { Globe } from 'lucide-react';
import React from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const handleChange = (newLocale: string) => {
    if (newLocale !== locale) {
      router.push(asPath, asPath, { locale: newLocale });
    }
  };

  return (
    <div className="relative flex items-center gap-1">
      <Globe size={18} className="text-white" />
      <select
        onChange={(e) => handleChange(e.target.value)}
        value={locale}
        className="rounded-full border border-white bg-white text-pink-600 px-3 py-1 text-sm font-medium hover:bg-pink-100 transition appearance-none"
        style={{ minWidth: '4rem' }}
      >
        {locales?.map((lng) => (
          <option key={lng} value={lng}>
            {lng.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;