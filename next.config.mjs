/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/account",
        destination: "/account/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
