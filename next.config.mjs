/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'));

/** @type {import("next").NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  staticPageGenerationTimeout: 300,
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twi,
      'cdn.sanity.io',
      'lh3.googleusercontent.com',
      'i.ytimg.com',
      'avatars.githubusercontent.com',
      'img1-tw.alphaxcdn.com'
    ],
    dangerouslyAllowSVG: true
  }
};
export default config;
