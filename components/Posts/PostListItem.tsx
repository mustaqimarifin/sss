import { ListItem } from 'components/ListDetail/ListItem';
import { timestampToCleanTime } from 'lib/transformers';
import { PostPage } from 'lib/types';
import * as React from 'react';

interface Props {
  post: PostPage;
  active: boolean;
}

export const PostListItem = React.memo<Props>(({ post, active }) => {
  const publishedAt = timestampToCleanTime({ timestamp: post.date });
  return (
    <li key={post.slug}>
      <ListItem
        href="/blog/[slug]"
        as={`/blog/${post.slug}`}
        title={post.title}
        description={null}
        byline={post.date ? publishedAt.formatted : 'Draft'}
        active={active}
      />
    </li>
  );
});
