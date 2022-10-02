/* eslint-disable react/jsx-no-undef */
import { urlForImage } from 'lib/sanity/sanity';
import Image from 'next/future/image';
import { useState } from 'react';
import cn from 'classnames';
export const CoverImage = ({ title, coverImage, alt }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative mx-auto   mb-6 content-center overflow-hidden justify-center md:rounded-b-lg   md:max-w-5xl ">
      <Image
        src={urlForImage(coverImage).url()}
        alt={alt}
        className={cn(
          'duration-700 ease-in-out group-hover:opacity-75',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        width={2560}
        height={1080}
        onLoadingComplete={() => setLoading(false)}
      />
      <div className="absolute bottom-0 left-0 right-0 z-10 items-center opacity-80  bg-gray-800 overflow-hidden md:max-w-5xl   ">
        <h1 className="  relative bottom-0 right-0 left-0 tracking-wide pl-8 z-30     -translate-x-0 -translate-y-0 mt-2    mb-2 text-5xl font-black text-red-400 md:text-7xl   italic drop-shadow-xl">
          {title}
        </h1>
      </div>
      {/*       <figcaption className="text-center ">
        {caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {caption}
          </span>
        )}
      </figcaption> */}
    </div>
  );
};
