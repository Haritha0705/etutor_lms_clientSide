import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // async headers() {
    //     return [
    //         {
    //             source: "/(.*)",
    //             headers: [
    //                 {
    //                     key: "Content-Security-Policy",
    //                     value:
    //                         "default-src * 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://accounts.google.com https://apis.google.com; connect-src *; img-src * data: blob:; style-src 'self' 'unsafe-inline' *; frame-src 'self' https://accounts.google.com https://apis.google.com;",
    //                 },
    //             ],
    //         },
    //     ];
    // },
};

export default nextConfig;
