import MetricCard from 'components/metrics/Card';
import fetcher from 'lib/fetcher';
import { YouTube } from 'lib/types';
import useSWR from 'swr';

import Analytics from './Analytics';

export default function YouTubeCard() {
  const { data } = useSWR<YouTube>('/api/youtube', fetcher);

  const subscriberCount = new Number(data?.subscriberCount);
  const viewCount = new Number(data?.viewCount);
  const videoCount = new Number(data?.videoCount);
  const link = 'https://www.youtube.com/channel/UCd-pjthLQYLYVdN7GNwJgyA';

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      <MetricCard
        header="YouTube Subscribers"
        link={link}
        metric={subscriberCount}
        isCurrency={false}
      />
      <MetricCard
        header="YouTube Views"
        link={link}
        metric={viewCount}
        isCurrency={false}
      />
      <MetricCard
        header="YouTube Uploads"
        link={link}
        metric={videoCount}
        isCurrency={false}
      />
      <Analytics />
    </div>
  );
}
