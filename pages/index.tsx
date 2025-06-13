import React from "react";
import Link from "next/link";
import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "Cô Nàng Thư Ký",
    slug: "co-nang-thu-ky",
    description: "Mối quan hệ bí mật giữa cô thư ký và vị sếp thành đạt.",
    status: "Hoàn thành",
    image: "/images/stories/thu-ky.jpg",
  },
  {
    id: 2,
    title: "Trò Chơi Cấm Kỵ",
    slug: "tro-choi-cam-ky",
    description: "Cuộc chơi đầy cám dỗ giữa hai người lạ tại công ty.",
    status: "Đang ra",
    image: "/images/stories/cam-ky.jpg",
  },
  {
    id: 3,
    title: "Giao Dịch Bí Mật",
    slug: "giao-dich-bi-mat",
    description: "Một hợp đồng ngầm đổi lấy cảm xúc không tên.",
    status: "Hoàn thành",
    image: "/images/stories/bi-mat.jpg",
  }
];

export default function Home() {
  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📚 Truyện Gợi Cảm Nổi Bật</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stories.map((story) => (
          <Link key={story.id} href={`/${story.slug}`} className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
            <div className="relative w-full h-48">
              <Image src={story.image} alt={story.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">{story.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">{story.description}</p>
              <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-600">
                {story.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}