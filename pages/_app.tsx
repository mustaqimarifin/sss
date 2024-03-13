import 'styles/global.tailwind.css';
import '@heathmont/moon-themes-tw/lib/moon.css';
import '@code-hike/mdx/styles';

import { SiteLayout } from 'components/Layouts';
import { Providers } from 'components/Providers';
import type { AppProps } from 'next/dist/shared/lib/router/router';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import type { NextPage } from 'next/types';
import * as React from 'react';

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Providers pageProps={pageProps}>
          <SiteLayout>{page}</SiteLayout>
        </Providers>
      </>
    ));

  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  );
}) as AppType;

export default MyApp;
