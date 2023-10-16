import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body className="relative">
          <div id="modal-root" className="h-0 sticky top-0 left-0 z-50" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
