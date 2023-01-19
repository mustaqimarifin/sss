/* eslint-disable react/no-children-prop */
//import Link from 'next/link';
import { CoverImage } from 'components/Image';
import ImageWithTheme from 'components/ImageWithTheme';
import { Detail } from 'components/ListDetail/Detail';
import { TitleBar } from 'components/ListDetail/TitleBar';
import LoadingSpinner from 'components/LoadingSpinner';
import ViewCounter from 'components/ViewCounter';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import * as React from 'react';
import {
  CommentsContextProvider,
  useComments
} from 'supabase/hooks/useComments';
import { ModalProvider, useModal } from 'supabase/hooks/useModal';
import Comments from 'supabase/SBComponents/comments/Comments';
import SignInModal from 'supabase/SBComponents/comments/SignInModal';
import SupaDupa from 'supabase/SBComponents/SupaDupa';
//import SupaDupa from 'supabase/SBComponents/SupaDupa';
import supabase from 'supabase/supaPublic';

//import { Comments, CommentsProvider } from 'SupaComponents';
import PageTitle from './PageTitle';
//import { MarkdownRenderer } from 'components/MarkdownRenderer';
//import { CommentType, useGetPostQuery } from 'graphql/types.generated'
//import { timestampToCleanTime } from 'lib/transformers'
//import { PostActions } from './PostActions'
import { PostSEO } from './PostSEO';
const SBComments = dynamic(
  () => {
    return import('components/Comments/SBComments');
  },
  { ssr: false }
);

export function PostDetail({ post, children }) {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  const [loadComments, setComments] = React.useState(false);
  const canReply = Boolean(true);

  //const { data: post, error } = useSWR('/api/blog', fetcher);

  //if (error) return <div>failed to load</div>;
  // if (!post) return <div>loading...</div>;
  /*   React.useEffect(() => {
    async function fetchPost() {
      const response =  await fetch(`/api/blog/${post.slug}`;
      const fetchedPost = await response.json();
      setPost(fetchedPost);
    }
    fetchPost();
  }, []); */
  /*   if (loading) {
    return <Detail.Loading />;
  }

  if (!data?.post || error) {
    return <Detail.Null />;
  } */
  // const { post } = data;
  //  const publishedAt = timestampToCleanTime({ timestamp: post.publishedAt });
  return (
    <>
      <PostSEO post={post} />

      <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={'/blog'}
          magicTitle
          title={post.title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
          // trailingAccessory={<PostActions post={post} />}
        />

        <Detail.ContentContainer>
          <article className=" px-8  mx-auto mb-16">
            <Detail.Header>
              <CoverImage src={post.caption} />

              <Detail.Title ref={titleRef}>
                <PageTitle>{post.title}</PageTitle>
              </Detail.Title>
            </Detail.Header>

            <div className="mb-16 flex flex-col items-start  justify-between w-full mt-2 md:flex-row md:items-center">
              <div className="flex items-center">
                <ImageWithTheme
                  alt="Mustaqim Arifin"
                  height={28}
                  width={28}
                  sizes="20vw"
                  src="/wookie.png"
                  className="rounded-full dark:invert"
                />
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {'Mustaqim Arifin | '}
                  {dayjs(post.date).format('MMMM DD, YYYY')}
                </p>
              </div>
              <div className="flex gap-2 items-center mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                {post.readingTime}
                {` • `}
                <ViewCounter slug={post.slug} />
                {` • `}
                <div className="flex">
                  {post.tags?.length &&
                    post.tags
                      .slice(0)
                      .map((tag, index) => <div key={index}>{tag}</div>)}
                </div>
              </div>
            </div>

            <div className="prose w-full max-w-3xl">
              {children}
              <div className="not-prose ">
                {canReply && !loadComments ? (
                  <>
                    <div>
                      <h2 className="text-center font-mono font-semibold my-8">
                        Comments
                      </h2>
                      <button
                        className=" text-gray-600 hover:shadow-lg hover:bg-pink-400 hover:text-gray-50 rounded-md dark:hover:text-primary dark:hover:bg-white transition px-2 py-1 uppercase font-semibold text-xs text-center"
                        onClick={() => setComments(!loadComments)}
                      >
                        Load Comments 👺
                      </button>
                    </div>
                  </>
                ) : (
                  <SBComments slug={post.slug} />
                )}
              </div>
            </div>

            {/*               <div className=" my-4 text-sm text-gray-700 dark:text-gray-300">
                <a
                  href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                    `https://sss-lake.vercel.app/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'Discuss on Twitter'}
                </a>
                {` • `}
                <a
                  href="https://github.com/mustaqimarifin/sss-lake.vercel.app/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'Suggest Change'}
                </a>
              </div> */}
          </article>
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  );
}
