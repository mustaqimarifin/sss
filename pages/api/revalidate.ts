import { isValidRequest } from '@sanity/webhook';
import { postUpdatedQuery } from 'lib/sanity/queries';
import { sanityClient } from 'lib/sanity/server';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // This isn't working yet - not sure why
  if (!isValidRequest(req, process.env.SANITY_REVALIDATE_SECRET)) {
    return res.status(401).json({ message: 'Invalid request' });
  }

  const { _id: id } = req.body;
  if (typeof id !== 'string' || !id) {
    return res.status(400).json({ message: 'Invalid _id' });
  }

  try {
    const slug = await sanityClient.fetch(postUpdatedQuery, { id });
    await Promise.all([
      res.revalidate('/blog'),
      res.revalidate(`/blog/${slug}`)
    ]);
    return res.status(200).json({ message: `Updated ${slug}` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
