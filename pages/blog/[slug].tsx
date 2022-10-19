/* eslint-disable react/no-children-prop */
//import { mdxToHtml } from 'components/MarkdownRenderer';
//import { Post } from 'lib/types';
import { ListDetailView, SiteLayout } from 'components/Layouts';
import { Detail } from 'components/ListDetail/Detail';
import components from 'components/MDXComponents';
import { PostDetail } from 'components/Posts/PostDetail';
import { PostsList } from 'components/Posts/PostsList';
import { withProviders } from 'components/Providers/withProviders';
//import BlogLayout from 'layouts/blog';
import Tweet from 'components/Tweet';
import { mdxToHtml } from 'lib/mdx';
import { postQuery, postSlugsQuery } from 'lib/sanity/queries';
import { getClient, sanityClient } from 'lib/sanity/server';
import { getTweets } from 'lib/twitter';
import { MDXRemote } from 'next-mdx-remote';

import LoadingSpinner from '../../components/LoadingSpinner';

function PostPage({ post, loading }) {
  const StaticTweet = ({ id }) => {
    const tweet = post.tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };
  if (!post) return <Detail.Null />;
  if (loading) return <LoadingSpinner />;

  return (
    <PostDetail post={post}>
      <MDXRemote
        {...post.content}
        components={
          {
            ...components,
            StaticTweet
          } as any
        }
      />
    </PostDetail>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug
  });

  if (!post) {
    return { notFound: true };
  }

  const { html, tweetIDs } = await mdxToHtml(post.content);
  const tweets = await getTweets(tweetIDs);

  return {
    props: {
      post: {
        ...post,
        content: html,
        tweets
      },
      revalidate: 60 * 60
    }
  };
}
PostPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<PostsList />} hasDetail detail={page} />
    </SiteLayout>
  );
});

export default PostPage;
