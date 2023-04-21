import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 text-gray-800 bg-gray-100 dark:text-gray-300 dark:bg-gray-950">
        <main className="mx-auto max-w-2xl">
          <Main />
          <NextScript />
        </main>
      </body>
    </Html>
  )
}
