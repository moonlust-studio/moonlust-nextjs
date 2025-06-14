// components/TopTruyen.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const topStories = [
  { id: 1, title: 'Cô Thư Ký Bất Trị', chap: 'Chap 20', status: 'Full' },
  { id: 2, title: 'Chồng Cô Giáo Thảo', chap: 'Chap 15', status: 'Đang ra' },
  { id: 3, title: 'Cám Dỗ', chap: 'Chap 10', status: 'Full' },
  { id: 4, title: 'Người Tình Bí Mật', chap: 'Chap 12', status: 'Đang ra' },
];

export default function TopTruyen() {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4 text-pink-700">🔥 Truyện nổi bật</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topStories.map((story) => (
          <Link
            key={story.id}
            href={`/truyen/noi-bat-${story.id}`}
            className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
          >
            <Image
              src="/demo.jpg"
              alt={story.title}
              width={300}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm font-bold text-gray-800 truncate">{story.title}</h3>
              <p className="text-xs text-gray-500">
                {story.chap} - {story.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
