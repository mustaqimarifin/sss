import { ListDetailView, SiteLayout } from 'components/Layouts';
import { Detail } from 'components/ListDetail/Detail';
import { MDSEX, MDXComponents } from 'components/MDXComponents';
import { PostDetail } from 'components/Posts/PostDetail';
import { PostsList } from 'components/Posts/PostsList';
import { withProviders } from 'components/Providers/withProviders';
import Tweet from 'components/teets';
import { mdxToHtml } from 'lib/mdxBundler';
import { postQuery, postSlugsQuery } from 'lib/sanity/queries';
import { getPost, getSlugs } from 'lib/sanity/sanity.client';
import { getClient, sanityClient } from 'lib/sanity/server';
import { getTweets } from 'lib/twitter';
import type { Post } from 'lib/types';

import LoadingSpinner from '../../components/LoadingSpinner';

type PPage = {
  post: Post;
  loading: boolean;
  tweets: any;
};

function PostPage({ post, loading }: PPage) {
  if (!post) return <Detail.Null />;
  if (loading) return <LoadingSpinner />;

  return (
    <PostDetail post={post}>
      <MDSEX mdx={post?.content} tweets={post.tweets} />
    </PostDetail>
  );
}

export async function getStaticPaths() {
  const posts = await getSlugs();
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));
  console.log(paths);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params, preview = false }) {
  const post: Post = await getPost(params.slug);

  if (!post) {
    return { notFound: true };
  }

  const { mdx, tweetIDs, wordCount, readingTime } = await mdxToHtml(
    post.content
  );
  const tweets = await getTweets(tweetIDs);

  return {
    props: {
      post: {
        ...post,
        content: mdx,
        tweets,
        wordCount,
        readingTime
      },

      revalidate: 0
    }
  };
}
PostPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={page} />
    </SiteLayout>
  );
});

export default PostPage;
