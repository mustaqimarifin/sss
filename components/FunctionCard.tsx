import { urlForImage } from 'lib/sanity/sanity';
import Image from 'next/future/image';
import Link from 'next/link';

export default function FunctionCard({ title, slug, caption }) {
  return (
    <Link key={slug} href={`/blog/${slug}`}>
      <a className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900">
        <Image
          alt={title}
          height={32}
          width={32}
          src={caption}
          className="rounded-full"
        />
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </a>
    </Link>
  );
}
