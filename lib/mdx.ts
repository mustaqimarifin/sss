import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';

//!! DONT DELETE YET !!//

// import remarkGfm from 'remark-gfm';
// import rehypeSlug from 'rehype-slug';
// import rehypeCodeTitles from 'rehype-code-titles';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// ?? `Just goin full on stupid with URL Imports since it got me all nostalgic on how webdev was for a good while XD //

import reCODE from 'https://cdn.skypack.dev/-/rehype-code-titles@v1.1.0-rce7VeQLvZaNixdqcQJt/dist=es2019,mode=imports/optimized/rehype-code-titles.js';
import reSLUG from 'https://cdn.skypack.dev/pin/rehype-slug@v5.0.1-syjjWioHvkx5fSuy1T2Z/mode=imports,min/optimized/rehype-slug.js';
import reLINK from 'https://cdn.skypack.dev/pin/rehype-autolink-headings@v6.1.1-HqGhLKhGvX6VR2qCWBNr/mode=imports,min/optimized/rehype-autolink-headings.js';
import reSHART from 'https://cdn.jsdelivr.net/npm/remark-gfm@3.0.1/index.min.js';
import rehypePrism from 'https://cdn.jsdelivr.net/npm/rehype-prism-plus@1.5.0/dist/rehype-prism-plus.es.min.js';
// import reMARK from 'https://cdn.skypack.dev/pin/remark-gfm@v3.0.1-JxSnDfYDk3b5E6yCEcuo/mode=imports,min/optimized/remark-gfm.js'

export async function mdxToHtml(source) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [reSHART],
      rehypePlugins: [
        reSLUG,
        reCODE,
        rehypePrism,
        [
          reLINK,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ],
      format: 'mdx'
    }
  });

  const tweetMatches = source.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);

  return {
    html: mdxSource,
    tweetIDs: tweetIDs || [],
    wordCount: source.split(/\s+/gu).length,
    readingTime: readingTime(source).text
  };
}
