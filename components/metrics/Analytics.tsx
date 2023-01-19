import MetricCard from 'components/metrics/Card';
import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import useSWR from 'swr';

export default function AnalyticsCard() {
  const { data } = useSWR<Views>('/api/page', fetcher);

  const pageViews = new Number(data?.total);
  const link = 'https://sss-lake.vercel.app' ?? 'http://localhost:3000';

  return (
    <MetricCard
      header="All-Time Views"
      link={link}
      metric={pageViews}
      isCurrency={false}
    />
  );
}
