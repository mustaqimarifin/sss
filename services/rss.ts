import { Feed, Item } from 'feed';
import type { Post } from 'lib/types';
import { urlForImage } from 'lib/sanity/sanity';
export const generateRSSFeed = (posts: Array<Post>) => {
  const isDev = process.env.NODE_ENV || 'development';
  const baseURL = isDev
    ? 'http://localhost:3000'
    : 'https://mstqmarfn.vercel.app';

  const author = {
    name: 'Mustaqim Arifin',
    link: 'https://twitter.com/vmprmyth',
    email: 'mustaqim.arifin@gmail.com'
  };

  const feed = new Feed({
    title: 'Posts - Mustaqim Arifin',
    description: 'music | business | bad code',
    id: baseURL,
    link: baseURL,
    language: 'en',
    author,
    copyright: `Copyright © ${new Date().getFullYear()} Mustaqim Arifin`,
    feedLinks: {
      rss2: `${baseURL}/rss.xml`
    }
  });

  posts?.forEach((post) => {
    const item: Item = {
      title: post.title,
      id: post._id,
      date: new Date(post.date),
      link: `${baseURL}/blog/${post.slug}`,
      author: [{ ...author }],
      description: post.excerpt
    };

    if (post.coverImage) {
      const image = urlForImage(post.coverImage).url();
      item.image = image;
    }

    feed.addItem(item);
  });

  return feed.rss2();
};
