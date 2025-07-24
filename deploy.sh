#!/bin/bash

# MPChat Landing Page 部署脚本
# 用于部署到 Cloudflare Pages

set -e

echo "🚀 开始部署 MPChat Landing Page 到 Cloudflare Pages..."

# 检查是否已登录 Cloudflare
echo "📋 检查 Cloudflare 登录状态..."
if ! npx wrangler whoami > /dev/null 2>&1; then
    echo "❌ 未登录 Cloudflare，请先运行: npx wrangler login"
    exit 1
fi

echo "✅ Cloudflare 登录状态正常"

# 构建项目
echo "🔨 构建项目..."
npm run build:cloudflare

# 检查构建输出
if [ ! -d "out" ]; then
    echo "❌ 构建失败，未找到 out 目录"
    exit 1
fi

echo "✅ 项目构建完成"

# 部署到 Cloudflare Pages
echo "🌐 部署到 Cloudflare Pages..."
npx wrangler pages deploy out --project-name mpchat-landingpage

echo "🎉 部署完成！"
echo "📱 网站地址: https://mpchat.io"
