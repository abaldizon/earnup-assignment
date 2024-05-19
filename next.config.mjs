/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/earnup-assignment",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };

// export default nextConfig; //dev
module.exports = nextConfig; //prod