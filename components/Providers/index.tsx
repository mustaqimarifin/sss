import type { NextPageContext } from 'next';
import type { Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

//import { ModalProvider, useModal } from 'supabase/hooks/useModal';
//import { UserContextProvider } from 'supabase/hooks/useUser';
//import SignInModal from 'supabase/SBComponents/comments/SignInModal';
//import supabase from 'supabase/supaPublic';
import { Toast } from './Toaster';
interface Props {
  children?: React.ReactNode;
  pageProps: {
    session: Session;
    pageProps: NextPageContext;
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
export function Providers({ children, pageProps }: Props) {
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
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={pageProps.session}>
          <ThemeProvider attribute="class">
            <GlobalNavigationContext.Provider value={state}>
              {children}
            </GlobalNavigationContext.Provider>
          </ThemeProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
