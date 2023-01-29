import { Detail } from 'components/ListDetail/Detail';
import { TitleBar } from 'components/ListDetail/TitleBar';
import { Tweet } from 'components/Tweet';
import { getTweets } from 'lib/twitter';
import * as React from 'react';

function SectionTitle(props: any) {
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

export default function TweetPage({ children }) {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  return (
    <Detail.Container data-cy="tweet" ref={scrollContainerRef}>
      <TitleBar
        magicTitle
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
        title="Tweets"
      />

      {/* Keep this div to trigger the magic scroll */}
      <div className="p-4" ref={titleRef} />

      <Detail.ContentContainer>
        <div className="pb-24 space-y-8 md:space-y-16">
          <SectionContainer>
            <SectionTitle />

            <SectionContent>
              <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 px-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                  Tweets
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is a collection of tweets I've enjoyed. I use Twitter
                  quite a bit, so I wanted a place to publicly share what
                  inspires me, makes me laugh, and makes me think.
                </p>
                {children}
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
      <div className="py-6 px-8 "></div>
    </Detail.Container>
  );
}
