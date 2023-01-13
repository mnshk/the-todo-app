import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head>
        <link rel="manifest" href="manifest.webmanifest.json" />
        <link rel="shortcut icon" href="/icons/icon-small-circle-192x192.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
