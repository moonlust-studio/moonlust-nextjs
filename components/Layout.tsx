// ✅ File: components/Layout.tsx

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* ❗️CHỈ DÙNG MỘT <main> Ở ĐÂY, KHÔNG NÊN TRUYỀN VÀO COMPONENT CON */}
      <main className="flex-grow" suppressHydrationWarning>
        {children}
      </main>

      <Footer />
    </div>
  );
}
