// components/SubNav.tsx
import React from 'react';
import Link from 'next/link';

export default function SubNav() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-col md:flex-row justify-between items-center py-2">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-semibold text-gray-700 mb-2 md:mb-0">
          <Link href="#">NGHỆ THUẬT YÊU</Link>
          <Link href="#">SỨC KHỎE TÌNH DỤC</Link>
        </div>
        <div className="flex gap-2">
          <button className="border border-gray-400 px-4 py-1 rounded-full text-sm">Đăng nhập</button>
          <button className="border border-gray-400 px-4 py-1 rounded-full text-sm">Đăng Ký</button>
        </div>
      </div>
    </nav>
  );
}