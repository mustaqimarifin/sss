import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './config';

import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const imageBuilder = imageUrlBuilder(sanityConfig);

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format').fit('max');
