/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
      "img.icons8.com",
      "raw.githubusercontent.com",
      "i.imgur.com",
      "img.freepik.com",
      "media.geeksforgeeks.org",
      "user-images.githubusercontent.com",
      "pg56714-portfolio.vercel.app",
      "github.com",
      "upload.wikimedia.org",
      "w7.pngwing.com",
      "icon.icepanel.io",
      "registry.npmmirror.com",
    ],
  },
};

module.exports = nextConfig;
