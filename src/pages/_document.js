import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    httpEquiv="content-type"
                    content="text/html;charset=UTF-8"
                />
                <meta
                    name="description"
                    content="Violeta Sol Arias Hours - Portfolio"
                />
                <meta
                    name="keywords"
                    content="Web Developer, Portfolio, React, Next.js"
                />
                <meta name="author" content="Violeta Sol Arias Hours" />
                <meta name="theme-color" content="#1b1b1b" />

                {/* Enlace al manifest.json */}
                <link rel="manifest" href="/manifest.json" />

                {/* Otros enlaces, como íconos */}
                <link
                    rel="apple-touch-icon"
                    sizes="192x192"
                    href="/images/icons/android-chrome-192x192.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="512x512"
                    href="/images/icons/android-chrome-512x512.png"
                />
            </Head>
            <body>
                <Script id="theme-switcher" strategy="beforeInteractive">
                    {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
                </Script>
                <Main />
                <NextScript />
                <script src="./regist_serviceWorker.js"></script>
            </body>
        </Html>
    );
}
