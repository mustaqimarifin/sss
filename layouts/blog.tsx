import Image from 'next/future/image';
import { PropsWithChildren, Suspense, useState } from 'react';
import Container from 'components/Container';
import ViewCounter from 'components/ViewCounter';
import { Post } from 'lib/types';
import { urlForImage } from 'lib/sanity/sanity';
import { XD } from 'services/xD';
import ImageWithTheme from 'components/ImageWithTheme';
import dayjs from 'dayjs';
// import Tag from 'components/tag';
//import { CoverImage } from 'components/CoverImage';
//import SanityImg from 'components/SanityImg';
export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Post }>) {
  const [isLoading, setLoading] = useState(true);

  /*   const imageProps = post?.coverImage ?? GetImage(post?.coverImage); */
  return (
    <Container
      className="flex flex-col"
      title={`${post.title} – Mustaqim Arifin`}
      description={post.excerpt}
      image={urlForImage(post.coverImage).url()}
      date={new Date(post.date).toISOString()}
      type="article"
    >
      <div className="relative mx-auto   mb-6 content-center overflow-hidden justify-center md:rounded-lg   md:max-w-5xl ">
        <Image
          src={post.caption}
          alt={''}
          width={680}
          height={503}
          priority
          className={XD(
            ' flex object-cover object-top justify-center items-center w-full aspect-[21/9] lg:max-w-7xl mx-auto duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 items-center opacity-80  bg-gray-800 overflow-hidden md:max-w-5xl   ">
          <h1 className="  relative bottom-0 right-0 left-0 tracking-wide pl-8 z-30     -translate-x-0 -translate-y-0 mt-2    mb-2 text-5xl font-black text-red-400 md:text-7xl   italic drop-shadow-xl">
            {post.title}
          </h1>
        </div>
      </div>
      {/*       <CoverImage title={post.title} coverImage={post.coverImage} alt={''} /> */}
      {/*       <div className="relative mx-auto   mb-6 content-center overflow-hidden justify-center md:rounded-b-lg   md:max-w-5xl ">
        <Image
          src={urlForImage(post.coverImage).url()}
          alt={post?.title}
          className={XD(
            'duration-700 ease-in-out aspect-[21/9] object-cover group-hover:opacity-75 -z-10 md:rounded-lg ',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          width={2560}
          height={1080}
          onLoadingComplete={() => setLoading(false)}
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 items-center opacity-80  bg-gray-800 overflow-hidden md:max-w-5xl   ">
          <h1 className="  relative bottom-0 right-0 left-0 tracking-wide pl-8 z-30     -translate-x-0 -translate-y-0 mt-2    mb-2 text-5xl font-black text-red-400 md:text-7xl   italic drop-shadow-xl">
            {post.title}
          </h1>
        </div>
      </div> */}
      {/*       {post?.coverImage && <CoverImage props={[post.coverImage]} />}
       */}
      {/*       <Image
        src={urlForImage(post?.coverImage).url()}
        blurDataURL={urlForImage(post?.coverImage).url()}
        alt={post.title}
        width={1260}
        height={540}
        sizes="(max-width: 800px) 100vw, 800px"
        placeholder="blur"
        loading="eager"
      /> */}
      <article className=" px-8 flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex flex-col items-start  justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <ImageWithTheme
              alt="Mustaqim Arifin"
              height={28}
              width={28}
              sizes="20vw"
              src="/wookie.png"
              className="rounded-full dark:invert"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Mustaqim Arifin | '}
              {dayjs(post.date).format('MMMM DD, YYYY')}
            </p>
          </div>
          <div className="flex gap-2 items-center mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime}
            {` • `}
            <ViewCounter slug={post.slug} />
            {` • `}
            <div className="flex">
              {post.tags?.length &&
                post.tags
                  .slice(0)
                  .map((tag, index) => <div key={index}>{tag}</div>)}
            </div>
          </div>
        </div>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
          <div className="my-4">
            <ImageWithTheme
              alt="Mustaqim Arifin"
              height={120}
              width={120}
              sizes="20vw"
              src="/wookie.png"
              className="rounded-full dark:invert transition-colors duration-200"
            />
          </div>

          <div className="text-sm text-gray-700 dark:text-gray-300">
            <a
              href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                `https://sss-lake.vercel.app/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Discuss on Twitter'}
            </a>
            {` • `}
            <a
              href="https://github.com/mustaqimarifin/sss-lake.vercel.app/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Suggest Change'}
            </a>
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
