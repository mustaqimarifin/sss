import type { GetServerSideProps } from 'next';
import { generateRSSFeed } from 'services/rss';
import { getClient } from 'lib/sanity/server';
import type { Post } from 'lib/types';

const RSS = () => {
  return null;
};

export default RSS;

export const getServerSideProps: GetServerSideProps = async ({
  res,
  preview = false
}) => {
  const posts: Array<Post> = await getClient(preview).fetch(
    `*[_type == "post"] | order(date desc) {...,"slug": slug.current, "id": _id}`
  );
  const rss = generateRSSFeed(posts);
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(rss);
  res.end();

  return { props: {} };
};
