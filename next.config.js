/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.vecteezy.com'], // Allowed external image domain
  },
}

module.exports = nextConfig