import { PostPage } from 'lib/types';

import allPosts from './allPosts';

/* export interface PostPage {
  title: string;
  _id: string;
  slug: string;
  date: string;
}
 */
function extractSummary({ title, slug, id, date }: PostPage) {
  return {
    title,
    slug,
    id,
    date
  };
}

export const posts: PostPage[] = allPosts.map(extractSummary);
