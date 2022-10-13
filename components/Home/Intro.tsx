import Button from 'components/Button';
import { TraceImage } from 'components/Image';
import { Detail } from 'components/ListDetail/Detail';
import { TitleBar } from 'components/ListDetail/TitleBar';
import { MapPin } from 'components/ProsCard';
import Image from 'next/future/image';
import Link from 'next/link';
import * as React from 'react';

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  );
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />;
}

interface TableRowProps {
  href: string;
  title: string;
  date: string;
  subtitle?: string;
}

function TableRow({ href, title, subtitle, date }: TableRowProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex items-center space-x-4 group"
    >
      <strong className="flex-none font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
        {title}
      </strong>
      <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      {subtitle && <span className="flex-none text-tertiary">{subtitle}</span>}
      {date && (
        <span className="flex-none font-mono text-quaternary">{date}</span>
      )}
    </a>
  );
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 gap-6 md:grid-cols-12"
      {...props}
    />
  );
}

const workHistory = [
  {
    href: 'https://github.com/mobile',
    title: 'GitHub',
    subtitle: 'Product Designer',
    date: '2018—\u00a0\u00a0'
  },
  {
    href: 'https://designdetails.fm',
    title: 'Design Details Podcast',
    subtitle: 'Co-host',
    date: '2014—\u00a0\u00a0'
  },
  {
    href: 'https://github.com/withspectrum/spectrum',
    title: 'Spectrum.chat',
    subtitle: 'Co-founder',
    date: '2017—18'
  },
  {
    href: 'https://facebook.com',
    title: 'Facebook',
    subtitle: 'Product Designer',
    date: '2015—17'
  },
  {
    href: 'https://buffer.com',
    title: 'Buffer',
    subtitle: 'Product Designer',
    date: '2013—15'
  }
];

const speakingData = [
  {
    href: 'https://maze.co/podcast/#brian-lovin',
    title: 'The Optimal Path Podcast',
    date: "Jan '22"
  },
  {
    href: 'https://uibreakfast.com/228-design-advisory-with-brian-lovin/',
    title: 'UI Breakfast',
    date: "Dec '21"
  },
  {
    href: 'https://designmba.show/episodes/brian-lovin',
    title: 'Design MBA',
    date: "Nov '21"
  },
  {
    href: 'https://progressionapp.com/blog/podcast-26-brian-lovin-github-spectrum-design-details-on-the-rise-of-the-senior-ic/',
    title: 'Progression Podcast',
    date: "Jun '21"
  },
  {
    href: 'https://layout.fm/episodes/194/',
    title: 'Layout.fm',
    date: "Jan '21"
  },
  {
    href: "https://softwareengineeringdaily.com/'20/07/15/github-mobile-with-brian-lovin-and-ryan-nystrom/",
    title: 'Software Engineering Daily',
    date: "Jul '20"
  },
  {
    href: 'https://avocode.com/blog/brian-lovin-product-designer-github-interview',
    title: 'The Grit',
    date: "Jul '20"
  },
  {
    href: 'https://www.swiftbysundell.com/podcast/67/',
    title: 'Swift by Sundell',
    date: "Feb '20"
  },
  {
    href: 'https://www.youtube.com/watch?v=SyS3h3kmBnY',
    title: 'Figma Config',
    date: "Feb '20"
  },
  {
    href: 'https://www.loversmagazine.com/interviews/brian-lovin',
    title: 'Lovers Magazine',
    date: "Jan '18"
  },
  {
    href: 'https://www.youtube.com/watch?v=6MBBTdu8v6E',
    title: 'GraphQL Summit',
    date: "Nov '17"
  },
  {
    href: 'https://designdetails.fm/episodes/3e342ac0',
    title: 'Design Details',
    date: "Aug '17"
  }
];

export function Intro() {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  return (
    <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
      <TitleBar
        magicTitle
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
        title="Home"
      />

      {/* Keep this div to trigger the magic scroll */}
      <div className="p-4" ref={titleRef} />

      <Detail.ContentContainer>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          <Image
            alt="Mustaqim Arifin"
            height={176}
            width={176}
            src="/wookie.png"
            sizes="30vw"
            priority
            className="rounded-full dark:invert transition-colors duration-200"
          />
        </div>
        <div className="pb-24 space-y-8 md:space-y-16">
          <SectionContainer>
            <SectionTitle />

            <SectionContent>
              <div className="prose text-primary">
                {/*                 <div style={{ width: 200, height: 200 }}>
                  <embed
                    src="https://www.youtube.com/embed/NE5H5intsck?autohide=1&autoplay=1"
                    wmode="transparent"
                    type="video/mp4"
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Keyboard Cat"
                  />
                </div> */}
                <p>
                  Hey, I&apos;m Mus. I&apos;m a{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://designdetails.fm"
                  >
                    music producer
                  </a>
                  ,{' '}
                  <Link href="/writing" passHref>
                    <a>audio engineer</a>
                  </Link>
                  , and{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/brianlovin"
                  >
                    sorta terrible at code :D
                  </a>
                  . I&apos;m currently the marketing manager & creative lead at{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mobile"
                  >
                    musegroupasia
                  </a>
                  .
                </p>
                <p>
                  Before musegroupasia, I co-founded{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://spectrum.chat"
                  >
                    Akhyla
                  </a>
                  , a platform to electronic musicians to learn, collaborate and
                  make records.
                </p>
                <p>
                  During those years I was also Music Director at Infinity Games
                  where I worked alongside some amazing talent helping shape the
                  sound and music of{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://buffer.com"
                  >
                    Heroes of War
                  </a>
                  .
                </p>
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Where</SectionTitle>
            <SectionContent>
              <TraceImage
                imgSrc="/map.png"
                imgTrace="/map.svg"
                width={1920}
                height={1080}
                layout="intrinsic"
                className="rounded-2xl"
                quality={100}
                alt="Map of KL with a wookie in the middle"
              />
              <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                <MapPin className="w-4 h-4" />
                <span>Kuala Lumpur, WP</span>
              </p>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Work</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {workHistory.map((job) => (
                  <TableRow
                    href={job.href}
                    title={job.title}
                    subtitle={job.subtitle}
                    date={job.date}
                    key={job.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Speaking</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {speakingData.map((s) => (
                  <TableRow
                    href={s.href}
                    title={s.title}
                    date={s.date}
                    key={s.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  );
}
