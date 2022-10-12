import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Analytics from 'components/metrics/Analytics';

import YouTube from 'components/metrics/Youtube';
import TopTracks from 'components/TopTracks';
import { Detail } from 'components/ListDetail/Detail';
import { TitleBar } from 'components/ListDetail/TitleBar';

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  );
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />;
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 gap-6 md:grid-cols-12"
      {...props}
    />
  );
}

export function DashPage() {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  return (
    <Detail.Container data-cy="dash" ref={scrollContainerRef}>
      <TitleBar
        magicTitle
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
        title="Dashboard"
      />

      {/* Keep this div to trigger the magic scroll */}
      <div className="p-4" ref={titleRef} />

      <Detail.ContentContainer>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          <Image
            alt="Mustaqim Arifin"
            height={176}
            width={176}
            src="/wookie.png"
            sizes="30vw"
            priority
            className="rounded-full dark:invert transition-colors duration-200"
          />
        </div>
        <div className="pb-24 space-y-8 md:space-y-16">
          <SectionContainer>
            <SectionTitle />

            <SectionContent>
              <div className="w-full justify-center items-start max-w-3xl mx-auto mb-16 px-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                  Dashboard
                </h1>
                <div className="mb-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    This is my personal dashboard, built with Next.js API routes
                    deployed as serverless functions. I use this dashboard to
                    track various metrics across platforms like Unsplash,
                    YouTube, GitHub, and more. Want to build your own? Check out
                    my&nbsp;
                    <Link href="/blog/fetching-data-with-swr">
                      <a className="text-gray-900 dark:text-gray-100 underline">
                        blog series.
                      </a>
                    </Link>
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <YouTube />
                </div>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
                  <Analytics />
                </div>
                <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
                  Top Tracks
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Curious what I'm currently jamming to? Here's my top tracks on
                  Spotify updated daily.
                </p>
                <TopTracks />
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  );
}
