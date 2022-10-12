import { ListContainer } from 'components/ListDetail/ListContainer';
// import { useGetPostsQuery } from 'graphql/types.generated';
import { TitleBar } from 'components/ListDetail/TitleBar';
import { posts } from 'data/postIndex';
import fetcher from 'lib/fetcher';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import LoadingSpinner from '../LoadingSpinner';
import { PostListItem } from './PostListItem';

export const PostsList = React.memo(() => {
  const router = useRouter();
  let [scrollContainerRef, setScrollContainerRef] = React.useState(null);

  //** Fetch directly from Sanity Studio through API route */
  /*   const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('/api/posts');
      const fetchedItems = await response.json();
      setItems(fetchedItems);
    }
    fetchItems();
  }, []); */

  return (
    <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
      <TitleBar scrollContainerRef={scrollContainerRef} title="Blog" />

      <div className="lg:space-y-1 lg:p-3">
        {posts.map((post) => {
          const active = router.query?.slug === post.slug;

          return (
            <ul key={post.slug}>
              <PostListItem key={post.slug} post={post} active={active} />
            </ul>
          );
        })}
      </div>
    </ListContainer>
  );
});
