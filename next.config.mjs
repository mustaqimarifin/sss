/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
//!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'));

/** @type {import("next").NextConfig} */
const config = {
  //staticPageGenerationTimeout: 300,
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '*.twimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/**' },
      { protocol: 'https', hostname: 'i.scdn.co', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/mstqmarfn/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**'
      }
    ],
    dangerouslyAllowSVG: true
  }
};
export default config;
