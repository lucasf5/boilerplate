/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  ...nextConfig
})

export default nextConfig
