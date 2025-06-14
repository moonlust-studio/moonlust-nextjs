// components/TruyenMoi.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const truyenList = [
  { slug: 'co-vo-gia-danh', title: 'Cô Vợ Giả Danh', chap: '15', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'chu-nha-tinh-nghich', title: 'Chủ Nhà Tinh Nghịch', chap: '12', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'nu-sinh-heo-dot', title: 'Nữ Sinh Héo Dớt', chap: '20', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'co-giao-thao', title: 'Cô Giáo Thảo', chap: '18', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'vo-sinh-tinh-dich', title: 'Vô Sinh Tình Dịch', chap: '21', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'em-dau-kho-do', title: 'Em Dâu Khó Đỡ', chap: '10', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'chong-cay-doc', title: 'Chồng Cay Độc', chap: '14', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'ong-hang-xom', title: 'Ông Hàng Xóm', chap: '22', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'cong-chua-thao', title: 'Công Chúa Thảo', chap: '25', status: 'Đang ra', img: '/demo.jpg' },
  { slug: 'duong-ve-nha', title: 'Đường Về Nhà', chap: '19', status: 'Đang ra', img: '/demo.jpg' },
];

export default function TruyenMoi() {
  return (
    <section className="py-6">
      <h2 className="text-xl font-semibold mb-4 text-pink-700">📚 Truyện mới cập nhật</h2>
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
  );
}
