// pages/index.tsx
import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen font-sans text-base antialiased text-gray-800">
      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-pink-600">Moonlust</a>
          </Link>
          <nav className="space-x-4 text-sm">
            <Link href="/" legacyBehavior><a className="hover:text-pink-600 transition">Trang chủ</a></Link>
            <Link href="/the-loai" legacyBehavior><a className="hover:text-pink-600 transition">Thể loại</a></Link>
            <Link href="/truyen-moi" legacyBehavior><a className="hover:text-pink-600 transition">Truyện mới</a></Link>
            <Link href="/truyen-full" legacyBehavior><a className="hover:text-pink-600 transition">Truyện full</a></Link>
            <Link href="/gioi-thieu" legacyBehavior><a className="hover:text-pink-600 transition">Giới thiệu</a></Link>
          </nav>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {/* MAIN CONTENT */}
        <div className="md:col-span-3">
          {/* HOT SECTION */}
          <section className="bg-white py-4 border rounded">
            <h2 className="text-lg font-semibold mb-4 px-4 text-pink-700 border-b pb-2">🔥 Truyện nổi bật</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
              {["thu-huong-1.jpg", "thu-huong-2.jpg", "thu-huong-3.jpg", "thu-huong-4.jpg"].map((img, i) => (
                <Link key={i} href={`/truyen/noi-bat-${i + 1}`} legacyBehavior>
                  <a className="bg-white rounded-lg shadow hover:shadow-xl transition block overflow-hidden">
                    <Image src={`/${img}`} alt="Hot" width={300} height={400} className="w-full h-auto rounded-t" />
                    <div className="p-2">
                      <h3 className="text-sm font-bold text-gray-700">Cô Thư Ký Bất Trị</h3>
                      <p className="text-xs text-gray-500">Chap 20 - Full</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>

          {/* NEW UPDATE SECTION */}
          <section className="bg-white py-4 mt-6 border rounded">
            <h2 className="text-lg font-semibold mb-4 px-4 text-pink-700 border-b pb-2">📚 Truyện mới cập nhật</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
              {["demo-1.jpg", "demo-2.jpg", "demo-3.jpg", "demo-4.jpg", "demo-5.jpg", "demo-6.jpg", "demo-7.jpg", "demo-8.jpg"].map((img, i) => (
                <Link key={i} href={`/truyen/moi-${i + 1}`} legacyBehavior>
                  <a className="bg-white rounded-lg shadow hover:shadow-xl block overflow-hidden">
                    <Image src={`/${img}`} alt="Truyện mới" width={300} height={400} className="w-full h-auto rounded-t" />
                    <div className="p-2">
                      <h3 className="text-sm font-bold text-gray-800 truncate">Chồng Cô Giáo Thảo</h3>
                      <p className="text-xs text-gray-500">Chap 15 - Đang ra</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="bg-white rounded shadow p-4">
            <h3 className="font-semibold text-sm text-pink-600 mb-2">🔍 Tìm kiếm nhanh</h3>
            <input type="text" placeholder="Nhập tên truyện..." className="w-full p-2 border rounded text-sm" />
          </div>

          <div className="bg-white rounded shadow p-4">
            <h3 className="font-semibold text-sm text-pink-600 mb-2">📊 Xếp hạng tuần</h3>
            <ul className="text-sm space-y-1">
              <li>1. Cô Thư Ký Bất Trị</li>
              <li>2. Chồng Cô Giáo Thảo</li>
              <li>3. Gái Hư & Anh Trưởng Phòng</li>
            </ul>
          </div>

          <div className="bg-white rounded shadow p-4">
            <h3 className="font-semibold text-sm text-pink-600 mb-2">📂 Danh mục</h3>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Ngôn tình</li>
              <li>Drama người lớn</li>
              <li>Cấm trẻ em</li>
              <li>Ngoại tình</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6 mt-10 text-center text-sm text-gray-500">
        © 2025 Moonlust. All rights reserved. | Liên hệ: contact@moonlust.io
      </footer>
    </main>
  );
}
