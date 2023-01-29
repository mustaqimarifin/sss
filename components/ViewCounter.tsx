//@ts-nocheck
import type { Views } from 'lib/types';
import { yespls } from 'lib/yespls';
import { useEffect } from 'react';
import useSWR from 'swr';

export default function ViewCounter({ slug }) {
  const { data } = useSWR<Views>(`/api/page/${slug}`, yespls);

  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/page/${slug}`, {
        method: 'POST'
      });

    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
