import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*3ixof1wnmc.ufs.sh",
            },
        ],
    },
};

export default nextConfig;