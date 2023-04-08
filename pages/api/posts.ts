import { fetch, get } from 'lib/redis/cache';
import { indexQuery } from 'lib/sanity/queries';
import { sanityClient } from 'lib/sanity/server';
import type { PostPageGroup } from 'lib/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const key = 'posts';
  const posts: PostPageGroup = await sanityClient.fetch(indexQuery);

  const postcache = await fetch(key, () => posts, 60 * 60 * 24);

  console.log(postcache);
  if (postcache) {
    const getcache: PostPageGroup = await get(key);
    console.log(key);
    return res.status(200).json(getcache);
  } else {
    return res.status(200).json(posts);
  }
}
