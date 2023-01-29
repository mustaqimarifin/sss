import { ListItem } from 'components/ListDetail/ListItem';
import { timestampToCleanTime } from 'lib/transformers';
import type { PostPage } from 'lib/types';
import * as React from 'react';

interface Props {
  post: PostPage;
  active: boolean;
}

export const PostListItem = React.memo<Props>(({ post, active }) => {
  const publishedAt = timestampToCleanTime({ timestamp: post.date });
  return (
    <ListItem
      href="/blog/[slug]"
      as={`/blog/${post.slug}`}
      title={post.title}
      byline={post.date ? publishedAt.formatted : 'Draft'}
      active={active}
    />
  );
});
