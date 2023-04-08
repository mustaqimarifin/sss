import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import readingTime from 'reading-time';
import reLINK from 'rehype-autolink-headings';
import reCODE from 'rehype-code-titles';
//!! DONT DELETE YET !!//
import reSLUG from 'rehype-slug';
import reSHART from 'remark-gfm';

import imageMetadata from './image-metadata';

const root = process.cwd();

export async function mdxToHtml(source: string) {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }
  const { code } = await bundleMDX({
    source: source,
    cwd: path.join(root, 'components'),
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), reSHART];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [
          reSLUG,
          reCODE,
          imageMetadata,

          [
            reLINK,
            {
              properties: {
                className: ['anchor']
              }
            }
          ]
        ]
      ];

      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx'
      };
      return options;
    }
  });
  const tweetMatches = source.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  const tweetIDs =
    tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
  return {
    mdx: code,
    tweetIDs: tweetIDs || [],
    wordCount: source.split(/\s+/gu).length,
    readingTime: readingTime(source).text
  };
}
