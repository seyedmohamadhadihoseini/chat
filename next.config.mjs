import withPWAInit from "@ducanh2912/next-pwa";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "nev.nevuer.com",
      },
    ],
  },
};

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA(nextConfig);