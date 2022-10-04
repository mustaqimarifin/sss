import 'styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth/core/types';
import { NewSide } from 'components/newSide';
// import { ModalProvider } from 'services/use-modal';
// import { Session } from 'next-auth/react';

function MyApp({
  Component,
  pageProps
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <NewSide />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
