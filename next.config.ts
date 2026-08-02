/** @type {import('next').Next.jsConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Allows viewing the dev server from this OCI box's public IP instead of just localhost
  allowedDevOrigins: ['152.67.5.174'],
  // Disables aggressive local browser page caching in development environments
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

