import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Inter } from 'next/font/google'
 
import "../../styles/globals.css";

const interFont = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  
  return (
    <main className={interFont.className}>
      {loading && <div>Loading...</div>}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
