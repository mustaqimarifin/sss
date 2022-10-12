import Image from 'next/future/image';
import { Video } from 'lib/types';

export default function VidDisplayListItem({ vid }) {
  const thumbnail = vid.snippet.thumbnails.medium.url;
  const title = vid.snippet.title;
  const id = vid.id.videoId;
  const description = vid.snippet.description;
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <li>
      <a href={url}>
        <div className="grid grid-cols-3 my-4 gap-4">
          <div className="hidden sm:flex relative col-span-1 rounded-md">
            <Image
              src={thumbnail}
              width={320}
              height={180}
              alt={title}
              className="absolute rounded-md opacity-80"
            />
          </div>
          <div className=" space-y-2 col-span-3 sm:col-span-2">
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
              {title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}
