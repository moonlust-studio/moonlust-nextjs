
// pages/truyen/[slug].tsx
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function TruyenDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  // 🔧 Dữ liệu giả định – sau này sẽ fetch từ API hoặc DB
  const truyen = {
    title: 'Cô Vợ Giả Danh',
    description: 'Một cô gái trẻ bất ngờ bị ép kết hôn với một người đàn ông xa lạ, và câu chuyện tình cảm éo le bắt đầu.',
    img: '/demo.jpg',
    chapters: [
      { number: 15, title: 'Chương 15 - Định mệnh' },
      { number: 14, title: 'Chương 14 - Giao ước' },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-pink-700 mb-2">{truyen.title}</h1>
      <Image src={truyen.img} alt={truyen.title} width={600} height={400} className="rounded mb-4" />
      <p className="text-gray-700 mb-6">{truyen.description}</p>
      <h2 className="text-lg font-semibold mb-2">📖 Các chương gần nhất:</h2>
      <ul className="list-disc pl-5 text-sm text-blue-600">
        {truyen.chapters.map((chap) => (
          <li key={chap.number}>
            <Link href={'#'}>{chap.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
