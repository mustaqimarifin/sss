import cn from 'classnames';
//import { useRouter } from 'next/router
import fetcher from 'lib/fetcher';
import React, { useEffect, useRef, useState } from 'react';
import { User } from 'react-feather';
import { useModal } from 'supabase/hooks/useModal';
//import punctuationRegex from 'threads/utils/regex/punctuationRegex';
import { useUser } from 'supabase/hooks/useUser';
import supabase from 'supabase/supaPublic';
import useSWR from 'swr';

import Avatar from './Avatar';
import NewUserModal from './NewUserModal';
import SignInModal from './SignInModal';
const StickyLogin = ({
  parentId = null,
  cnp_id,
  placeholder,
  handleSubmit,
  submitLabel,
  autofocus = false,
  handleResetCallback,
  hideEarlyCallback
}) => {
  const [text, setText] = useState('');
  const [slug, setSlug] = useState(null);
  const textareaRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user, profile } = useUser();
  const { open, isOpen } = useModal({
    signInModal: SignInModal,
    newUserModal: NewUserModal
  });

  const SignOut = async () => {
    await supabase.auth.signOut();
  };

  //const [comments, setComments] = useState([]);
  //const [activeComment, setActiveComment] = useState(null);
  //const { mutateGlobalCount } = useComments();
  //const user = supabase.auth.user();
  /*   const query = new window.location.pathname();
    const slug = query.split('/').slice(2); */
  /*   let slug = (url) => new URL(url).pathname.match(/[^\/]+/g);
   */
  useEffect(() => {
    if (user && profile && (!profile.full_name || !profile.username)) {
      open('newUserModal');
    }
  }, [user, profile]);
  useEffect(() => {
    if (!isOpen) {
      setIsLoading(false);
    }
  }, [isOpen]);
  useEffect(() => {
    if (autofocus) {
      if (textareaRef && textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  }, [autofocus]);

  function handleReset() {
    setText('');
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = 'initial';
    }
    setIsLoading(false);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(text);
    setIsLoading(true);
    hideEarlyCallback?.();
    if (!user) {
      return open('signInModal');
    }
    if (!profile) {
      return open('newUserModal');
    }
    handleReset();
    handleResetCallback?.();
  };
  /* const comment = {
        authorId: user?.id,
        text: text,
        parentId: parentId || null,
        slug
      };
  
  
      const { data, error } = await supabase.from('comments').insert([comment]);
      if (error) {
        console.log(error);
      } else {
        return data;
      } */
  return (
    <div className=" flex flex-col items-center  justify-between rounded  ">
      <div className=" flex space-x-2 ">
        {!user && (
          <button
            className="focus-ring"
            onClick={() => open('signInModal')}
            aria-label="Create new account"
          >
            <User className="text-gray-600 w-7 h-7" />
          </button>
        )}
        {user && <Avatar profile={profile} />}
        {}
        {user && (
          <div className="">
            <button
              className={cn(
                'text-pink-400 dark:text-pink-200 hover:text-yellow-500 font-semibold text-xs  border border-transparent focus-ring'
              )}
              aria-label="Sign Out"
              onClick={(e) => {
                e.preventDefault();
                SignOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
        {!user && (
          <button
            className=" drop-shadow-mdpy-1 px-2 rounded font-semibold text-sm text-gray-700 disabled:opacity-40 hover:bg-indigo-700"
            onClick={() => open('signInModal')}
            aria-label="Create new account"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};
export default StickyLogin;
/*  mutateComments(async (pages) => {
          const optimisticReply = {
            ...comment,
            author: profile,
            highlight: true,
            createdAt: new Date().toISOString()
          };
          const newData = [optimisticReply, ...pages];
          return newData;
        }, false); */
/*     const { data, error } = await supabase.from('comments').insert([comment]);
        if (error) console.log('error', error);
        else setComments([comment, ...comments]);
        setActiveComment(null); */
/*     mutateComments(async (staleReplies) => {
          const newReply = {
            ...data?.[0],
            author: profile,
            replies: []
          };
          const filteredReplies = staleReplies.filter(
            (reply) => reply.slug !== newReply.slug
          );
          const newData = [[newReply], ...filteredReplies];
          return newData;


  /*   const onSubmit = (event) => {
          event.preventDefault();
          handleSubmit(text);
          setText('');
        }; */
/* <div className="flex items-center mt-4">
   {session?.user && (
     <div className="flex items-center space-x-6">
       <button className="py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700">
         Send
       </button>
       <button
         className="text-gray-500"
         onClick={() => supabase.auth.signOut()}
       >
         Log out
       </button>
     </div>
   )}
   {!session?.user && (
     <button
       type="button"
       className="py-2 px-4 rounded bg-indigo-500 text-white disabled:opacity-40 hover:bg-blue-700"
       onClick={() => open('signInModal')}
     >
       Log In
     </button>
   )}
 </div>; */
/* <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!author}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form> */
/* const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const author = supabase.auth.user();

  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!author}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm; */
