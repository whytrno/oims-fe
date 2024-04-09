/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: 'http://localhost:8000/api',
        domain: 'http://localhost:3000'
    },
    images: {
        domains: ['localhost'],
    },
};

export default nextConfig;
