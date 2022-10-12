import allPosts from './allPosts';
import { PostPage } from 'lib/types';

/* export interface PostPage {
  title: string;
  _id: string;
  slug: string;
  date: string;
}
 */
function extractSummary({ title, slug, _id, date }: PostPage) {
  return {
    title,
    slug,
    _id,
    date
  };
}

export const posts: PostPage[] = allPosts.map(extractSummary);
