// @ts-nocheck
//import YoutubeStats from 'components/metrics/YoutubeStats';
// import { zZZ } from 'services/functions';
import { Detail } from 'components/ListDetail/Detail';
import { TitleBar } from 'components/ListDetail/TitleBar';
import VidDisplay from 'components/metrics/VidDisplay';
import Wrapper from 'components/metrics/Wrapper';
import YouTubeCard from 'components/metrics/Youtube';
import videos from 'data/videoIndex';
import type { Stat, Video } from 'lib/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

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

/* const VidDisplay = dynamic(
  () => {
    return import('components/metrics/VidDisplay');
  },
  { ssr: false }
); */

/* const SBComments = dynamic(
  () => {
    return import('components/Comments/SBComments');
  },
  { ssr: false }
);
 */
export function VideoPage() {
  const router = useRouter();

  const [loadComments, setComments] = React.useState(false);
  const canReply = Boolean(true);
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);
  //const [videos, setVideos] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');
  /* 
     React.useEffect(() => {
    async function fetchVideos() {
      return await fetch('components/metrics/akhyla.json').then((res) =>
        res.json()
      );
    }
    return await fetchVideos();
  });  */

  const sortedVids = videos
    .sort(
      (
        a: { snippet: { publishedAt: any } },
        b: { snippet: { publishedAt: any } }
      ) =>
        Number(
          new Date(b.snippet.publishedAt) -
            Number(new Date(a.snippet.publishedAt))
        )
    )
    .filter((vid: { snippet: { title: string } }) =>
      vid.snippet.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Detail.Container data-cy="dash" ref={scrollContainerRef}>
      <TitleBar
        magicTitle
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
        title="Videos"
      />

      {/* Keep this div to trigger the magic scroll */}
      <div className="p-4" ref={titleRef} />

      <Detail.ContentContainer>
        <div className="pb-24 space-y-8 md:space-y-16">
          <SectionContainer>
            <SectionTitle />

            <SectionContent>
              <div className="w-full justify-center items-start max-w-3xl mx-auto mb-16 px-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                  Videos
                </h1>
                <Wrapper>
                  <div>
                    <YouTubeCard />
                    {/* <input
                      type="text"
                      placeholder="Search here...."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="mt-3 text-gray-200 tracking-wider bg-gray-800 h-10 px-3 shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-gray-400 block w-full border-gray-700 rounded-md"
                    /> */}
                  </div>
                  {videos.map((vid) => {
                    const active = router.query?.id === vid.id;

                    return (
                      <ul key={vid.id}>
                        <VidDisplay key={vid.id} vid={vid} active={active} />
                      </ul>
                    );
                  })}
                </Wrapper>
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
      <div className="py-6 px-8 ">
        {/*         {canReply && !loadComments ? (
          <>
            <div className="flex justify-center space-y-2">
              <button
                className=" text-gray-600 hover:shadow-lg hover:bg-pink-400 hover:text-gray-50 rounded-md dark:hover:text-primary dark:hover:bg-white transition px-2 py-1 uppercase font-semibold text-xs text-center"
                onClick={() => setComments(!loadComments)}
              >
                Load Comments 👺
              </button>
            </div>
          </>
        ) : (
          <SBComments id={`Videos`} />
        )} */}
      </div>
    </Detail.Container>
  );
}
