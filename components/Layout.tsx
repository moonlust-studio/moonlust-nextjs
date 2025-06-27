import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* ✅ Thêm padding-top để tránh bị che bởi header */}
      <main className="flex-grow pt-[80px] px-4">
        {children}
      </main>

      <Footer />
    </div>
  );
}
