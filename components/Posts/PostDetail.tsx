/* eslint-disable react/no-children-prop */
//import Link from 'next/link';
//import { MDXRemote } from 'next-mdx-remote';
import { CoverImage } from 'components/CoverImage';
import ImageWithTheme from 'components/ImageWithTheme';
import { Detail } from 'components/ListDetail/Detail';
import { TitleBar } from 'components/ListDetail/TitleBar';
import ViewCounter from 'components/ViewCounter';
import dayjs from 'dayjs';
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
import Spender from './PostComments';
//import { MarkdownRenderer } from 'components/MarkdownRenderer';
//import { CommentType, useGetPostQuery } from 'graphql/types.generated'
//import { timestampToCleanTime } from 'lib/transformers'

//import { PostActions } from './PostActions'
//import { PostSEO } from './PostSEO'

export function PostDetail({ post, children }) {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const { open } = useModal({
    signInModal: SignInModal
  });
  const { commentId } = useComments();
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

            <div className="flex flex-col items-start  justify-between w-full mt-2 md:flex-row md:items-center">
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

            <React.Suspense fallback={null}>
              <div className="prose min-h-screen max-w-3xl">{children}</div>
              {/*           <div className="my-4">
            <ImageWithTheme
              alt="Mustaqim Arifin"
              height={ 120 }
              width={ 120 }
              sizes="20vw"
              src="/wookie.png"
              className="rounded-full dark:invert transition-colors duration-200" />
          </div> */}

              <div className="text-sm text-gray-700 dark:text-gray-300">
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
              </div>
              <div className="py-6">
                <Spender slug={post.slug} />
                {/*                 {canReply && !loadComments ? (
                  <>
                    <div className="flex justify-center space-y-2">
                      <button
                        className=" text-gray-600 hover:shadow-lg hover:bg-rose-400 hover:text-gray-700 rounded-md dark:hover:text-primary dark:hover:bg-white transition px-2 py-1 uppercase font-semibold text-xs text-center"
                        onClick={() => setComments(!loadComments)}
                      >
                        Load Comments 👺
                      </button>
                    </div>
                  </>
                ) : (
                  <CommentsContextProvider commentId={commentId}>
                    <ModalProvider>
                      <Comments slug={post.slug} />
                    </ModalProvider>
                  </CommentsContextProvider>
                )} */}
              </div>
            </React.Suspense>
          </article>
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  );
}
