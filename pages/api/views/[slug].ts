import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server10/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req?.query?.slug?.toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.post.upsert({
        where: { slug },
        create: {
          slug
        },
        update: {
          count: {
            increment: 1
          }
        }
      });

      return res.status(200).json({
        total: newOrUpdatedViews.count.toString()
      });
    }

    if (req.method === 'GET') {
      const views = await prisma.post.findUnique({
        where: {
          slug
        }
      });

      return res.status(200).json({ total: views?.count.toString() || null });
    }
  } catch (e) {
    return res.status(500).json({ message: e });
  }
}
