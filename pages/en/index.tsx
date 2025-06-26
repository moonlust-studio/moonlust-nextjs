// ✅ File: pages/en/index.tsx – English Homepage for Moonlust

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import mockStories from '@/lib/mock/mockStories';

export default function Home() {
  const { locale = 'en' } = useRouter();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const stories = mockStories[locale] || [];

  const filteredStories = stories.filter((story) => {
    const matchCategory =
      selectedCategory === 'all' || story.genre.includes(selectedCategory);
    const matchSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const latestStories = filteredStories.slice(0, 6);
  const hotStories = filteredStories.slice(6, 12);

  return (
    <>
      <Head>
        <title>Moonlust – Erotic & Emotional Stories</title>
        <meta
          name="description"
          content="High-quality sensual stories, deep emotions, and unforgettable experiences."
        />
        <meta
          name="keywords"
          content="erotic stories, adult fiction, sensual, drama, Moonlust"
        />
        <meta property="og:title" content="Moonlust – Erotic & Emotional Stories" />
        <meta
          property="og:description"
          content="High-quality sensual stories, deep emotions, and unforgettable experiences."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">
          Moonlust: Where Desire Meets Storytelling
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Dive into intimate tales of passion, longing, and emotional depth.
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="all">All Categories</option>
            {[...new Set(stories.flatMap((s) => s.genre))].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search stories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-3 py-2 w-full md:w-64"
          />
        </div>

        {/* Latest Stories */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-pink-700 mb-4">Latest Updates</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {latestStories.map((story) => (
              <Link
                key={story.slug}
                href={`/en/truyen/${story.slug}`}
                className="bg-white rounded shadow hover:shadow-md transition"
              >
                <img
                  src={story.cover}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-t"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-pink-700">{story.title}</h3>
                  <p className="text-xs text-gray-500">{story.genre.join(', ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Hot Picks */}
        <section>
          <h2 className="text-xl font-semibold text-pink-700 mb-4">Hot Picks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {hotStories.map((story) => (
              <Link
                key={story.slug}
                href={`/en/truyen/${story.slug}`}
                className="bg-white rounded shadow hover:shadow-md transition"
              >
                <img
                  src={story.cover}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-t"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-pink-700">{story.title}</h3>
                  <p className="text-xs text-gray-500">{story.genre.join(', ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
