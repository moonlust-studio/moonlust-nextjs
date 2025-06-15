// components/TopStories.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const stories = [
  {
    id: 1,
    title: 'Cô Thư Ký Bất Trị',
    img: '/demo.jpg',
    updated: 'Chap 20 - Full',
  },
  {
    id: 2,
    title: 'Chồng Cô Giáo Tháo',
    img: '/demo.jpg',
    updated: 'Chap 15 - Đang ra',
  },
  {
    id: 3,
    title: 'Cám Dỗ',
    img: '/demo.jpg',
    updated: 'Chap 10 - Full',
  },
];

export default function TopStories() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">🔥 Trủyện nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Link href={`/truyen/${story.id}`} key={story.id} className="block">
              <div className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
                <Image src={story.img} alt={story.title} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-1">{story.title}</h3>
                  <p className="text-xs text-gray-500">{story.updated}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
