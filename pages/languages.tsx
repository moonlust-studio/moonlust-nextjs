// File: pages/languages.tsx
import Head from 'next/head';
export default function LanguagesPage() {
  return (
    <>
      <Head><title>Đa Ngôn Ngữ - Moonlust</title></Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">🌐 Đa Ngôn Ngữ</h1>
        <p className="text-lg leading-relaxed">
          Moonlust đang phát triển hệ thống truyện đa ngôn ngữ như tiếng Anh, Nhật, Trung... để phục vụ độc giả toàn cầu một cách tinh tế và gần gũi nhất.
        </p>
      </main>
    </>
  );
}