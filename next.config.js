/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {

                hostname: 'cdn.builder.io',

            }
        ],


    }
}

module.exports = nextConfig
