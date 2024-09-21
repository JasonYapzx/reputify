/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent',
        pathname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules?.push({
      test: /..\/blockchain\/.*$/,
      loader: "ignore-loader",
    });
    return config;
  },
}


export default nextConfig;
