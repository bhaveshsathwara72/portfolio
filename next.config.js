/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: ['sathwarainfotech.com'], // Allowed external image domain
    
  },
}

module.exports = nextConfig