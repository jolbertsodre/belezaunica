/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/conta",
        destination: "/conta/login",
        permanent: true,
      },
      {
        source: "/noticias",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
