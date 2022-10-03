import Link from 'next/link';
import useSWR from 'swr';
// import Tag from './Tag';
import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import dayjs from 'dayjs';

export default function BlogPost({
  slug,
  title,
  excerpt,
  tags,
  date
}: {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
}) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full mb-4">
        <div className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center">
              <span className="text-sm dark:text-gray-400">
                {dayjs(date).format('MMMM DD, YYYY')}
              </span>

              {tags?.length &&
                tags.slice(0).map((tag, index) => (
                  <>
                    <div
                      key={index}
                      className=" mr-3 text-sm font-bold uppercase text-pink-400 transition duration-300 ease-in-out hover:scale-[1.03] hover:text-rose-300"
                    >
                      {tag}
                    </div>
                  </>
                ))}
            </div>
            <div className="mt-3">
              <h2 className=" text-lg font-bold text-gray-900 md:text-2xl dark:text-gray-100 hover:underline">
                {title}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{excerpt}</p>
            </div>
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-bold leading-6 text-gray-500 dark:text-gray-400">
                <div className="mt-2 flex items-center justify-start gap-2 text-sm font-bold text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <p className="inline-block  text-pink-400">
                      {views?.toLocaleString() ?? '–––'} views
                    </p>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </a>
    </Link>
  );
}
