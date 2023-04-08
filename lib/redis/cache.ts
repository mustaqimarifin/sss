import { redis } from '.';

export const fetch = async <T>(
  key: string,
  fetcher: () => T,
  expires: number
) => {
  const existing = await redis.get(key);
  if (existing !== null) return existing;
  return set(key, fetcher, expires);
};

export const get = async <T>(key: string): Promise<T> => {
  const value: string = await redis.get(key);
  if (value === null) return null;
  return JSON.parse(value);
};

export const set = async <T>(
  key: string,
  fetcher: () => T,
  expires: number
): Promise<T> => {
  const value = await fetcher();
  await redis.set(key, JSON.stringify(value), 'EX', expires);
  return value;
};

export const del = async (key: string) => {
  await redis.del(key);
};
