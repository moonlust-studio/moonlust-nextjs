// ✅ FILE: components/StoryList.tsx – Hiển thị danh sách truyện

import Link from 'next/link';
import Image from 'next/image';

interface Story {
  id: string;
  slug: string;
  title: string;
  genre: string[];
  chapters: number;
  status: 'ongoing' | 'completed';
  cover: string;
}

interface StoryListProps {
  stories: Story[];
  title: string;
  t: (key: string, defaultText?: string) => string;
}

export default function StoryList({ stories, title, t }: StoryListProps) {
  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Link
            key={story.id}
            href={`/truyen/${story.slug}`}
            className="block bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={story.cover}
                alt={story.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-pink-700 mb-1">{story.title}</h3>
              <p className="text-sm text-gray-500">{t(`status.${story.status}`, story.status)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
