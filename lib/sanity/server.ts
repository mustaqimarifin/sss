/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient, createPreviewSubscriptionHook } from 'next-sanity';
import { sanityConfig } from './config';

export const sanityClient = createClient(sanityConfig);
export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: true,
  //token: process.env.SANITY_API_TOKEN
  token: process.env.SANITY_API_READ_TOKEN
});

export const getClient = (preview) => (preview ? previewClient : sanityClient);
