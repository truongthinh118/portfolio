/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: `/cv.pdf`,
      },
    ];
  },
};

export default nextConfig;
