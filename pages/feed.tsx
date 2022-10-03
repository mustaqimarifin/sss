// import RSS from 'rss';
import { Feed, Item } from 'feed';
import { sanityClient } from 'lib/sanity/server';
import { indexQuery } from 'lib/sanity/queries';

export async function getServerSideProps({ res }) {
  const baseURL = 'https://sss-lake.vercel.app';
  const author = {
    name: 'Mustaqim Arifin',
    link: 'https://twitter.com/vmprmyth',
    email: 'mustaqim.arifin@gmail.com'
  };
  const feed = new Feed({
    title: '[eff1gy] - FEED',
    description: 'music | business | bad code',
    id: baseURL,
    link: baseURL,
    image: `${baseURL}/tt.jpg`,
    favicon: `${baseURL}/static/favicons/favicon.ico`,
    copyright: `Copyright © ${new Date().getFullYear()} Mustaqim Arifin`,
    generator: 'awesome',
    feedLinks: {
      json: `${baseURL}/feed`
    },
    author: author
  });

  const allPosts = await sanityClient.fetch(indexQuery);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post._id,
      link: `${baseURL}/blog/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      date: new Date(post.date),
      author: [author],
      image: post.caption
    });
  });

  feed.addCategory('BlogPost');

  res.setHeader('Content-Type', 'application/feed+json', 'charset=UTF-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(feed.json1());
  res.end();

  return {
    props: {}
  };
}

export default function JSONFeed() {
  return null;
}
