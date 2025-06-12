// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center" style={{ backgroundImage: "url('/hero-banner.jpg')" }}>
        <div className="bg-black/60 p-6 rounded-2xl shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Moonlust</h1>
          <p className="text-lg md:text-xl mb-6">Truyện người lớn cảm xúc, tinh tế, đắm say.</p>
          <Link href="/truyen/co-thu-ky/chuong-1">
            <span className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition">Khám phá ngay</span>
          </Link>
        </div>
      </div>

      {/* Featured Story */}
      <div className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Truyện Nổi Bật</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/thu-ky-thumb.jpg" alt="Cô Thư Ký" className="rounded-2xl shadow-lg w-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Cô Thư Ký</h3>
            <p className="mb-4 text-gray-300">Một câu chuyện về cám dỗ, kìm nén và đam mê giữa hai người trưởng thành – vừa say đắm, vừa giằng xé.</p>
            <Link href="/truyen/co-thu-ky/chuong-1">
              <span className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-400 transition">Đọc ngay →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* About Moonlust */}
      <div className="bg-gray-900 py-12 px-6 md:px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Về Moonlust</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Moonlust là không gian ẩn danh để bạn tận hưởng những câu chuyện người lớn với chiều sâu cảm xúc. Không thô tục, không rẻ tiền — chỉ có gợi cảm, tinh tế và nghệ thuật.
        </p>
      </div>
    </div>
  );
}
