//import { serialize } from 'next-mdx-remote/serialize';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import React from 'react';
import readingTime from 'reading-time';
import reLINK from 'rehype-autolink-headings';
import reCODE from 'rehype-code-titles';
//!! DONT DELETE YET !!//
import rehypePrettyCode from 'rehype-pretty-code';
import reSLUG from 'rehype-slug';
import reSHART from 'remark-gfm';

const syntax = {
  //theme: JSON.parse(fs.readFileSync('./lib/moonlight-ii.json', 'utf-8')),
  theme: 'slack-ochin',
  onVisitLine(node: { children: string | any[] }) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node: { properties: { className: string[] } }) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node: { properties: { className: string[] } }) {
    node.properties.className = ['word'];
  }
};

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
    source,
    // mdx imports can be automatically source from the components directory
    cwd: path.join(root, 'components'),
    mdxOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.

      options.remarkPlugins = [...(options.remarkPlugins ?? []), reSHART];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [
          reSLUG,
          reCODE,
          [rehypePrettyCode, syntax],

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
  const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);
  return {
    mdx: code,
    tweetIDs: tweetIDs || [],
    wordCount: source.split(/\s+/gu).length,
    readingTime: readingTime(source).text
  };
}
