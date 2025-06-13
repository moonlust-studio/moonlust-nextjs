// pages/index.tsx
import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen font-sans text-base antialiased text-gray-800">
      {/* HEADER TẦNG 1 */}
      <header className="bg-gradient-to-r from-[#f23847] to-[#f8593b] shadow sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <Image src="/logo-moonlust.png" width={120} height={40} alt="Moonlust logo" />
            <nav className="hidden md:flex gap-6 text-white font-semibold">
              <Link href="/" legacyBehavior><a className="hover:underline">Trang Chủ</a></Link>
              <Link href="/nguoi-lon" legacyBehavior><a className="hover:underline">Truyện Người Lớn</a></Link>
              <Link href="/nghe-thuat-yeu" legacyBehavior><a className="hover:underline">Nghệ Thuật Yêu</a></Link>
              <Link href="/audio-truyen" legacyBehavior><a className="hover:underline">Nghe Audio Truyện Sex</a></Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white rounded-full p-2 text-red-600"><span className="text-lg">🔍</span></button>
            <button className="px-4 py-1 rounded-full border border-white text-white hover:bg-white hover:text-red-600">Đăng nhập</button>
            <button className="px-4 py-1 rounded-full border border-white text-white hover:bg-white hover:text-red-600">Đăng Ký</button>
          </div>
        </div>
      </header>

      {/* HEADER TẦNG 2 */}
      <div className="bg-white border-b py-2 shadow-sm">
        <div className="max-w-7xl mx-auto flex gap-8 text-sm text-gray-700 font-semibold">
          <Link href="/nghe-thuat-yeu" legacyBehavior><a className="hover:text-[#dd0000]">NGHỆ THUẬT YÊU</a></Link>
          <Link href="/suc-khoe" legacyBehavior><a className="hover:text-[#dd0000]">SỨC KHỎE TÌNH DỤC</a></Link>
        </div>
      </div>

      {/* BODY CHÍNH */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        {/* Top Truyện Hay */}
        <h2 className="text-xl font-bold mb-4 text-[#f23847]">🔥 Top Truyện Hay</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <Link key={i} href={`/truyen/co-giao-thao-sieu-pham`} legacyBehavior>
              <a className="bg-white rounded shadow hover:shadow-lg transition block overflow-hidden">
                <Image src="/demo.jpg" alt="Truyện hot" width={300} height={400} className="w-full h-auto" />
                <div className="p-2">
                  <h3 className="text-sm font-bold text-gray-800">Cô Giáo Thảo Siêu Phẩm</h3>
                  <p className="text-xs text-gray-500">Chương 81 • Chương 80</p>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {/* Truyện Mới */}
        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-800">📚 TRUYỆN MỚI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <Link key={i} href={`/truyen/mot-lan-cuoi`} legacyBehavior>
              <a className="bg-white rounded shadow hover:shadow-lg transition block overflow-hidden">
                <Image src="/demo.jpg" alt="Truyện mới" width={300} height={400} className="w-full h-auto" />
                <div className="p-2">
                  <h3 className="text-sm font-bold text-gray-800 truncate">Một lần cuối đời... tổn đến chết</h3>
                  <p className="text-xs text-gray-500">1 ngày ago</p>
                  <p className="text-xs font-semibold text-gray-700">Phần 8 • Phần 7</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-center text-sm text-gray-500 border-t mt-10 py-6">
        Toàn bộ nội dung của website Moonlust đều được sưu tầm trên mạng. Nghiêm cấm người dưới 18 tuổi truy cập.
      </footer>
    </main>
  );
}
