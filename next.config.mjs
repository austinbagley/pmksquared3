import createMDX from '@next/mdx'
import { withContentlayer } from 'next-contentlayer2'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  webpack: (config) => {
    // Modify the webpack config to ignore specific warnings
    config.infrastructureLogging = {
      level: 'error', // This will show only errors, not warnings
    }

    // If you want to be more specific, you can filter out just the contentlayer warnings
    config.stats = {
      ...config.stats,
      warningsFilter: [
        /\[webpack\.cache\.PackFileCacheStrategy\/webpack\.FileSystemInfo\]/,
      ],
    }

    return config
  },
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});
 
// Merge MDX config with Next.js config
export default withMDX(withContentlayer(nextConfig));

