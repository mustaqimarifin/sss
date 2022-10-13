import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from 'supabase/supaPublic';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Call our stored procedure with the page_slug set by the request params slug
    await supabase.rpc('viewcount', {
      page_slug: req.query.slug as string
    });
    return res.status(200).json({
      message: `Successfully incremented page: ${req.query.slug}`
    });
  }

  if (req.method === 'GET') {
    // Query the pages table in the database where slug equals the request params slug.
    const { data } = await supabase
      .from('pages')
      .select('views')
      .eq('slug', req.query.slug);

    if (data) {
      return res.status(200).json({
        total: data[0]?.views || null
      });
    }
  }

  return res.status(400).json({
    message: 'Unsupported Request'
  });
}
