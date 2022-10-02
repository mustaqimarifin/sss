// import RSS from 'rss';
import { Feed } from 'feed';
import { sanityClient } from 'lib/sanity/server';
import { indexQuery } from 'lib/sanity/queries';

export async function getServerSideProps({ res }) {
  const feed = new Feed({
    title: 'Mustaqim Arifin',
    id: 'https://eff1gy.vercel.app',
    feedLinks: {
      xml: 'https://eff1gy.vercel.app/feed.xml'
    },
    copyright: 'Mustaqim Arifin'
  });

  const allPosts = await sanityClient.fetch(indexQuery);
  allPosts.map((post) => {
    feed.addItem({
      id: 'https://eff1gy.vercel.app',
      title: post.title,
      link: `https://eff1gy.vercel.app/blog/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      copyright: 'Mustaqim Arifin',
      date: post.date,
      image: post.coverImage,
      author: [
        {
          name: 'Mustaqim Arifin',
          email: 'mustaqim.arifin@gmail.com',
          link: 'https://eff1gy.vercel.app'
        }
      ]
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(feed.rss2());
  console.log(feed.rss2);
  res.end();

  return {
    props: {}
  };
}

export default function RSSFeed() {
  return null;
}
