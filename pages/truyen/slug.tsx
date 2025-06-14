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
    description: 'Một cô gái trẻ bất ngờ bị ép kết hôn với một người đàn ông xa lạ, và câu chuyện tình cảm éo le bắt đầu...',
    img: '/demo.jpg',
    status: 'Đang ra',
    chapters: [
      { number: 15, title: 'Gặp nhau lần đầu' },
      { number: 14, title: 'Chạm mặt trong đêm' },
      { number: 13, title: 'Bí mật được tiết lộ' },
    ],
  };

  return (
    <main className="bg-[#fff5f7] min-h-screen font-sans text-base text-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <Image src={truyen.img} alt={truyen.title} width={300} height={400} className="rounded" />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-bold text-pink-700 mb-2">{truyen.title}</h1>
            <p className="text-sm text-gray-600 mb-4">{truyen.description}</p>
            <p className="text-sm font-semibold text-gray-500 mb-2">Tình trạng: <span className="text-pink-600">{truyen.status}</span></p>
            <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">📖 Danh sách chương:</h2>
            <ul className="list-disc ml-5 space-y-1">
              {truyen.chapters.map((chap) => (
                <li key={chap.number}>
                  <Link href={`#`} className="text-pink-600 hover:underline">
                    Chương {chap.number}: {chap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
