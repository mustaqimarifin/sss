import 'styles/global.css';

//import 'styles/global-copy.css';
//import 'styles/prism.css';
//import 'styles/prose-styles.css';
import { SiteLayout } from 'components/Layouts';
import { Providers } from 'components/Providers';
import type { AppProps } from 'next/dist/shared/lib/router/router';
import type { AppType } from 'next/dist/shared/lib/utils';
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
      <Providers pageProps={pageProps}>
        <SiteLayout>{page}</SiteLayout>
      </Providers>
    ));

  return getLayout(<Component {...pageProps} />);
}) as AppType;

export default MyApp;
