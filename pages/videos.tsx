// @ts-nocheck
import { Key, useState } from 'react';
import { Video, Stat } from 'lib/types';

import VidDisplayListItem from 'components/metrics/VidDisplayListItem';
import Wrapper from 'components/metrics/Wrapper';
import YoutubeStats from 'components/metrics/YoutubeStats';
import Container from 'components/Container';
// import { fetchData } from 'lib/axios';
import { zZZ } from 'services/functions';

export default function Videos({ videos }) {
  const [searchValue, setSearchValue] = useState('');
  const sortedVids = videos
    .sort(
      (
        a: { snippet: { publishedAt: string | number | Date } },
        b: { snippet: { publishedAt: string | number | Date } }
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
    <>
      <Container>
        <Wrapper>
          <div>
            <YoutubeStats />
            <input
              type="text"
              placeholder="Search here...."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="mt-3 text-gray-200 tracking-wider bg-gray-800 h-10 px-3 shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-gray-400 block w-full border-gray-700 rounded-md"
            />
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-4  ">
            {sortedVids &&
              sortedVids.map((vid: { id: { videoId: Key } }) => (
                <VidDisplayListItem key={vid.id.videoId} vid={vid} />
              ))}
          </ul>
        </Wrapper>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { videos } = await zZZ<{ videos: any }>(
    'components/metrics/akhyla.json'
  );

  const props = {
    videos
  };

  return {
    props
  };
};
