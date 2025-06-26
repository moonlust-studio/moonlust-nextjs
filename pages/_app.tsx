// ✅ File: pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import nextI18NextConfig from '@/next-i18next.config';

type CustomAppProps = AppProps & {
  Component: AppProps['Component'] & { getLayout?: (page: React.ReactNode) => React.ReactNode };
};

function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Moonlust – Truyện người lớn tinh tế, cảm xúc</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
