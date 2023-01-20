import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ListContainer } from 'components/ListDetail/ListContainer';
import { TitleBar } from 'components/ListDetail/TitleBar';
import { posts } from 'data/postIndex';
import { PostPage, PostPageGroup } from 'lib/types';
import { yespls } from 'lib/yespls';
//import { posts } from 'data/postIndex';
//import fetcher from 'lib/fetcher';
import router, { useRouter } from 'next/router';
import * as React from 'react';
import useSWR from 'swr';

//import useSWR from 'swr';
//import LoadingSpinner from '../LoadingSpinner';
import { PostListItem } from './PostListItem';

export const PostsList = () => {
  const router = useRouter();
  const [scrollContainerRef, setScrollContainerRef] = React.useState(null);

  //** Fetch directly from Sanity Studio through API route */
  /*   const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/posts');
      const fetchedPosts = await res.json();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, [setPosts]); */
  const { data: posts } = useSWR<PostPageGroup>('/api/posts', yespls);

  /*   const { data: posts } = useQuery<PostPageGroup>({
    queryKey: ['posts'],
    queryFn: async () => await axios.get(`/api/posts`).then((res) => res.data)
  }); */

  return (
    <>
      <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
        <TitleBar scrollContainerRef={scrollContainerRef} title="Blog" />

        <div className="lg:space-y-1 lg:p-3">
          {posts?.map((post: PostPage) => {
            const active = router.query?.slug === post.slug;

            return <PostListItem key={post.slug} post={post} active={active} />;
          })}
        </div>
      </ListContainer>
    </>
  );
};
