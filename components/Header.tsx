// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-600 to-orange-400 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/banner.png" alt="Moonlust Logo" width={160} height={60} className="object-contain" />
        </Link>

        {/* Main Nav */}
        <nav className="flex flex-wrap justify-center md:justify-end items-center gap-6 font-semibold text-sm">
          <Link href="/" className="hover:underline">Trang Chủ</Link>
          <Link href="/truyen-nguoi-lon" className="hover:underline">Truyện Người Lớn</Link>
          <Link href="/nghe-thuat-yeu" className="hover:underline">Nghệ Thuật Yêu</Link>
          <Link href="/da-ngon-ngu" className="hover:underline">Đa Ngôn Ngữ</Link>

          {/* Search Icon */}
          <Link href="/tim-truyen" className="rounded-full bg-white text-pink-600 p-2 hover:bg-pink-100 transition">🔍</Link>

          {/* Global Button */}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}