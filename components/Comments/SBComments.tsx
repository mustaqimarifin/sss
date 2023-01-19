import { Comments, CommentsProvider } from 'components/Comments';
import * as React from 'react';
import supabase from 'supabase/supaPublic';

interface Props {
  slug?: string;
  id?: string;
}

const SBComments = ({ slug, id }: Props) => {
  return (
    <div>
      <h2 className="text-center font-mono font-semibold my-8">Comments</h2>
      <CommentsProvider supabaseClient={supabase}>
        <Comments topic={slug ?? id} />
      </CommentsProvider>
    </div>
  );
};

export default SBComments;
