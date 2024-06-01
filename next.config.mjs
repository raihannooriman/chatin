/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },
};

export default nextConfig;
