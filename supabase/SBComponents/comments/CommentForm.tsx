import cn from 'clsx';
//import { useRouter } from 'next/router';
// import { CommentType } from 'db/types/interface';
import React, { useEffect, useRef, useState } from 'react';
import { User } from 'react-feather';
import updateFieldHeight from 'supabase/funkshunz/autosize';
import { useModal } from 'supabase/hooks/useModal';
//import punctuationRegex from 'threads/utils/regex/punctuationRegex';
import { useUser } from 'supabase/hooks/useUser';
import supabase from 'supabase/supaPublic';

// import { useComments } from 'lib/supabase/hooks/use-comments';
import Avatar from './Avatar';
import SignInModal from './SignInModal';

interface Props {
  parentId?: string | null;
  handleSubmit: any;
  cnp_id?: number | null;
  placeholder?: string;
  submitLabel?: string;
  autofocus?: boolean;
  handleResetCallback?: () => void;
  hideEarlyCallback?: () => void;
}

const CommentForm = ({
  parentId = null,
  cnp_id,
  placeholder,
  handleSubmit,
  submitLabel,
  autofocus = false,
  handleResetCallback,
  hideEarlyCallback
}: Props): JSX.Element => {
  const [text, setText] = useState<string>('');
  const [slug, setSlug] = useState(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user, profile } = useUser();
  const { open, isOpen } = useModal({
    signInModal: SignInModal
  });
  useEffect(() => {
    const slug = window.location.pathname.substring(
      window.location.pathname.lastIndexOf('/') + 1
    );
    setSlug(slug);
  }, []);

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
    if (user && profile && !profile.name) {
      open('signInModal');
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

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setText(e.target.value);
    if (textareaRef?.current) {
      updateFieldHeight(textareaRef.current);
    }
  }

  function handleReset(): void {
    setText('');
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = 'initial';
    }
    setIsLoading(false);
  }

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleSubmit(text);
    setIsLoading(true);
    hideEarlyCallback?.();

    if (!user) {
      return open('signInModal');
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
    <div className="flex flex-grow flex-col justify-between w-full min-h-10 rounded space-y-4 ">
      <div className=" flex items-center space-x-2 ">
        {!user && (
          <button
            className="focus-ring"
            onClick={() => open('signInModal')}
            aria-label="Create new account"
          >
            <User className="text-gray-600 w-7 h-7" />
          </button>
        )}
        {user && <Avatar user={user} />}

        <label className="flex-grow flex items-center cursor-text select-none focus-within-ring min-h-10">
          <span className="sr-only">Enter a comment</span>
          <textarea
            className="form-textarea flex-1 block mt-1 bg-transparent flex-grow leading-loose min-h-5 max-h-36 resize-none m-1 px-0 text-gray-700 dark:text-gray-50 placeholder-red-600 dark:placeholder-pink-200 border-none overflow-auto text-sm rounded-lg transition-opacity disabled:opacity-50 focus:outline-none focus:shadow-none focus:ring-0"
            placeholder={user ? `Add a comment...` : 'Fast Social Login'}
            rows={1}
            value={text}
            onChange={handleChange}
            ref={textareaRef}
            disabled={!user}
          ></textarea>
        </label>
        {user && (
          <div className="h-full justify-between">
            <button
              className={cn(
                'text-indigo-500 dark:text-indigo-400 hover:text-green-600 font-semibold px-2 text-xs h-full max-h-10 border border-transparent focus-ring',
                {
                  'cursor-not-allowed opacity-30': text.length < 1 || isLoading
                }
              )}
              disabled={text.length < 1}
              aria-label="Submit new post"
              onClick={onSubmit}
            >
              {submitLabel}
            </button>
            <button
              className={cn(
                'text-pink-400 dark:text-pink-200 hover:text-yellow-500 font-semibold text-xs h-full max-h-10 border border-transparent focus-ring'
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
            className="py-1 px-2 rounded bg-indigo-500 font-semibold text-sm text-white disabled:opacity-40 hover:bg-indigo-700"
            onClick={() => open('signInModal')}
            aria-label="Create new account"
            /*             onClick={(e) => {
              e.preventDefault();
              SignIn();
            }} */
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentForm;

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
