<div align="center">
  <img src="public/Family-001.png" alt="YYC³ Family" width="600" />

  # YYC³（YanYuCloudCube）智能教育平台

  > **言启千行代码 · 语枢万物智能**

  <div align="center">
    <a href="#">
      <img src="https://img.shields.io/badge/版本-v2.2.0-2563eb.svg?logo=semver&logoColor=white" alt="Version" />
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/许可证-MIT-10b981.svg?logo=open source initiative&logoColor=white" alt="License" />
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/构建-通过-22c55e.svg?logo=githubactions&logoColor=white" alt="Build" />
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/覆盖率-95%25-3b82f6.svg?logo=vitest&logoColor=white" alt="Coverage" />
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/代码质量-A+-6366f1.svg?logo=codefactor&logoColor=white" alt="Code Quality" />
    </a>
  </div>

  <div align="center">
    <img src="https://img.shields.io/badge/Next.js-15.5-000000.svg?logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.2-61DAFB.svg?logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6.svg?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Pnpm-10.x-F69220.svg?logo=pnpm&logoColor=white" alt="pnpm" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4.svg?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Radix_UI-1.3-FF4B4B.svg?logo=radixui&logoColor=white" alt="Radix UI" />
    <img src="https://img.shields.io/badge/shadcn/ui-latest-000000.svg?logo=shadcnui&logoColor=white" alt="shadcn/ui" />
    <img src="https://img.shields.io/badge/Zustand-5.0-443E38.svg?logo=react&logoColor=white" alt="Zustand" />
    <img src="https://img.shields.io/badge/Framer_Motion-12.4-0055FF.svg?logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Vitest-3.2-6E9F18.svg?logo=vitest&logoColor=white" alt="Vitest" />
    <img src="https://img.shields.io/badge/Storybook-9.1-FF4785.svg?logo=storybook&logoColor=white" alt="Storybook" />
  </div>

  <br />

  > ***YanYuCloudCube***
  > *言启象限 | 语枢未来*
  > ***Words Initiate Quadrants, Language Serves as Core for Future***
  > *万象归元于云枢 | 深栈智启新纪元*
  > ***All things converge in cloud pivot; Deep stacks ignite a new era of intelligence***

  ---

  **五高架构**：高可用 · 高性能 · 高安全 · 高扩展 · 高智能
  **五标体系**：标准化 · 规范化 · 自动化 · 可视化 · 智能化
  **五化转型**：流程化 · 数字化 · 生态化 · 工具化 · 服务化
  **五维评估**：时间维 · 空间维 · 属性维 · 事件维 · 关联维

</div>

---

## 📋 项目概览

YYC³（YanYuCloudCube）智能教育平台是基于 `Next.js 15 + React 19 + shadcn/ui + Radix UI + pnpm` 技术栈打造的下一代 AI 驱动教育解决方案。平台深度融入「五高五标五化五维」核心机制，提供个性化、高效、智能的学习体验。

### 核心特性

<table>
  <tr>
    <td align="center" width="33%">
      <h3>🧠 多模型 AI 驱动</h3>
      <p>集成 DeepSeek / Qwen / Llama 等多种 AI 模型，支持本地与云端推理</p>
    </td>
    <td align="center" width="33%">
      <h3>💬 智能交互系统</h3>
      <p>自适应对话、打字机效果、语音交互、几何动画背景</p>
    </td>
    <td align="center" width="33%">
      <h3>📱 全端适配</h3>
      <p>PC Web / PWA / 移动 H5 / 小程序 / 桌面端，一套代码多端运行</p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>🎨 主题定制系统</h3>
      <p>CSS Variables 驱动明暗双主题，跨端主题同步无缝切换</p>
    </td>
    <td align="center">
      <h3>🔍 全局审核系统</h3>
      <p>代码质量 · 性能 · 安全 · 可访问性 · 依赖管理五维审核</p>
    </td>
    <td align="center">
      <h3>📊 可观测性架构</h3>
      <p>全链路监控、性能追踪、错误告警，保障系统稳定运行</p>
    </td>
  </tr>
</table>

---

## 🏗️ 架构设计

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        应用层 · Application Layer                         │
├─────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  PC Web 端   │  │  PWA 离线端  │  │  移动 H5 端  │  │ 桌面客户端  │  │
│  │  Next.js 15  │  │  Vite+React  │  │  响应式布局  │  │  Tauri/Elect │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│                        业务逻辑层 · Business Logic                         │
├─────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐       │
│  │   AI 对话服务    │  │   代码编辑引擎   │  │   学习路径规划   │       │
│  │  LLM + Agent    │  │  Monaco + Diff   │  │  自适应推荐     │       │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘       │
├─────────────────────────────────────────────────────────────────────────┤
│                        组件层 · Component Layer                            │
├─────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────────────┐    │
│  │        shadcn/ui + Radix UI 原语 · 80+ 可组合 UI 组件           │    │
│  │  Dialog · Dropdown · Tabs · Tooltip · Toast · Select · Form     │    │
│  │  Accordion · Avatar · Badge · Calendar · Carousel · Chart · ... │    │
│  └──────────────────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────────────────┤
│                        基础设施层 · Infrastructure                         │
├─────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Zustand     │  │  React Query │  │  NextAuth    │  │  Docker/K8s  │  │
│  │  状态管理    │  │  数据获取    │  │  认证授权    │  │  容器编排    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

## 🛠️ 技术栈

| 层级 | 技术 | 版本 | 说明 |
|------|------|------|------|
| **框架** | Next.js | 15.5.20 | React 全栈框架，App Router |
| **UI 引擎** | React | 19.2.7 | 最新稳定版并发渲染 |
| **语言** | TypeScript | 5.9.2 | 严格模式类型安全 |
| **样式** | Tailwind CSS | 3.4.17 | 原子化 CSS 框架 |
| **组件库** | shadcn/ui + Radix UI | Latest | 无障碍原语组件 |
| **动画** | Framer Motion | 12.42.2 | 声明式动画库 |
| **状态管理** | Zustand | 5.0.14 | 轻量响应式状态 |
| **表单** | React Hook Form + Zod | 7.81 / 3.25 | 类型安全表单方案 |
| **图表** | Recharts | 2.15.4 | React 图表库 |
| **测试** | Vitest + Storybook | 3.2 / 9.1 | 单元测试 + 组件探索 |
| **包管理** | pnpm | 10.x | 高性能包管理器 |
| **部署** | Docker + Kubernetes | - | 容器化编排部署 |

---

## 📁 项目结构

```
YYC3-Edu-Basic/
├── app/                          # Next.js App Router 路由
│   ├── api/                      # API 路由（RESTful）
│   │   ├── learning-paths/       # 学习路径接口
│   │   └── students/             # 学生数据接口
│   ├── visual-programming/       # 可视化编程页面
│   ├── globals.css               # 全局样式主题变量
│   ├── layout.tsx                # 根布局组件
│   └── page.tsx                  # 首页入口
├── components/                   # 共享组件
│   ├── ui/                       # shadcn/ui 基础组件
│   ├── skeletons/                # 骨架屏组件
│   ├── animated-sidebar.tsx      # 动画侧边栏
│   ├── global-audit-dashboard.tsx # 全局审核仪表盘
│   ├── theme-provider.tsx        # 主题提供者
│   ├── typewriter-effect.tsx     # 打字机效果
│   └── visual-programming.tsx    # 可视化编程组件
├── config/                       # 配置文件
│   ├── audit-config.ts           # 审核系统配置
│   └── education-system.ts       # 教育系统配置
├── hooks/                        # 自定义 Hooks
├── lib/                          # 核心库
├── public/                       # 静态资源
│   ├── Family-001.png            # 品牌家族形象
│   └── yyc3-blue/                # 多平台图标集
├── docs/                         # 文档体系
│   ├── YYC3-团队通用-标准规范/   # 五高五标五化五维核心规范
│   ├── AI-Dev/                   # AI 开发框架
│   └── 学习组件/                 # 学习组件文档
├── deploy/                       # 部署配置
│   ├── k8s/                      # Kubernetes 编排
│   │   ├── base/                 # 基础资源
│   │   ├── canary/               # 金丝雀发布
│   │   ├── bluegreen/            # 蓝绿部署
│   │   └── argo-rollouts/        # Argo 渐进发布
│   └── ...                       # Docker / Nginx 配置
├── miniprogram/                  # 微信小程序端
├── plugins/                      # 插件系统 SDK
├── .github/workflows/            # CI/CD 工作流
│   ├── ci.yml                    # 持续集成
│   ├── docker.yml                # 镜像构建
│   ├── k8s-deploy.yml            # K8s 部署
│   ├── vercel.yml                # Vercel 部署
│   └── argo-rollouts.yml         # Argo 金丝雀
├── package.json                  # 依赖管理
├── next.config.mjs               # Next.js 配置
├── tailwind.config.js            # Tailwind 配置
├── docker-compose.yml            # 本地开发编排
├── Dockerfile                    # 容器镜像
└── tsconfig.json                 # TypeScript 配置
```

---

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18.18
- **pnpm** >= 9.0（推荐 10.x）
- **Docker**（可选，用于容器化部署）

### 安装与运行

```bash
# 1. 克隆仓库
git clone https://github.com/YanYuCloudCube/YYC3-Edu-Basic.git
cd YYC3-Edu-Basic

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器（Turbopack）
pnpm dev

# 4. 构建生产版本
pnpm build

# 5. 运行测试
pnpm test
```

应用将在 `http://localhost:3000` 启动。

### Docker 部署

```bash
# 构建并启动
docker compose up -d

# 查看日志
docker compose logs -f
```

---

## 🧩 核心功能模块

### 🤖 AI 模型集成

- **多模型支持**：DeepSeek / Qwen / Llama / YYC³ 衍生模型
- **本地推理**：Ollama 集成，支持 `llama3.1:8b`、`qwen2:7b`
- **智能调度**：基于负载和场景的模型路由引擎
- **流式响应**：SSE / WebSocket 实时交互

### 📚 智能教育系统

- **个性化学习路径**：自适应推荐算法
- **智能问答系统**：基于 RAG 的知识检索增强
- **学习进度追踪**：可视化学习曲线
- **知识图谱构建**：自动关联知识点

### 🔍 全局审核系统

| 维度 | 说明 | 状态 |
|------|------|------|
| 代码质量 | ESLint + TypeScript Strict | ✅ A+ |
| 性能分析 | Lighthouse + Web Vitals | ✅ 达标 |
| 安全扫描 | 依赖审计 + 代码扫描 | ✅ 安全 |
| 可访问性 | WCAG 2.1 AA 标准 | ✅ 达标 |
| 依赖管理 | 版本合规 + 许可审查 | ✅ 合规 |

### 🎨 可视化编程平台

- 拖拽式编程界面
- 实时代码预览与执行
- 可视化逻辑编排
- 一键导出与分享

---

## ⚙️ 部署架构

```
                    ┌─────────────┐
                    │   CDN 分发   │
                    │  Vercel Edge │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
         ┌────▼───┐  ┌────▼───┐  ┌────▼───┐
         │ Web 端 │  │ API 层 │  │ WebSocket│
         │ Next.js│  │  K8s   │  │  实时通信│
         └────────┘  └────┬───┘  └─────────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
         ┌────▼───┐ ┌────▼───┐ ┌────▼───┐
         │PostgreSQL│ │ Redis  │ │  AI 推理 │
         │  主从   │ │ 缓存   │ │ Ollama  │
         └────────┘ └────────┘ └─────────┘
```

### 部署策略

| 策略 | 描述 | 适用场景 |
|------|------|----------|
| 滚动更新 | 逐步替换 Pod 实例 | 常规发布 |
| 金丝雀发布 | 5% → 25% → 50% → 100% | 重大功能上线 |
| 蓝绿部署 | 两套环境无缝切换 | 关键业务迁移 |
| Argo Rollouts | 渐进式交付 + 自动回滚 | 精细化发布管控 |

---

## 📜 许可证

本项目基于 **MIT 许可证** 开源 — 详见 [LICENSE](LICENSE) 文件。

## 📬 联系我们

| 渠道 | 信息 |
|------|------|
| **📧 Email** | admin@0379.email |
| **👥 团队** | YanYuCloudCube Team |
| **🌐 官网** | [https://yyc3.cloud](https://yyc3.cloud) |

---

<div align="center">

> **「YYC³ · 言启千行代码，语枢万物智能」**
>
> ***Words Initiate Thousands of Lines of Code, Language Pivots the Intelligence of All Things***
>
> **© 2025-2026 YYC³ Team. All Rights Reserved.**
>
> *万象归元于云枢 | 深栈智启新纪元*

</div>
