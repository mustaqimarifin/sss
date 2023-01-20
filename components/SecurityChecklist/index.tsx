import { Detail } from 'components/ListDetail/Detail';
import { TitleBar } from 'components/ListDetail/TitleBar';
import routes from 'config/routes';
import data from 'data/security/allSecurity';
import dynamic from 'next/dynamic';
import React from 'react';

import { ChecklistItem } from './ChecklistItem';

const SBComments = dynamic(
  () => {
    return import('components/Comments/SBComments');
  },
  { ssr: false }
);
export function SecurityChecklist() {
  const [loadComments, setComments] = React.useState(false);
  const canReply = Boolean(true);
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  const keys = Object.keys(data);
  const resources = keys.map((k) => data[k]);
  return (
    <Detail.Container data-cy="security-checklist" ref={scrollContainerRef}>
      <TitleBar
        magicTitle
        title={'Security Checklist'}
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
      />

      <Detail.ContentContainer>
        <Detail.Header>
          <Detail.Title ref={titleRef}>
            {routes.security.seo.title}
          </Detail.Title>
          <p className="text-tertiary text-xl">
            {routes.security.seo.description}
          </p>
        </Detail.Header>

        <div className="space-y-24 pt-16">
          {resources.map((resource) => (
            <ChecklistItem key={resource.id} resource={resource} />
          ))}
        </div>
      </Detail.ContentContainer>
      <div className="py-6 px-8 ">
        {canReply && !loadComments ? (
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
          <SBComments id={`Security Checklist`} />
        )}
      </div>
    </Detail.Container>
  );
}
