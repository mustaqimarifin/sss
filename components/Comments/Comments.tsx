import { Button, IconAlertCircle, Loading, Typography } from '@supabase/ui';
import React, { FC, useEffect, useRef, useState } from 'react';
import { XD } from 'services/xD';

import {
  useAddComment,
  useComments,
  useReactions,
  useUncontrolledState
} from 'hooks';
import useAuthUtils from 'hooks/useAuthUtils';
import useUser from 'hooks/useUser';
import { getMentionedUserIds } from 'utils';
import Comment from './Comment';
import { useCommentsContext } from './CommentsProvider';
import Editor, { EditorRefHandle } from './Editor';
import { useReplyManager } from './ReplyManagerProvider';
import User from './User';
import { GhostButton } from 'components/Button';
import { SignInDialog } from 'components/SignInDialog';

export interface CommentsProps {
  topic: string;
  parentId?: string | null;
}

const Comments: FC<CommentsProps> = ({ topic, parentId = null }) => {
  const editorRef = useRef<EditorRefHandle | null>(null);
  const context = useCommentsContext();
  const [layoutReady, setLayoutReady] = useState(false);
  const replyManager = useReplyManager();
  const commentState = useUncontrolledState({ defaultValue: '' });
  const { auth, isAuthenticated, runIfAuthenticated } = useAuthUtils();

  function SubmitButton() {
    return (
      <Button
        onClick={() => {
          runIfAuthenticated(() => {
            mutations.addComment.mutate({
              topic,
              parentId,
              comment: commentState.value,
              mentionedUserIds: getMentionedUserIds(commentState.value)
            });
          });
        }}
        loading={mutations.addComment.isLoading}
        size="tiny"
        className="!px-[6px] !py-[3px] m-[3px]"
        disabled={isAuthenticated && editorRef.current?.editor()?.isEmpty}
      >
        Submit
      </Button>
    );
  }

  function SignInButton() {
    return (
      <SignInDialog
        trigger={
          <GhostButton className=" py-1 px-2 rounded bg-rose-400  text-xs text-white hover:text-gray-700 disabled:opacity-40 hover:bg-rose-300">
            Sign in
          </GhostButton>
        }
      />
    );
  }

  const queries = {
    comments: useComments({ topic, parentId }),
    user: useUser({ id: auth.user?.id! }, { enabled: !!auth.user?.id })
  };

  const mutations = {
    addComment: useAddComment()
  };

  // preload reactions
  useReactions();

  useEffect(() => {
    if (replyManager?.replyingTo) {
      commentState.setDefaultValue(
        `<span data-type="mention" data-id="${replyManager?.replyingTo.user.id}" data-label="${replyManager?.replyingTo.user.name}" contenteditable="false"></span><span>&nbsp</span>`
      );
    } else {
      commentState.setDefaultValue('');
    }
  }, [replyManager?.replyingTo]);

  useEffect(() => {
    if (mutations.addComment.isSuccess) {
      replyManager?.setReplyingTo(null);
      commentState.setDefaultValue('');
    }
  }, [mutations.addComment.isSuccess]);

  useEffect(() => {
    if (queries.comments.isSuccess) {
      // this is neccessary because tiptap on first render has different height than on second render
      // which causes layout shift. this just hides content on the first render to avoid ugly layout
      // shift that happens when comment height changes.
      setLayoutReady(true);
    }
  }, [queries.comments.isSuccess]);

  const user = queries.user.data;

  return (
    <div className={XD(context.mode, 'sce-comments relative')}>
      {queries.comments.isLoading && (
        <div className="grid p-4 place-items-center">
          <div className="mr-4">
            <Loading active>{null}</Loading>
          </div>
        </div>
      )}
      {queries.comments.isError && (
        <div className="grid p-4 place-items-center">
          <div className="flex flex-col items-center space-y-0.5 text-center">
            <Typography.Text>
              <IconAlertCircle />
            </Typography.Text>
            <Typography.Text>Unable to load comments.</Typography.Text>
          </div>
        </div>
      )}
      {queries.comments.data && (
        <div
          className={XD(
            'relative space-y-1 rounded-md',
            !layoutReady ? 'invisible' : 'visible'
          )}
        >
          <div className="space-y-1">
            {queries.comments.data.map((comment) => (
              <Comment key={comment.id} id={comment.id} />
            ))}
          </div>
          <div className="flex space-x-2">
            <div className="min-w-fit">
              <User id={user?.id} showAvatar showName={false} />
            </div>
            <div className="flex-1">
              <Editor
                ref={editorRef}
                key={commentState.key}
                defaultValue={commentState.defaultValue}
                onChange={(val) => {
                  commentState.setValue(val);
                }}
                autoFocus={!!replyManager?.replyingTo}
                actions={!isAuthenticated ? SignInButton() : SubmitButton()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
