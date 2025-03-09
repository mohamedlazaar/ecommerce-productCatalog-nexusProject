import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Configure image optimization
  images: {
    domains: [
      // Add domains where your images are hosted
      // For example: 'example.com', 'images.unsplash.com', etc.
    ],
    // Alternatively, use remotePatterns for more specific control
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This is very permissive - restrict as needed
      },
    ],
  },
  
  // Optional: Configure ESLint to ignore specific rules during development
  eslint: {
    // Only run ESLint on these directories during production builds
    dirs: ['pages', 'components', 'lib', 'utils'],
    // You can temporarily disable specific rules while fixing issues
    ignoreDuringBuilds: true, // Optional: set to false once fixed
  },
  
  // Optional: Increase build timeouts if needed
  experimental: {
    // If your build is timing out, you might want to increase this value
    workerThreads: true,
    cpus: 4, // Adjust based on your build environment
  },
};

export default nextConfig;