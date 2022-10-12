import React, { useCallback, useEffect, useState } from 'react';
import {
  CommentsContextProvider,
  useComments
} from 'supabase/hooks/useComments';

// import { ModalProvider } from 'supabase/hooks/useModal';
import Comments from './comments/Comments';

interface Props {
  slug: string;
}
const SupaDupa = ({ slug }: Props) => {
  const { commentId } = useComments();
  const [enableLoadComments, setEnabledLoadComments] = useState(false);

  const LoadComments = useCallback(() => {
    setEnabledLoadComments(false);
  }, []);

  // Reload on theme change
  useEffect(() => {
    LoadComments();
  }, [LoadComments]);
  return (
    <div className="text-gray-700 dark:text-gray-300">
      {enableLoadComments && (
        <button onClick={LoadComments}>Load Comments</button>
      )}
      <CommentsContextProvider commentId={commentId}>
        <Comments slug={slug} />
      </CommentsContextProvider>
    </div>
  );
};

export default SupaDupa;
