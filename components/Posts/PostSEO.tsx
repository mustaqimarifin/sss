import { baseUrl } from 'config/seo';
import { type Post } from 'lib/types';
import { NextSeo } from 'next-seo';
import * as React from 'react';

type Props = {
  post: Post;
};

export function PostSEO({ post }: Props) {
  return (
    <NextSeo
      title={post.title}
      description={post.excerpt}
      openGraph={{
        title: post.title,
        url: `${baseUrl}/blog/${post.slug}`,
        description: post.excerpt,
        images: [
          {
            url:
              post.coverImage || `${baseUrl}/static/img/blog/${post.slug}.png`,
            alt: post.title
          }
        ]
      }}
      twitter={{
        cardType: 'summary_large_image'
      }}
    />
  );
}
