// File: pages/health.tsx
import Head from 'next/head';
export default function HealthPage() {
  return (
    <>
      <Head><title>Sức Khỏe Cảm Xúc - Moonlust</title></Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">💓 Sức Khỏe Cảm Xúc</h1>
        <p className="text-lg leading-relaxed">
          Góc nhỏ dành cho những chủ đề về tâm lý, gắn kết cảm xúc, chăm sóc tinh thần trong tình yêu, hôn nhân và đời sống gợi cảm.
        </p>
      </main>
    </>
  );
}