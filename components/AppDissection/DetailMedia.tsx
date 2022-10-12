import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

//mport { MarkdownRenderer } from 'components/MarkdownRenderer';
import { DesignDetail } from 'data/appDissections';

interface Props {
  detail: DesignDetail;
}

export function DesignDetailMedia(props: Props) {
  const { detail } = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible: boolean) => !isVisible && setIsVisible(visible)}
    >
      <div className="flex flex-col">
        <h2 className="text-primary mb-4 text-lg font-bold">{detail.title}</h2>
        <div className="prose">{detail.description}</div>

        {isVisible && (
          <div className="-mx-4 mt-8 mb-4 flex items-center justify-center rounded-none bg-gray-100 p-2 dark:bg-gray-900 md:-mx-8 md:p-4 xl:rounded-md">
            {detail.media.map((src) => (
              <video
                playsInline
                muted
                loop
                autoPlay
                preload="metadata"
                key={src}
                style={{
                  minHeight: `${
                    detail.orientation === 'landscape' ? '320px' : '680px'
                  }`,
                  maxWidth: `${
                    detail.orientation === 'landscape' ? '100%' : '400px'
                  }`
                }}
                className="h-full w-full overflow-hidden rounded-md"
              >
                <source src={`${src}#t=0.1`} />
              </video>
            ))}
          </div>
        )}
      </div>
    </VisibilitySensor>
  );
}
