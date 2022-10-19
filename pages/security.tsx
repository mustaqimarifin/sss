import { NextSeo } from 'next-seo';
import * as React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import { ListDetailView, SiteLayout } from 'components/Layouts';
import { SecurityChecklist } from 'components/SecurityChecklist';
import routes from 'config/routes';
import { mdxToHtml } from 'lib/mdx';
import { descriptions } from 'data/security';

export default function SecurityChecklistPage({ resource }) {
  return (
    <>
      <NextSeo
        title={routes.security.seo.title}
        description={routes.security.seo.description}
        openGraph={routes.security.seo.openGraph}
      />

      <ListDetailView list={null} hasDetail detail={<SecurityChecklist />} />
    </>
  );
}
