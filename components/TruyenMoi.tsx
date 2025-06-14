// components/TruyenMoi.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TruyenMoi() {
  return (
    <section className="py-6">
      <h2 className="text-xl font-semibold mb-4 text-pink-700">📚 Truyện mới cập nhật</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[1,2,3,4,5,6,7,8,9,10].map((i) => (
          <Link key={i} href={`/truyen/moi-${i}`} className="bg-white rounded shadow hover:shadow-lg transition">
            <Image 
              src="/demo.jpg" 
              alt={`Truyện mới ${i}`} 
              width={300} 
              height={400} 
              className="w-full h-auto rounded-t"
            />
            <div className="p-2">
              <h3 className="text-sm font-bold text-gray-800 truncate">Cô Vợ Giả Danh</h3>
              <p className="text-xs text-gray-500">Chap {i} - Đang ra</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
