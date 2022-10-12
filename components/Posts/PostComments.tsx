import React, { useState } from 'react';
import { useModal } from 'services/use-modal';
import SignInModal from 'supabase/SBComponents/comments/SignInModal';
import supabase from 'supabase/supaPublic';
import {
  AuthModal,
  Comments,
  CommentsProvider
} from 'supabase-comments-extension';

const Spender = ({ slug }) => {
  const { open } = useModal({
    signInModal: SignInModal
  });
  return (
    <div className="">
      <CommentsProvider
        supabaseClient={supabase}
        onAuthRequested={() => open('signInModal')}
      >
        <Comments topic={slug} />
      </CommentsProvider>
    </div>
  );
};

export default Spender;
