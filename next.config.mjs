/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/local-seo", destination: "/", permanent: true }];
  },
};

export default nextConfig;
