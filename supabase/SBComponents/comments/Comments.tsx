import React, { useEffect, useState } from 'react';
import { useUser } from 'supabase/hooks/useUser';

import Comment from './Comment';
import CommentForm from './CommentForm';
import {
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  getComments as getCommentsApi
} from './kopee';

const Comments = ({ slug }) => {
  const { user, profile } = useUser();
  const [comments, setComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  const rootComments = comments.filter((comment) => comment.parentId === null);

  const getReplies = (commentId) =>
    comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const addComment = (text, parentId = null) => {
    createCommentApi(text, parentId, slug, user, profile).then((comment) => {
      setComments([comment, ...comments]);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi(commentId).then(() => {
        const updatedComment = comments.filter(
          (comment) => comment.id !== commentId
        );
        setComments(updatedComment);
      });
    }
  };

  useEffect(() => {
    getCommentsApi(slug).then((data) => {
      setComments(data);
    });
  }, [slug]);

  return (
    <div id="supadupa" className="mt-5 p-2 w-full">
      <h3 className="text-2xl mb-5 font-gt text-center w-full">Comments</h3>
      <CommentForm
        submitLabel="Post"
        placeholder="REPLYYY"
        /* {`Reply to comment by ${comments.filter((comment) => {
            comment.author;
          })}`} */
        handleSubmit={addComment}
        handleResetCallback={undefined}
        hideEarlyCallback={undefined}
      />
      <div className="mt-2 overscroll-contain">
        <div className="comments-container">
          {rootComments.map((x) => (
            <Comment
              key={x.id}
              comment={x}
              replies={getReplies(x.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              authorId={user?.id}
              pageIndex={undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
