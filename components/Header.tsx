// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { Home, BookOpen, Sparkles, BookCheck, Info } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/">
          <span className="text-2xl font-bold text-pink-600">Moonlust</span>
        </Link>
        <nav className="space-x-4 text-sm flex items-center">
          <Link href="/" className="hover:text-pink-600 flex items-center gap-1 transition-colors duration-200">
            <Home size={16} /> Trang chủ
          </Link>
          <Link href="/the-loai" className="hover:text-pink-600 flex items-center gap-1 transition-colors duration-200">
            <BookOpen size={16} /> Thể loại
          </Link>
          <Link href="/truyen-moi" className="hover:text-pink-600 flex items-center gap-1 transition-colors duration-200">
            <Sparkles size={16} /> Truyện mới
          </Link>
          <Link href="/truyen-full" className="hover:text-pink-600 flex items-center gap-1 transition-colors duration-200">
            <BookCheck size={16} /> Truyện full
          </Link>
          <Link href="/gioi-thieu" className="hover:text-pink-600 flex items-center gap-1 transition-colors duration-200">
            <Info size={16} /> Giới thiệu
          </Link>
        </nav>
      </div>
    </header>
  );
}
