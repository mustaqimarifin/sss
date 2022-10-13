import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import reLINK from 'rehype-autolink-headings';
import reCODE from 'rehype-code-titles';
//!! DONT DELETE YET !!//
import rehypePrettyCode from 'rehype-pretty-code';
import reSLUG from 'rehype-slug';
import reSHART from 'remark-gfm';
//const require = createRequire(import.meta.url)
// import theme from "shiki/themes/slack-ochin.json";
//const remarkCodeHike = require('@code-hike/mdx')
//import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki';
// import rehypePrism from 'rehype-prism-plus';

// ?? `Just goin full on stupid with URL Imports since it got me all nostalgic on how webdev was for a good while XD //

/* import reCODE from 'https://cdn.skypack.dev/-/rehype-code-titles@v1.1.0-rce7VeQLvZaNixdqcQJt/dist=es2019,mode=imports/optimized/rehype-code-titles.js';
import reSLUG from 'https://cdn.skypack.dev/pin/rehype-slug@v5.0.1-syjjWioHvkx5fSuy1T2Z/mode=imports,min/optimized/rehype-slug.js';
import reLINK from 'https://cdn.skypack.dev/pin/rehype-autolink-headings@v6.1.1-HqGhLKhGvX6VR2qCWBNr/mode=imports,min/optimized/rehype-autolink-headings.js';
import reSHART from 'https://cdn.jsdelivr.net/npm/remark-gfm@3.0.1/index.min.js';
import rehypePrism from 'https://cdn.jsdelivr.net/npm/rehype-prism-plus@1.5.0/dist/rehype-prism-plus.es.min.js'; */
// import reMARK from 'https://cdn.skypack.dev/pin/remark-gfm@v3.0.1-JxSnDfYDk3b5E6yCEcuo/mode=imports,min/optimized/remark-gfm.js'

/* try {
  // Note that jsonString will be a <Buffer> since we did not specify an
  // encoding type for the file. But it'll still work because JSON.parse() will
  // use <Buffer>.toString().
  const jsonString = fs.readFileSync('./lib/moonlight-ii.json');
  const moonLight = JSON.stringify(jsonString);
} catch (err) {
  console.log(err);
  return;
}
console.log(customer.address); */
const options = {
  //theme: JSON.parse(fs.readFileSync('./lib/moonlight-ii.json', 'utf-8')),
  theme: 'slack-ochin',
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  }
};

export async function mdxToHtml(source: string) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [reSHART],
      rehypePlugins: [
        reSLUG,
        reCODE,
        [rehypePrettyCode, options],

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
