// pages/index.tsx
import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen font-sans">
      <h1 className="text-center pt-10 text-2xl font-bold text-green-600 flex items-center justify-center">
        ✅ <span className="ml-2">Đã render từ index.tsx</span>
      </h1>

      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50 mt-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-pink-600">Moonlust</a>
          </Link>
          <nav className="space-x-4 text-sm">
            <Link href="/" legacyBehavior><a className="hover:text-pink-600">Trang chủ</a></Link>
            <Link href="/the-loai" legacyBehavior><a className="hover:text-pink-600">Thể loại</a></Link>
            <Link href="/truyen-moi" legacyBehavior><a className="hover:text-pink-600">Truyện mới</a></Link>
            <Link href="/truyen-full" legacyBehavior><a className="hover:text-pink-600">Truyện full</a></Link>
            <Link href="/gioi-thieu" legacyBehavior><a className="hover:text-pink-600">Giới thiệu</a></Link>
          </nav>
        </div>
      </header>

      {/* HOT SECTION */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4 text-pink-700">🔥 Truyện nổi bật</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["thu-huong-1.jpg", "thu-huong-2.jpg", "thu-huong-3.jpg", "thu-huong-4.jpg"].map((img, i) => (
              <Link key={i} href={`/truyen/noi-bat-${i + 1}`} legacyBehavior>
                <a className="bg-white rounded shadow hover:shadow-lg transition block overflow-hidden">
                  <Image src={`/${img}`} alt="Hot" width={300} height={400} className="w-full h-auto rounded-t" />
                  <div className="p-2">
                    <h3 className="text-sm font-bold text-gray-700">Cô Thư Ký Bất Trị</h3>
                    <p className="text-xs text-gray-500">Chap 20 - Full</p>
                  </div>
                </a>
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
            {["demo-1.jpg", "demo-2.jpg", "demo-3.jpg", "demo-4.jpg", "demo-5.jpg", "demo-6.jpg", "demo-7.jpg", "demo-8.jpg", "demo-9.jpg", "demo-10.jpg"].map((img, i) => (
              <Link key={i} href={`/truyen/moi-${i + 1}`} legacyBehavior>
                <a className="bg-white rounded shadow hover:shadow-lg block overflow-hidden">
                  <Image src={`/${img}`} alt="Truyện mới" width={300} height={400} className="w-full h-auto rounded-t" />
                  <div className="p-2">
                    <h3 className="text-sm font-bold text-gray-800 truncate">Chồng Cô Giáo Thảo</h3>
                    <p className="text-xs text-gray-500">Chap 15 - Đang ra</p>
                  </div>
                </a>
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
