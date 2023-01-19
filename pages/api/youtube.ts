// import { google } from 'googleapis';
import { youtube } from '@googleapis/youtube';
import gAuth from 'lib/google';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth = await gAuth.getClient();
  const uBoob = youtube({
    auth,
    version: 'v3'
  });

  const response = await uBoob.channels.list({
    id: ['UCd-pjthLQYLYVdN7GNwJgyA'],
    part: ['statistics']
  });

  const channel = response.data.items[0];
  const { subscriberCount, viewCount, videoCount } = channel.statistics;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    subscriberCount,
    viewCount,
    videoCount
  });
}
