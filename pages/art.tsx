// ✅ File: pages/art.tsx – Nội dung nghệ thuật yêu

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ArtPage() {
  return (
    <>
      <Head>
        <title>Nghệ Thuật Yêu - Moonlust</title>
        <meta
          name="description"
          content="Khám phá thế giới nghệ thuật yêu thương đầy tinh tế và cảm xúc tại Moonlust."
        />
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-pink-600 text-center">
          Nghệ Thuật Yêu
        </h1>
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            Tình yêu không chỉ là cảm xúc – mà còn là nghệ thuật. Làm thế nào để
            chạm đến nhau không chỉ bằng cơ thể, mà còn bằng tâm hồn?
          </p>
          <p>
            Moonlust mang đến những bài viết, hình ảnh, và câu chuyện truyền cảm hứng,
            giúp bạn khám phá và hiểu hơn về bản thân – và người bạn yêu.
          </p>
          <p className="italic text-sm text-gray-500">
            "Yêu là khi chạm vào nhau mà cả thế giới như ngừng lại."
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src="/images/art-of-love.jpg"
              alt="Nghệ thuật yêu"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-pink-600 font-medium hover:underline"
            >
              ← Về trang chủ
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
