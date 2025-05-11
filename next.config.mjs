/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co/400x400",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
