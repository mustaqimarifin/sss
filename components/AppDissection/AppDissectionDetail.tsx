import Image from 'next/image';
import * as React from 'react';

import { DesignDetailMedia } from 'components/AppDissection/DetailMedia';
import { Detail } from 'components/ListDetail/Detail';
import { TitleBar } from 'components/ListDetail/TitleBar';
import dynamic from 'next/dynamic';
import { DesignDetailsPost } from 'data/appDissections';
import dayjs from 'dayjs';
import { MDXRemote } from 'next-mdx-remote';
// import { Post } from 'lib/types';
//import { timestampToCleanTime } from 'lib/transformers';
const SBComments = dynamic(
  () => {
    return import('components/Comments/SBComments');
  },
  { ssr: false }
);

export function AppDissectionDetail({ post }) {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const [loadComments, setComments] = React.useState(false);
  const canReply = Boolean(true);
  const date = dayjs(post.createdAt).format('h:mm a - MMM D, YYYY');

  return (
    <Detail.Container data-cy="app-detail" ref={scrollContainerRef}>
      <TitleBar
        backButton
        globalMenu={false}
        backButtonHref={'/app-dissection'}
        magicTitle
        title={post.title}
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
      />

      <Detail.ContentContainer>
        <Detail.Header>
          <div className="flex items-center space-x-6">
            <Image
              src={`/static/img/app-dissection/${post.slug}.jpeg`}
              width={80}
              height={80}
              layout="fixed"
              alt={`${post.title} icon`}
              className={'rounded-2xl'}
            />
            <div>
              <Detail.Title ref={titleRef}>{post.title}</Detail.Title>
              <span
                title={date}
                className="text-tertiary inline-block leading-snug"
              >
                {date}
              </span>
            </div>
          </div>
        </Detail.Header>

        <div className="space-y-12">
          <div className="prose tracking-wide pt-12">{post.description}</div>

          {post.details.map((detail, i) => (
            <DesignDetailMedia detail={detail} key={`${detail.title}-${i}`} />
          ))}
        </div>
      </Detail.ContentContainer>
      <div className="py-6 px-8 ">
        {canReply && !loadComments ? (
          <>
            <div className="flex justify-center space-y-2">
              <button
                className=" text-gray-600 hover:shadow-lg hover:bg-pink-400 hover:text-gray-50 rounded-md dark:hover:text-primary dark:hover:bg-white transition px-2 py-1 uppercase font-semibold text-xs text-center"
                onClick={() => setComments(!loadComments)}
              >
                Load Comments ????
              </button>
            </div>
          </>
        ) : (
          <SBComments slug={post.slug} />
        )}
      </div>
    </Detail.Container>
  );
}
