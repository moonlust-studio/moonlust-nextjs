// ✅ 1. Dark/Light Theme + 3 pages: art.tsx, health.tsx, languages.tsx

// File: components/ThemeToggle.tsx
'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-sm px-3 py-1 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
    >
      {isDark ? '🌞 Sáng' : '🌙 Tối'}
    </button>
  );
}