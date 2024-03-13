import Franklin from 'components/Franklin';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Franklin />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#4a9885"
            href="/static/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/static/favicons/browserconfig.xml"
            name="msapplication-config"
          />

          <meta
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            name="robots"
          />
        </Head>

        <body className="antialiased ">
          <span className="text-tertiary absolute flex -translate-y-full transform space-x-1 border-b border-gray-150 bg-gray-0 p-2 focus-within:relative focus-within:translate-y-0 dark:border-gray-800 dark:bg-gray-900">
            <a className="text-primary font-semibold" href="#main">
              Skip to content
            </a>
            <span>(if available)</span>
            <span>or</span>
            <a className="text-primary font-semibold" href="#list">
              jump to list
            </a>
            <span>(if available)</span>
          </span>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
