import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { imageBuilder } from 'lib/sanity/sanity';
import Image, { type ImageProps } from 'next/image';

interface MyImageProps extends Omit<ImageProps, 'src'> {
  src: SanityImageSource;
  quality?: number;
  blur?: number;
}

export default function SanityImg({
  quality = 80,
  blur = 0,
  src,
  ...props
}: MyImageProps) {
  const baseURL = 'https://cdn.sanity.io/images/';

  return (
    <Image
      {...props}
      alt={''}
      loader={({ width }) => {
        let url =
          imageBuilder
            .image(src)
            .width(width)
            .height(Number(props.height) || 256)
            .auto('format')
            .quality(quality)
            .fit('clip')
            .url() ?? '';

        if (blur) {
          url += `&blur=${blur}`;
        }

        return url;
      }}
      src={imageBuilder.image(src).url()?.toString().replace(baseURL, '') ?? ''}
      layout="fill"
    />
  );
}
