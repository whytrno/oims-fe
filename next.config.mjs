/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: 'https://oimsapps.my.id/api',
        domain: 'https://oims-apps.my.id'
    },
    images: {
        domains: ['localhost'],
    },
};

export default nextConfig;
