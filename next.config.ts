import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export', // 静态导出，适用于 Cloudflare Pages
    images: {
        unoptimized: true // Cloudflare Pages 需要禁用图片优化
    },
    trailingSlash: true, // 确保路径兼容性
    distDir: 'out' // 输出目录
}

export default nextConfig
