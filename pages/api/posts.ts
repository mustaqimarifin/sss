import { pathquery } from 'lib/sanity/queries';
import { sanityClient } from 'lib/sanity/server';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const posts = await sanityClient.fetch(pathquery);

    return res.json(posts);
  }
}
