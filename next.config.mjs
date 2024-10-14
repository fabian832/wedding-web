/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "static.theknot.com"
            }
        ]
    }
};

export default nextConfig;
