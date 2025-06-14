// pages/index.tsx
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from '@/components/Header';
import SubNav from '@/components/SubNav';
import TopTruyen from '@/components/TopTruyen';
import TruyenMoi from '@/components/TruyenMoi';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#fff5f7] min-h-screen font-sans text-base antialiased text-gray-800">
      <Header />
      <SubNav />
      <section className="max-w-7xl mx-auto px-4 py-6">
        <TopTruyen />
        <TruyenMoi />
      </section>
      <Footer />
    </main>
  );
}
