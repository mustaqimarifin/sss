import { GhostButton } from 'components/Button';
import { AuthModal, Comments, CommentsProvider } from 'components/Comments';
import { SignInDialog } from 'components/SignInDialog';
import React, { useState } from 'react';
import { useModal } from 'services/use-modal';
import { TwitterLogin } from 'supabase/funkshunz/SignOut';
import { useUser } from 'supabase/hooks/useUser';
import SignInModal from 'supabase/SBComponents/comments/SignInModal';
import supabase from 'supabase/supaPublic';

const Spender = ({ slug }) => {
  const { open } = useModal({
    signInModal: SignInModal
  });
  const [modalVisible, setModalVisible] = useState(false);

  const { user } = useUser();

  return (
    <div>
      <CommentsProvider supabaseClient={supabase}>
        <Comments topic={slug} />
        <div className="flex justify-end ">
          {!user ? (
            <SignInDialog
              trigger={
                <GhostButton className=" py-1 px-2 rounded bg-rose-400  text-xs text-white disabled:opacity-40 hover:bg-indigo-700">
                  Sign in
                </GhostButton>
              }
            />
          ) : (
            <></>
          )}
        </div>
      </CommentsProvider>
    </div>
  );
};

export default Spender;
