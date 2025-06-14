// components/SubNav.tsx
import React from 'react';
import Link from 'next/link';
import { Flame, Clock3, Eye, Star } from 'lucide-react';

export default function SubNav() {
  return (
    <div className="bg-pink-50 border-t border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-center gap-4 text-sm">
        <Link href="/hot" className="hover:text-pink-600 flex items-center gap-1">
          <Flame size={14} /> Hot trong tuần
        </Link>
        <Link href="/moi-cap-nhat" className="hover:text-pink-600 flex items-center gap-1">
          <Clock3 size={14} /> Mới cập nhật
        </Link>
        <Link href="/nhieu-doc-nhat" className="hover:text-pink-600 flex items-center gap-1">
          <Eye size={14} /> Nhiều người đọc
        </Link>
        <Link href="/duoc-yeu-thich" className="hover:text-pink-600 flex items-center gap-1">
          <Star size={14} /> Được yêu thích
        </Link>
      </div>
    </div>
  );
}
