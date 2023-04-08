import CommentComponent from 'components/CommentComponent';
import { CoverImage } from 'components/Image';
import ImageWithTheme from 'components/ImageWithTheme';
import { Detail } from 'components/ListDetail/Detail';
import { TitleBar } from 'components/ListDetail/TitleBar';
import ViewCounter from 'components/ViewCounter';
import dayjs from 'dayjs';
import type { Post } from 'lib/types';
import * as React from 'react';

import PageTitle from './PageTitle';
import { PostSEO } from './PostSEO';
type Props = {
  children: React.ReactNode;
  post: Post;
};

export function PostDetail({ children, post }: Props) {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

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
          //@ts-ignore
          titleRef={titleRef}
          //@ts-ignore
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

            <div className="mb-16 flex flex-col items-start uppercase text-center font-semibold  justify-between w-full mt-2 md:flex-row md:items-center">
              <div className="flex gap-2  items-center mt-2 text-sm text-gray-600 dark:text-gray-400  md:mt-0">
                {dayjs(post.date).format('MMMM DD, YYYY')}
                {` • `}

                <ViewCounter slug={post.slug} />
                {` • `}
                <div className="flex space-x-2">
                  {post.tags?.length &&
                    post.tags
                      .slice(0)
                      .map((tag: any, index: any) => (
                        <div key={index}>{tag}</div>
                      ))}
                </div>
              </div>
            </div>

            <div className="prose dark:prose-dark font-imp w-full max-w-3xl">
              {children}
            </div>
            <CommentComponent slug={post.slug} />

            <div></div>

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
          {/*          <CommentsContextProvider commentId={commentId}>
            <Comments topic={post.slug} />
          </CommentsContextProvider> */}
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  );
}
