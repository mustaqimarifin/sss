import { ListDetailView, SiteLayout } from 'components/Layouts';
import { PostListItem } from 'components/Posts/PostListItem';
import { PostsList } from 'components/Posts/PostsList';
import { withProviders } from 'components/Providers/withProviders';
import routes from 'config/routes';
import {
  indexQuery,
  postQuery,
  postquery,
  postSlugsQuery
} from 'lib/sanity/queries';
import { getClient, sanityClient } from 'lib/sanity/server';
import { Post, PostPage } from 'lib/types';
import { InferGetStaticPropsType } from 'next/types';
import { NextSeo } from 'next-seo';
import * as React from 'react';

//import { getContext } from 'graphql/context';
//import { GET_POSTS } from 'graphql/queries/posts';
//import { GET_VIEWER } from 'graphql/queries/viewer';
//import { addApolloState, initApolloClient } from 'lib/apollo';
import { pathquery } from '../../lib/sanity/queries';

export function PostIndex({ posts }) {
  return (
    <NextSeo
      title={routes.blog.seo.title}
      description={routes.blog.seo.description}
      openGraph={routes.blog.seo.openGraph}
    />
  );
}

PostIndex.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<PostsList />} hasDetail={false} detail={page} />
    </SiteLayout>
  );
});

export default PostIndex;

export async function getStaticProps() {
  const posts = await sanityClient.fetch(indexQuery);
  return { props: { posts } };
}
