import 'styles/global.css';
//import 'styles/global-copy.css';
//import 'styles/custom-styles.css';
//import 'styles/prism.css'
import 'styles/prose-styles.css';

import { SiteLayout } from 'components/Layouts';
import { Providers } from 'components/Providers';

import * as React from 'react';

/* function MyApp({
  Component,
  pageProps
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp; */

/* const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps
}: AppLayoutProps<{
  session: Session;
}>) => {
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactNode) => (
      <SessionProvider session={pageProps.session}>
        <ThemeProvider attribute="class">
          <Providers pageProps={pageProps}>
            <SiteLayout>{page}</SiteLayout>
          </Providers>
        </ThemeProvider>
      </SessionProvider>
    ));

  return getLayout(<Component {...pageProps} />);
};

export default MyApp; */

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Providers pageProps={pageProps}>
        <SiteLayout>{page}</SiteLayout>
      </Providers>
    ));

  return getLayout(<Component {...pageProps} />);
}
