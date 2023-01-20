// import { Settings } from 'react-feather';
//import { Avatar } from 'components/Avatar';
import { GhostButton } from 'components/Button';
import ThemeToggle from 'components/Button/ThemeToggle';
import { User } from 'components/Comments';
import LoadingSpinner from 'components/LoadingSpinner';
import { SignInDialog } from 'components/SignInDialog';
import Link from 'next/link';
// import { useSession } from 'next-auth/react';
import * as React from 'react';
import { SignOut, TwitterLogin } from 'supabase/funkshunz/SignOut';
import { useModal } from 'supabase/hooks/useModal';
import { useUser } from 'supabase/hooks/useUser';
import Avatar from 'supabase/SBComponents/comments/Avatar';
import SignInModal from 'supabase/SBComponents/comments/SignInModal';

//import { useViewerQuery } from 'graphql/types.generated';
import { GlobalNavigationContext } from '../Providers';

function Container(props) {
  return (
    <div
      data-cy="sign-in-button"
      className="filter-blur sticky bottom-0 z-10 flex items-center justify-between space-x-3 border-t border-gray-150 bg-white bg-opacity-80 p-2 dark:border-gray-800 dark:bg-gray-900 dark:bg-opacity-60"
      {...props}
    />
  );
}

export function UserFooter() {
  const { profile, loading } = useUser();
  const { setIsOpen } = React.useContext(GlobalNavigationContext);
  const { open, isOpen } = useModal({
    signInModal: SignInModal
  });
  /*   React.useEffect(() => {
    if (user && profile && !profile.full_name) {
      open('newUserModal');
    }
  }, [user, profile]); */
  React.useEffect(() => {
    if (!isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  if (!profile) {
    return (
      <SignInDialog
        trigger={<GhostButton style={{ width: '100%' }}>Sign in</GhostButton>}
      />
    );
  }
  /*   if (!loading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  } */
  /*   function signInButton() {
    return (
      <GhostButton
        onClick={(e) => {
          e.preventDefault();
          TwitterLogin();
        }}
        style={{ width: '100%' }}
      >
        Sign in
      </GhostButton>
    );
  } */

  if (profile) {
    return (
      <Container>
        <button
          aria-label="Sign Out"
          onClick={(e) => {
            e.preventDefault();
            SignOut();
          }}
          className="flex flex-none items-center rounded-full hover:shadow-md hover:shadow-green-200"
        >
          <Avatar profile={profile} />
        </button>
        <GhostButton size="small-square"></GhostButton>

        <ThemeToggle />
      </Container>
    );
  }

  //return <Container>{SignInDialog()}</Container>;
}
