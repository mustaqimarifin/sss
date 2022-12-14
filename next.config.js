/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false
      };
    }

    return config;
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twi,
      'cdn.sanity.io',
      'lh3.googleusercontent.com',
      'i.ytimg.com'
    ]
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    urlImports: ['https://cdn.skypack.dev/', 'https://cdn.jsdelivr.net/']
  }
  /* async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  } */
};

/* // https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.jsdelivr.net cdn.skypack.dev *.youtube.com *.twitter.com nicethreads.vercel.app;
    child-src *.youtube.com *.google.com *.twitter.com nicethreads.vercel.app;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    frame-ancestors https://nicethreads.vercel.app;
    img-src * blob: data: cdn.sanity.io;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];
 */
