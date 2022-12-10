/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "chandanraj.in",
      "firebasestorage.googleapis.com",
    ]
  },
}

module.exports = nextConfig
