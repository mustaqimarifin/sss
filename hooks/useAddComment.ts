import { useMutation, useQueryClient } from 'react-query';

import useApi from './useApi';

interface UseAddCommentPayload {
  comment: string;
  topic: string;
  parentId: string | null;
  section: string;
  mentionedUserIds: string[];
}

const useAddComment = () => {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation(
    ({
      comment,
      topic,
      parentId,
      section,
      mentionedUserIds
    }: UseAddCommentPayload) => {
      return api.addComment({
        comment,
        topic,

        parent_id: parentId,
        mentioned_user_ids: mentionedUserIds
      });
    },
    {
      onSuccess: (data, params) => {
        queryClient.invalidateQueries([
          'comments',
          {
            topic: params.topic,
            parentId: params.parentId,
            section: params.section
          }
        ]);
      }
    }
  );
};

export default useAddComment;
