/* eslint-disable react/jsx-no-target-blank */
import ConsCard from 'components/ConsCard';
import ImageWithTheme from 'components/ImageWithTheme';
import Analytics from 'components/metrics/Analytics';
import ProsCard from 'components/ProsCard';
import Step from 'components/Step';
import type { MDXContentProps } from 'mdx-bundler/client';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CodeBlock } from './CodeBlock';
import DickPics from './Pics';

const CustomLink = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLAnchorElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};
function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
  return (
    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const Predator = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <CodeBlock
      language={match[1]}
      className={className}
      text={String(children).replace(/\n$/, '')}
      {...props}
    />
  ) : (
    <>{children}</>
  );
};

const Codex = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <CodeBlock
      className={className}
      text={String(children).replace(/\n$/, '')}
      language={match[1]}
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  DickPics,
  a: CustomLink,
  Callout,
  Analytics,
  ConsCard,
  ProsCard,
  Step,
  pre: Predator,
  code: Codex
};

interface Props {
  mdx: string;
  [key: string]: unknown;
}

export const MDSEX = ({ mdx, ...rest }: Props) => {
  const MDXLayout = React.useMemo(
    (): React.FunctionComponent<MDXContentProps> => getMDXComponent(mdx),
    [mdx]
  );

  return <MDXLayout {...rest} />;
};
