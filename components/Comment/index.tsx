/* eslint-disable @typescript-eslint/no-misused-promises */
import clsx from 'clsx';
import { CommentForm } from 'components/CommentForm';
import { CommentList } from 'components/CommentList';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { usePost } from 'hooks/usePost';
import { Heart, Heartless, Pencil, Reply, Trash } from 'lib/icons';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import type { Comment } from 'types';
import { api } from 'utils/api';

import { IconButton } from '../IconButton';
import Avatar from './Avatar';
dayjs.extend(relativeTime, {
  rounding: Math.floor
});
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault(dayjs.tz.guess());
const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
  timeStyle: 'short'
});

interface CommentProps {
  comment: Comment;
}

export const CommentSolo = ({ comment }: CommentProps) => {
  const { id, text, user, createdAt, likeCount, likedByMe } = comment;

  const router = useRouter();
  const slug = router.query.slug as string;
  const { data: session } = useSession();
  //@ts-ignore
  const { getReplies } = usePost(slug);

  const utils = api.useContext();
  const createComment = api.post.addComment.useMutation({
    async onSuccess(input) {
      await utils.post.getBySlug.invalidate({ slug: input.slug as string });
    }
  });

  const updateComment = api.post.updateComment.useMutation({
    async onSuccess(input) {
      await utils.post.getBySlug.invalidate({ slug: input.slug as string });
    }
  });

  const deleteComment = api.post.deleteComment.useMutation({
    async onSuccess(input) {
      await utils.post.getBySlug.invalidate({ slug: input.slug as string });
    }
  });

  const toggleCommentLike = api.post.toggleLike.useMutation({
    async onSuccess() {
      await utils.post.getBySlug.invalidate();
    }
  });

  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [areChildrenHidden, setAreChildrenHidden] = useState(false);

  const replies: Comment[] = getReplies(id);

  const handleReply = async (text: string) => {
    return await createComment
      .mutateAsync({
        text,
        parentId: id,
        slug
      })
      .then(() => {
        setIsReplying(false);
      });
  };

  const handleCommentEdit = async (text: string) => {
    return await updateComment
      .mutateAsync({
        commentId: id,
        text,
        slug
      })
      .then(() => {
        setIsEditing(false);
      });
  };

  const handleCommentDelete = async () => {
    return await deleteComment.mutateAsync({
      commentId: id,
      slug
    });
  };

  const handleToggleCommentLike = async () => {
    if (!session) return;
    return await toggleCommentLike.mutateAsync({
      commentId: id,
      slug
    });
  };

  return (
    <>
      <div
        key={id}
        className=" tweet my-4 flex w-full transform flex-col rounded-lg border border-gray-200 bg-white px-6 py-4 transition duration-500 ease-in-out dark:border-gray-800 dark:bg-gray-900 "
      >
        <div className="mb-1 flex items-center justify-between px-2 text-xs">
          <div className="mr-3 inline-flex items-center pr-4 text-gray-900 dark:text-white">
            <Avatar src={user.image} isLoading={false} className="mr-3" />
            <div>{user.name}</div>
          </div>
          <div className="justify-end">{dateFormatter.format(createdAt)}</div>
        </div>
        {isEditing ? (
          <CommentForm
            autoFocus
            submitLabel="Update"
            initialValue={text}
            onSubmit={handleCommentEdit}
          />
        ) : (
          <div className="text">{text}</div>
        )}
        <div className="mt-2 flex gap-2">
          <IconButton
            onClick={handleToggleCommentLike}
            Icon={likedByMe ? Heart : Heartless}
            aria-label={likedByMe ? 'Unlike' : 'Like'}
            color="text-purple-700"
          >
            {likeCount}
          </IconButton>
          {session && (
            <IconButton
              onClick={() => setIsReplying((prev) => !prev)}
              Icon={Reply}
              aria-label="Reply"
              isActive={isReplying}
              color="text-purple-700"
            />
          )}
          {user.id === session?.user?.id && (
            <>
              <IconButton
                onClick={() => setIsEditing((prev) => !prev)}
                Icon={Pencil}
                aria-label="Edit"
                isActive={isEditing}
                color="text-purple-700"
              />
              <IconButton
                onClick={handleCommentDelete}
                Icon={Trash}
                aria-label="Delete"
                color="text-red-700"
                hoverbg="hover:bg-red-50"
              />
            </>
          )}
        </div>
      </div>
      {isReplying && (
        <div className="ml-3 mt-1">
          <CommentForm autoFocus submitLabel="Reply" onSubmit={handleReply} />
        </div>
      )}
      {replies?.length > 0 && (
        <>
          <div className={clsx('flex', areChildrenHidden && 'hidden')}>
            <button
              className="relative mt-2 w-[15px] -translate-x-1/2 cursor-pointer border-none bg-none p-0 outline-none before:absolute before:bottom-0 before:left-1/2 before:top-0 before:w-px before:bg-purple-200 before:transition-all before:duration-200 before:ease-in-out before:content-[''] hover:before:bg-purple-400 focus-visible:before:bg-purple-400"
              aria-label="Hide Replies"
              onClick={() => setAreChildrenHidden(true)}
            />
            <div className="grow">
              <div className="grow pl-4">
                <CommentList comments={replies} />
              </div>
            </div>
          </div>
          <button
            className={clsx(
              'relative mt-2 rounded bg-purple-600 px-4 py-2 text-sm text-white ease-in-out hover:bg-purple-400 hover:transition-colors hover:duration-100',
              !areChildrenHidden && 'hidden'
            )}
            onClick={() => setAreChildrenHidden(false)}
          >
            Show Replies
          </button>
        </>
      )}
    </>
  );
};
