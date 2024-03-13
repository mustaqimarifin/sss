import type { Post } from 'lib/types';
import { revalidatePath } from 'next/cache';
import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from './config';
import type { Settings } from './queries';
import {
  indexQuery,
  postBySlugQuery,
  postQuery,
  postSlugs,
  postSlugsQuery,
  settingsQuery
} from './queries';

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {};
  }
  return {};
}

export async function getSlugs(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(postSlugs)) || [];
  }
  return [];
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export const getPost = async (slug: string) => {
  if (client) {
    return (await client.fetch(postQuery, { slug })) || {};
  }
  revalidatePath('/posts/[slug]', 'page');

  return {};
};
