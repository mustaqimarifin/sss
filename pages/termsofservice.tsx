import TOS from 'components/Home/TOS';
import { ListDetailView, SiteLayout } from 'components/Layouts';
import { withProviders } from 'components/Providers/withProviders';
import routes from 'config/routes';
import { NextSeo } from 'next-seo';
import * as React from 'react';

function Terms() {
  return (
    <NextSeo
      title={routes.terms.seo.title}
      description={routes.terms.seo.description}
      openGraph={routes.terms.seo.openGraph}
    />
  );
}

Terms.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={<TOS />} />
    </SiteLayout>
  );
});

export default Terms;
