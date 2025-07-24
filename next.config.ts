import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'standalone', // 关键配置‌:ml-citation{ref="2" data="citationList"}
    images: { unoptimized: true }
}

export default nextConfig
