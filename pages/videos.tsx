import { VideoPage } from 'components/Videos/Index';
import { ListDetailView, SiteLayout } from 'components/Layouts';
import { withProviders } from 'components/Providers/withProviders';
import routes from 'config/routes';
import { NextSeo } from 'next-seo';
import * as React from 'react';

import { fetchData } from 'lib/axios';

function VideoIndex() {
  return (
    <NextSeo
      title={routes.videos.seo.title}
      description={routes.videos.seo.description}
      openGraph={routes.videos.seo.openGraph}
    />
  );
}

VideoIndex.getLayout = withProviders(function getLayout(
  page: React.ReactElement<any, string | React.JSXElementConstructor<any>>
) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={<VideoPage />} />
    </SiteLayout>
  );
});

export default VideoIndex;
