import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextPageContext } from 'next';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import { ModalProvider, useModal } from 'supabase/hooks/useModal';
import { UserContextProvider } from 'supabase/hooks/useUser';
import SignInModal from 'supabase/SBComponents/comments/SignInModal';
import supabase from 'supabase/supaPublic';

import { Toast } from './Toaster';
interface Props {
  children?: any;
  pageProps: NextPageContext;
}

const globalNavigationContext = {
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpen: (val: boolean) => {}
};

export const GlobalNavigationContext = React.createContext(
  globalNavigationContext
);

export function Providers({ children }: Props) {
  const initialState = {
    isOpen: false,
    setIsOpen
  };
  const queryClient = new QueryClient();

  const [state, setState] = React.useState(initialState);

  function setIsOpen(isOpen) {
    return setState({ ...state, isOpen });
  }

  return (
    <>
      <Toast />
      <QueryClientProvider client={queryClient}>
        <UserContextProvider supabaseClient={supabase}>
          <ModalProvider>
            <ThemeProvider attribute="class">
              <GlobalNavigationContext.Provider value={state}>
                {children}
              </GlobalNavigationContext.Provider>
            </ThemeProvider>
          </ModalProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}
