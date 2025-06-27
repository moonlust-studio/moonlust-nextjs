// ✅ FILE: pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        {/* ✅ Favicon cho toàn site */}
        <link rel="icon" href="/favicon.ico" />
        {/* 🔁 Sau này nếu cần meta thêm cũng đặt ở đây */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
