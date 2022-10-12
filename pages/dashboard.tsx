import { NextSeo } from 'next-seo';
import * as React from 'react';

import { ListDetailView, SiteLayout } from 'components/Layouts';
import { withProviders } from 'components/Providers/withProviders';
import routes from 'config/routes';
import { DashPage } from 'components/Dash/Index';

function DashIndex() {
  return (
    <NextSeo
      title={routes.dashboard.seo.title}
      description={routes.dashboard.seo.description}
      openGraph={routes.dashboard.seo.openGraph}
    />
  );
}

DashIndex.getLayout = withProviders(function getLayout(
  page: React.ReactElement<any, string | React.JSXElementConstructor<any>>
) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={<DashPage />} />
    </SiteLayout>
  );
});

export default DashIndex;
