import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { mockStories } from '../lib/mockStories';

export default function StoriesPage() {
  return (
    <>
      <Head>
        <title>Danh Sách Truyện - Moonlust</title>
        <meta name="description" content="Khám phá các truyện hot nhất hiện nay trên Moonlust." />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">
          Danh Sách Truyện
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {mockStories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <Image
                src={story.cover}
                alt={story.title}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-pink-700">{story.title}</h2>
                <p className="text-sm text-gray-600">{story.genre}</p>
                <p className="text-xs mt-1 text-gray-500">
                  {story.chapters} chương • {story.status === 'completed' ? 'Hoàn thành' : 'Đang ra'}
                </p>
                <Link
                  href={`/stories/${story.id}`}
                  className="inline-block mt-3 text-sm text-pink-600 hover:underline font-medium"
                >
                  Đọc ngay →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
