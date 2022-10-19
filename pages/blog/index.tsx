import { ListDetailView, SiteLayout } from 'components/Layouts';
import { PostsList } from 'components/Posts/PostsList';
import { withProviders } from 'components/Providers/withProviders';
import routes from 'config/routes';
import { indexQuery, postQuery, postquery } from 'lib/sanity/queries';
import { getClient } from 'lib/sanity/server';
import { Post, PostPage } from 'lib/types';
import { NextSeo } from 'next-seo';
import * as React from 'react';

//import { getContext } from 'graphql/context';
//import { GET_POSTS } from 'graphql/queries/posts';
//import { GET_VIEWER } from 'graphql/queries/viewer';
//import { addApolloState, initApolloClient } from 'lib/apollo';
import { pathquery } from '../../lib/sanity/queries';

/* export async function getStaticProps({ preview = false }) {
  const posts: PostPage[] = await getClient(preview).fetch(pathquery);

  return { props: { posts } };
}
 */
function PostIndex() {
  return (
    <NextSeo
      title={routes.blog.seo.title}
      description={routes.blog.seo.description}
      openGraph={routes.blog.seo.openGraph}
    />
  );
}

PostIndex.getLayout = withProviders(function getLayout(
  page: React.ReactElement<any, string | React.JSXElementConstructor<any>>
) {
  return (
    <SiteLayout>
      <ListDetailView list={<PostsList />} hasDetail={false} detail={page} />
    </SiteLayout>
  );
});

export default PostIndex;
