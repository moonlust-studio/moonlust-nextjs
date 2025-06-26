// ✅ File: pages/art.tsx – Trang Nghệ Thuật Yêu

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
          content="Khám phá những khía cạnh sâu sắc và tinh tế của nghệ thuật yêu đương tại Moonlust."
        />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Nghệ Thuật Yêu
        </h1>
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            Yêu không chỉ là bản năng. Đó còn là sự thấu cảm, tôn trọng, và nghệ thuật
            của việc chạm đến tâm hồn nhau bằng những điều tinh tế nhất.
          </p>
          <p>
            Moonlust mong muốn mang lại cho bạn những góc nhìn mới mẻ, những cảm hứng
            yêu đương nhẹ nhàng, nhưng sâu sắc – để mỗi khoảnh khắc bên người mình yêu
            là một tác phẩm nghệ thuật.
          </p>
          <div className="flex justify-center mt-6">
            <Image
              src="/images/art-of-love.jpg"
              alt="Nghệ thuật yêu"
              width={640}
              height={360}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-pink-600 hover:underline text-sm font-medium"
            >
              ← Quay lại Trang Chủ
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
