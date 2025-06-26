// ✅ Global App Wrapper with i18n support

//import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import nextI18NextConfig from '@/next-i18next.config.js'; // ✅ Đã sửa đúng alias

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* ✅ Google Fonts hỗ trợ tiếng Việt cực đẹp */}
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
