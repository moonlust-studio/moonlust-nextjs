// pages/index.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link href="/">
            <span className="text-2xl font-bold text-pink-600">Moonlust</span>
          </Link>
          <nav className="space-x-4">
            <Link href="/" className="hover:text-pink-600">Trang chủ</Link>
            <Link href="/the-loai" className="hover:text-pink-600">Thể loại</Link>
            <Link href="/truyen-moi" className="hover:text-pink-600">Truyện mới</Link>
            <Link href="/truyen-full" className="hover:text-pink-600">Truyện full</Link>
            <Link href="/gioi-thieu" className="hover:text-pink-600">Giới thiệu</Link>
          </nav>
        </div>
      </header>

      {/* HOT SECTION */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4 text-pink-700">🔥 Truyện nổi bật</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <Link key={i} href={`/truyen/noi-bat-${i}`}
                className="bg-gray-50 rounded shadow hover:shadow-lg transition">
                <Image src="/demo.jpg" alt="Hot" width={300} height={400} className="w-full h-auto rounded-t" />
                <div className="p-2">
                  <h3 className="text-sm font-bold text-gray-700">Cô Thư Ký Bất Trị</h3>
                  <p className="text-xs text-gray-500">Chap 20 - Full</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUYỆN MỚI CẬP NHẬT */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4 text-pink-700">📚 Truyện mới cập nhật</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1,2,3,4,5,6,7,8,9,10].map((i) => (
              <Link key={i} href={`/truyen/moi-${i}`}
                className="bg-white rounded shadow hover:shadow-lg">
                <Image src="/demo.jpg" alt="Truyện mới" width={300} height={400} className="w-full h-auto rounded-t" />
                <div className="p-2">
                  <h3 className="text-sm font-bold text-gray-800 truncate">Chồng Cô Giáo Thảo</h3>
                  <p className="text-xs text-gray-500">Chap 15 - Đang ra</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6 mt-10 text-center text-sm text-gray-500">
        © 2025 Moonlust. All rights reserved. | Liên hệ: contact@moonlust.io
      </footer>
    </main>
  );
}
