import Redis, { RedisOptions } from 'ioredis';

const host = process.env.NEXT_PUBLIC_UPSTASH_URL;
//const password = process.env.REDIS_PASS || undefined;
//const port = parseInt(process.env.REDIS_PORT);
//const host = process.env.UPSTASH_URL as string
export function createRedisInstance() {
  try {
    const options: RedisOptions = {
      host,
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`[Redis] Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      }
    };


    const redis = new Redis(options);

    redis.on('error', (error: unknown) => {
      console.warn('[Redis] Error connecting', error);
    });

    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
}
