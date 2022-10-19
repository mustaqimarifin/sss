import { baseUrl } from 'config/seo';

export const viewCount = 120759;
export const subs = 573;

export const uploads = 65;

export const IS_PROD = process.env.NODE_ENV === 'production';
export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_PREVIEW =
  process.env.VERCEL_ENV === 'preview' ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview';

export const CLIENT_URL = IS_PROD ? baseUrl : 'https://sss-lake.vercel.app';
