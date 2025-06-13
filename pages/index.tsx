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

      {/* BODY */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 px-4">
        {/* MAIN CONTENT */}
        <div className="md:col-span-3 space-y-10">
          {/* SECTION: TOP TRUYỆN HAY */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#ef4444] px-3 py-1 text-white font-bold text-sm rounded-tl-md rounded-tr-md relative">
                Top Truyện Hay
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#ef4444] absolute left-1/2 transform -translate-x-1/2 bottom-[-10px]" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["top-1.jpg", "top-2.jpg", "top-3.jpg", "top-4.jpg"].map((img, idx) => (
                <div key={idx} className="bg-white rounded shadow overflow-hidden">
                  <Image src={`/${img}`} alt="Top Truyện" width={300} height={400} className="w-full h-auto" />
                  <div className="p-2">
                    <h3 className="text-sm font-bold text-gray-800">Cô Giáo Thảo Siêu Phẩm</h3>
                    <p className="text-xs text-gray-500">Chương 81 • Chương 80</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: TRUYỆN MỚI */}
          <section>
            <h2 className="text-xl font-bold mb-2">TRUYỆN MỚI</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, idx) => (
                <div key={idx} className="bg-white rounded shadow overflow-hidden">
                  <div className="relative">
                    <Image src="/demo.jpg" alt="New" width={300} height={400} className="w-full h-auto" />
                  </div>
                  <div className="p-2">
                    <h3 className="text-sm font-bold text-gray-800 truncate">Một lần cuối đời... tổn đến chết</h3>
                    <p className="text-xs text-gray-400 mb-1">1 ngày ago</p>
                    <div className="text-xs font-bold flex gap-2">
                      <span className="bg-gray-200 rounded-full px-2 py-1">Phần 8</span>
                      <span className="bg-gray-200 rounded-full px-2 py-1">Phần 7</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* SIDEBAR: TRUYỆN ĐỀ CỬ */}
        <aside className="space-y-4">
          <div>
            <div className="bg-[#ef4444] text-white px-3 py-1 text-sm font-bold inline-block rounded-tl-md rounded-tr-md relative">
              Truyện Gợi Đề Cử
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#ef4444] absolute left-1/2 transform -translate-x-1/2 bottom-[-10px]" />
            </div>
            <div className="bg-white shadow rounded p-3 mt-3 space-y-4">
              {["side-1.jpg", "side-2.jpg"].map((img, i) => (
                <div key={i} className="flex gap-2 border-b pb-2">
                  <Image src={`/${img}`} alt="Đề cử" width={60} height={80} className="rounded" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">Gò Ô Môi</h4>
                    <p className="text-xs text-gray-500">Chương 47 • Tháng 7 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="bg-white text-center text-sm text-gray-500 border-t mt-10 py-6">
        Toàn bộ nội dung của website Moonlust đều được sưu tầm trên mạng. Nghiêm cấm người dưới 18 tuổi truy cập.
      </footer>
    </main>
  );
}
