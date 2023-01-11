import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>The ToDo's</title>
        <meta name="description" content="The ToDo's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="rgb(15 23 42)" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
