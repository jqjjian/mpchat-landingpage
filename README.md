# MPChat Landing Page

这是 MPChat 的官方落地页，使用 [Next.js](https://nextjs.org) 构建，部署在 Cloudflare Pages 上。

## 功能特性

-   🎨 现代化响应式设计
-   📱 移动端优化
-   🚀 静态站点生成 (SSG)
-   🌐 多语言支持准备
-   📄 隐私政策和服务条款页面
-   ⚡ 快速加载和优化

## 开发环境

首先安装依赖：

```bash
npm install
```

然后启动开发服务器：

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

你可以通过修改 `src/app/page.tsx` 来编辑主页，文件会自动热重载。

## 部署到 Cloudflare Pages

### 自动部署（推荐）

使用提供的部署脚本：

```bash
./deploy.sh
```

### 手动部署

1. **登录 Cloudflare**：

    ```bash
    npx wrangler login
    ```

2. **构建项目**：

    ```bash
    npm run build:cloudflare
    ```

3. **部署到 Cloudflare Pages**：
    ```bash
    npx wrangler pages deploy out --project-name mpchat-landingpage
    ```

### 可用的脚本

-   `npm run dev` - 启动开发服务器
-   `npm run build` - 构建生产版本
-   `npm run build:cloudflare` - 为 Cloudflare Pages 构建
-   `npm run deploy` - 部署到 Cloudflare Pages
-   `npm run deploy:production` - 部署到生产环境

## 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # 主页
│   ├── privacy/        # 隐私政策页面
│   └── terms/          # 服务条款页面
├── components/         # React 组件
│   ├── Navbar.tsx     # 导航栏
│   └── Footer.tsx     # 页脚
└── ...
```

## 配置文件

-   `next.config.ts` - Next.js 配置
-   `wrangler.toml` - Cloudflare Pages 配置
-   `tailwind.config.js` - Tailwind CSS 配置

## 在线访问

-   **当前部署**: https://a926a4b7.mpchat-landingpage.pages.dev

## 技术栈

-   **框架**: Next.js 15 with App Router
-   **样式**: Tailwind CSS 4
-   **动画**: Framer Motion
-   **部署**: Cloudflare Pages
-   **语言**: TypeScript
