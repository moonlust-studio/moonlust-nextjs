// components/TopTruyen.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TopTruyen() {
  const topStories = [
    {
      id: 1,
      title: 'Cô Thư Ký Bất Trị',
      chapter: 'Chap 20 - Full',
      image: '/demo.jpg',
      slug: '/truyen/co-thu-ky-bat-tri'
    },
    {
      id: 2,
      title: 'Người Vợ Giả Tạo',
      chapter: 'Chap 18 - Full',
      image: '/demo.jpg',
      slug: '/truyen/nguoi-vo-gia-tao'
    },
    {
      id: 3,
      title: 'Ông Chồng Cuồng Ghen',
      chapter: 'Chap 25 - Đang ra',
      image: '/demo.jpg',
      slug: '/truyen/ong-chong-cuong-ghen'
    },
    {
      id: 4,
      title: 'Trò Chơi Hôn Nhân',
      chapter: 'Chap 12 - Full',
      image: '/demo.jpg',
      slug: '/truyen/tro-choi-hon-nhan'
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-pink-700 mb-4">🔥 Truyện nổi bật</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topStories.map((story) => (
          <Link key={story.id} href={story.slug} className="bg-white rounded shadow hover:shadow-lg transition">
            <Image src={story.image} alt={story.title} width={300} height={400} className="w-full h-auto rounded-t" />
            <div className="p-2">
              <h3 className="text-sm font-bold text-gray-700 truncate">{story.title}</h3>
              <p className="text-xs text-gray-500">{story.chapter}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
