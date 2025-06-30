// =============================================
// ✅ File: components/Hero.tsx (Final Version)
// =============================================

import Link from 'next/link';
import { TFunction } from 'i18next'; // ✅ Dùng đúng type từ i18next

interface HeroProps {
  t: TFunction<'common'>;         // ✅ Đúng kiểu mà useTranslation trả về
  locale?: string;                // ✅ Optional nếu muốn dùng
}

export default function Hero({ t, locale }: HeroProps) {
  return (
    <section className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white text-center py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {t('intro.hero_title', 'Chào mừng bạn đến với Moonlust')}
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          {t('intro.hero_text', 'Khám phá những câu chuyện gợi cảm, sâu sắc và đầy cảm xúc.')}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/stories">
            <span className="px-6 py-2 bg-white text-pink-600 font-semibold rounded-xl shadow hover:bg-pink-100 transition">
              {t('button.explore', 'Khám phá')}
            </span>
          </Link>
          <Link href="/about">
            <span className="px-6 py-2 border border-white font-semibold rounded-xl hover:bg-white/10 transition">
              {t('button.learn_more', 'Tìm hiểu thêm')}
            </span>
          </Link>
        </div>
      </div>
      <img
        src="/illustrations/hero.png"
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 w-48 md:w-64 opacity-70 hidden sm:block"
      />
    </section>
  );
}
