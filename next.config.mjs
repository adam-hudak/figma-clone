/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.external.push({
      "utf-8-validate": "comminjs utf-8-validate",
      bufferutil: "comminjs bufferutil",
      canvas: "comminjs canvas",
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liveblocks.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
