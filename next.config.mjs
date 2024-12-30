export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.pokemon.com'
      },
      {
        protocol: 'https',
        hostname: 'tcg.pokemon.com'
      }
    ]
  }
}

export default nextConfig
