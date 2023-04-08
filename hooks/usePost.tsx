/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useMemo } from 'react';
import type { Comment } from 'types/index';
import { api } from 'utils/api';
export interface PostProps {
  slug: string;
}

export const usePost = (slug: string) => {
  //@ts-ignore
  const post = api.post.getBySlug.useQuery({ slug });

  const commentsByParentId = useMemo(() => {
    if (post?.data?.comments === null) return null;

    const group: { [key: string]: Comment[] } = {};

    post.data?.comments?.forEach((comment: Comment) => {
      group[comment.parentId!] ||= [];
      group[comment?.parentId!]?.push(comment);
    });

    return group;
  }, [post?.data?.comments]);

  const getReplies = (parentId: string): Comment[] => {
    return commentsByParentId?.[parentId] || [];
  };

  return {
    post,
    rootComments: commentsByParentId?.['null'] || [],
    getReplies
  };
};
