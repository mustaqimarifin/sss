import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import { useEffect } from 'react';
import useSWR from 'swr';

export default function ViewCounter({ slug }) {
  const { data } = useSWR<Views>(`/api/page/${slug}`, fetcher);

  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/page/${slug}`, {
        method: 'POST'
      });

    registerView();
  }, []);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
