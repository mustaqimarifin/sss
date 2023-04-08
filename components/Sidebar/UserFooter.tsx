import { Avatar } from 'components/Avatar';
import { GhostButton } from 'components/Button';
import LoadingSpinner from 'components/LoadingSpinner';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useContext } from 'react';
import { Settings } from 'react-feather';

import { GlobalNavigationContext } from '../Providers';

function Container(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      data-cy="sign-in-button"
      className="filter-blur sticky bottom-0 z-10 flex items-center justify-between space-x-3 border-t border-gray-150 bg-white bg-opacity-80 p-2 dark:border-gray-800 dark:bg-gray-1000 dark:bg-opacity-60"
      {...props}
    />
  );
}

export function UserFooter() {
  const { data: session, status } = useSession();
  const { setIsOpen } = useContext(GlobalNavigationContext);

  function signInButton() {
    return (
      <>
        <GhostButton
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
          style={{ width: '100%' }}
        >
          Sign in
        </GhostButton>
      </>
    );
  }

  if (!session) {
    return <Container>{signInButton()}</Container>;
  }
  if (status === 'loading') {
    return (
      <Container>
        <div className="flex w-full items-center justify-center py-1">
          <LoadingSpinner />
        </div>
      </Container>
    );
  }

  if (session) {
    return (
      <Container>
        <Link
          passHref
          href={`/u/${session.userId}`}
          onClick={() => setIsOpen(false)}
          className="flex flex-none items-center rounded-full"
        >
          <Avatar
            user={session?.user}
            src={session?.user.image}
            width={24}
            height={24}
            className="rounded-full"
          />
        </Link>
        <GhostButton
          aria-label="Manage settings"
          onClick={() => setIsOpen(false)}
          size="small-square"
          href="/settings"
        >
          <Settings size={16} />
        </GhostButton>
      </Container>
    );
  }

  return <Container>{signInButton()}</Container>;
}
