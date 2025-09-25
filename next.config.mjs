// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  images: {
    unoptimized: true,
  }
};

export default nextConfig;