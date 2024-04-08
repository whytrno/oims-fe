/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: 'http://localhost:8000/api',
    },
    images: {
        domains: ['localhost'],
    },
};

export default nextConfig;
