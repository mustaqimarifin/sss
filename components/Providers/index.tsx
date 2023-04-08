import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

import { Toast } from './Toaster';
interface Props {
  children?: React.ReactNode;
  pageProps: {
    session: Session;
  };
}

const globalNavigationContext = {
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpen: (val: boolean) => {}
};

export const GlobalNavigationContext = React.createContext(
  globalNavigationContext
);
export function Providers({ children, pageProps: { session } }: Props) {
  const initialState = {
    isOpen: false,
    setIsOpen
  };
  const queryClient = new QueryClient();

  const [state, setState] = React.useState(initialState);

  function setIsOpen(isOpen: any) {
    return setState({ ...state, isOpen });
  }

  return (
    <>
      <Toast />
      <ThemeProvider attribute="class">
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={session}>
            <GlobalNavigationContext.Provider value={state}>
              {children}
            </GlobalNavigationContext.Provider>
          </SessionProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
