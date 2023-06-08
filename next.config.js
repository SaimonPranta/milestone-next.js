/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["server.easyshop50.com"],
  },
  //this is use for Cpanel Build
  // output: "export",
};

module.exports = nextConfig
