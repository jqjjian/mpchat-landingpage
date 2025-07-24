#!/bin/bash

# 域名配置检查脚本
# 用于检查 mpchat.io 的 DNS 配置和可访问性

echo "🔍 检查 mpchat.io 域名配置..."

# 检查 DNS 记录
echo "📋 DNS 记录检查:"
echo "A 记录:"
dig mpchat.io A +short
echo ""

echo "CNAME 记录:"
dig mpchat.io CNAME +short
echo ""

echo "NS 记录:"
dig mpchat.io NS +short
echo ""

# 检查网站可访问性
echo "🌐 网站可访问性检查:"
echo "HTTP 状态码:"
curl -s -o /dev/null -w "%{http_code}" http://mpchat.io
echo ""

echo "HTTPS 状态码:"
curl -s -o /dev/null -w "%{http_code}" https://mpchat.io
echo ""

# 检查 Pages 部署状态
echo "📊 Cloudflare Pages 部署状态:"
npx wrangler pages deployment list --project-name mpchat-landingpage | head -5

echo ""
echo "✅ 检查完成！"
echo ""
echo "如果域名无法访问，请确保："
echo "1. 在 Cloudflare Pages 项目中添加了自定义域名"
echo "2. DNS 记录正确指向 mpchat-landingpage.pages.dev"
echo "3. SSL/TLS 证书已生成（可能需要几分钟）"