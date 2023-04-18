

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol:'https',
        hostname:'images.pexels.com',
        pathname:'/photos/**',
      }
    ]
  }
}