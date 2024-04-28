/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aeonbank.com.my',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
