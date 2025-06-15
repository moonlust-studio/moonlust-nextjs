// components/TruyenMoi.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const truyenList = [
  { slug: 'co-thu-ky-bat-tri', title: 'Cô Thư Ký Bất Trị', chap: '20', status: 'Full', img: '/demo.jpg' },
  { slug: 'chong-co-giao-thao', title: 'Chồng Cô Giáo Thảo', chap: '15', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'cam-do', title: 'Cám Dỗ', chap: '10', status: 'Full', img: '/demo.jpg' },
  { slug: 'nguoi-tinh-bi-mat', title: 'Người Tình Bí Mật', chap: '12', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'co-vo-gia-danh', title: 'Cô Vợ Giả Danh', chap: '15', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'chu-nha-tinh-nghich', title: 'Chủ Nhà Tinh Nghịch', chap: '12', status: 'Đang ra', img: '/demo.jpg' },
];

export default function TruyenMoi() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="py-6">
        <h2 className="text-lg font-bold mb-4 text-pink-700 flex items-center gap-2">
          🔥 Truyện nổi bật
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {truyenList.slice(0, 2).map((truyen, index) => (
            <Link key={index} href={`/truyen/${truyen.slug}`} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
              <Image 
                src={truyen.img} 
                alt={truyen.title} 
                width={300} 
                height={400} 
                className="w-full h-auto"
              />
              <div className="p-2">
                <h3 className="text-sm font-bold text-gray-800 truncate">{truyen.title}</h3>
                <p className="text-xs text-gray-500">Chap {truyen.chap} - {truyen.status}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pt-6 pb-12">
        <h2 className="text-lg font-bold mb-4 text-pink-700 flex items-center gap-2">
          📚 Truyện mới cập nhật
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {truyenList.map((truyen, index) => (
            <Link key={index} href={`/truyen/${truyen.slug}`} className="bg-white rounded shadow hover:shadow-lg transition">
              <Image 
                src={truyen.img} 
                alt={truyen.title} 
                width={300} 
                height={400} 
                className="w-full h-auto rounded-t"
              />
              <div className="p-2">
                <h3 className="text-sm font-bold text-gray-800 truncate">{truyen.title}</h3>
                <p className="text-xs text-gray-500">Chap {truyen.chap} - {truyen.status}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
