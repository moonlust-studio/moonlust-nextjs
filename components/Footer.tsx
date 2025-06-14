// components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 text-center text-sm text-gray-500 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p>© 2025 <span className="text-pink-600 font-semibold">Moonlust</span>. All rights reserved.</p>
        <p>Liên hệ: <a href="mailto:contact@moonlust.io" className="hover:underline text-pink-600">contact@moonlust.io</a></p>
      </div>
    </footer>
  );
}
