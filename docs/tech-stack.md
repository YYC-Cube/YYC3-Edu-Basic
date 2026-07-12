
---
file: tech-stack.md
description: YYC³ 智能教育平台技术栈全览 — 前端·后端·AI·DevOps 四层技术选型
author: YanYuCloudCube Team <admin@0379.email>
version: v2.0.0
created: 2026-07-12
updated: 2026-07-12
status: stable
tags: [tech-stack],[architecture],[frontend],[backend],[devops]
category: technical
language: zh-CN
audience: developers,managers
complexity: intermediate
---

# YYC³ 技术栈总览

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-1.3-FF4B4B?logo=radixui&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-10.x-F69220?logo=pnpm&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-24.0-2496ED?logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-1.28-326CE5?logo=kubernetes&logoColor=white)

</div>

---

## 🎯 前端技术栈

### 核心框架

| 技术 | 版本 | 用途 | 状态 |
|------|------|------|------|
| **Next.js** | 15.5.20 | React 全栈框架（App Router） | ✅ 生产就绪 |
| **React** | 19.2.7 | UI 引擎（并发渲染） | ✅ 生产就绪 |
| **TypeScript** | 5.9.2 | 类型安全（strict 模式） | ✅ 强制使用 |

### UI 与样式

| 技术 | 版本 | 用途 | 状态 |
|------|------|------|------|
| **Tailwind CSS** | 3.4.17 | 原子化 CSS 框架 | ✅ 生产就绪 |
| **shadcn/ui** | latest | 可组合 UI 组件集合 | ✅ 生产就绪 |
| **Radix UI** | 1.3+ | 无障碍 UI 原语（30+ 组件） | ✅ 生产就绪 |
| **Framer Motion** | 12.42.2 | 声明式动画 | ✅ 生产就绪 |
| **Geist** | 1.7.2 | Vercel 字体（Sans + Mono） | ✅ 生产就绪 |

### 状态管理与数据

| 技术 | 版本 | 用途 | 状态 |
|------|------|------|------|
| **Zustand** | 5.0.14 | 轻量响应式状态管理 | ✅ 生产就绪 |
| **React Hook Form** | 7.81.0 | 高性能表单管理 | ✅ 生产就绪 |
| **Zod** | 3.25.76 | TypeScript 优先的 schema 校验 | ✅ 强制使用 |
| **Recharts** | 2.15.4 | React 图表可视化 | ✅ 生产就绪 |
| **date-fns** | 4.4.0 | 日期工具库 | ✅ 生产就绪 |

### 开发工具

| 技术 | 版本 | 用途 | 状态 |
|------|------|------|------|
| **Vitest** | 3.2.4 | 单元/组件测试 | ✅ 已配置 |
| **Storybook** | 9.1.8 | 组件探索与文档 | ✅ 已配置 |
| **Playwright** | 1.55.1 | E2E 浏览器测试 | ✅ 已配置 |
| **ESLint** | 9.x | 代码质量检查 | ✅ 强制执行 |
| **Husky + Lint-staged** | 9.1 / 16.2 | Git 提交钩子 | ✅ 已配置 |

---

## ⚙️ 后端技术栈

### API 与运行时

| 技术 | 用途 | 状态 |
|------|------|------|
| **Next.js API Routes** | RESTful API 端点 | ✅ 生产就绪 |
| **Python FastAPI** | AI 服务/学习路径服务 | ✅ 可用 |
| **Python Uvicorn** | ASGI 服务器 | ✅ 可用 |

### 数据层

| 技术 | 用途 | 状态 |
|------|------|------|
| **PostgreSQL** | 主数据库（关系型） | ✅ 已规划 |
| **Redis** | 缓存 / 会话管理 | ✅ 已规划 |
| **IndexedDB** | 客户端离线存储（PWA） | ✅ 已实现 |

---

## 🤖 AI 与智能层

### 大语言模型

| 模型 | 部署方式 | 用途 | 状态 |
|------|---------|------|------|
| **DeepSeek** | 云端 API | 智能对话、代码生成 | ✅ 已集成 |
| **Qwen2** (7B) | Ollama 本地 | 私有部署推理 | ✅ 可用 |
| **Llama 3.1** (8B) | Ollama 本地 | 通用文本生成 | ✅ 可用 |
| **YYC³ 衍生模型** | 云端/本地 | 领域特化推理 | 🔄 开发中 |

### AI 基础设施

| 技术 | 用途 | 状态 |
|------|------|------|
| **Ollama** | 本地模型推理服务 | ✅ 已配置 |
| **pgvector** | 向量检索（RAG） | ✅ 已规划 |
| **LangChain** | LLM 编排框架 | 🔄 评估中 |

---

## 🐳 DevOps 与部署

### 容器化

| 技术 | 用途 | 配置 |
|------|------|------|
| **Docker** | 应用容器化 | `Dockerfile` + `docker-compose.yml` |
| **Docker Compose** | 本地多服务编排 | ollama + app + db |

### Kubernetes 编排

| 资源 | 用途 | 位置 |
|------|------|------|
| Namespace | 环境隔离 | `deploy/k8s/base/namespace.yaml` |
| Deployment | 应用部署 | `deploy/k8s/base/deployment.yaml` |
| Service | 服务暴露 | `deploy/k8s/base/service.yaml` |
| Ingress | 流量入口 | `deploy/k8s/base/ingress.yaml` |

### 部署策略

```
滚动更新 ─── 渐进替换 ─── 常规发布
金丝雀   ─── 5→25→50→100% ── 重大功能
蓝绿     ─── 双环境切换 ─── 关键业务
Argo     ─── 自动回滚 ──── 精细管控
```

### CI/CD 流水线

| 工作流 | 触发 | 行为 |
|--------|------|------|
| `ci.yml` | PR / push | Lint + Test + Build |
| `docker.yml` | push main | 构建镜像 → GHCR/DockerHub |
| `vercel.yml` | PR / push main | Vercel 预览/生产部署 |
| `k8s-deploy.yml` | 手动触发 | K8s 滚动/金丝雀/蓝绿部署 |

---

## 🔐 安全体系

| 维度 | 措施 | 状态 |
|------|------|------|
| 认证 | NextAuth / JWT | ✅ 已规划 |
| 输入校验 | Zod Schema 验证 | ✅ 强制使用 |
| 依赖安全 | `pnpm audit` / Dependabot | ✅ 已配置 |
| 代码扫描 | ESLint 安全规则 | ✅ 已配置 |
| 密钥管理 | 环境变量 `.env.local` | ✅ 规范执行 |
| CORS | API 路由中间件 | ✅ 已配置 |

---

## 📊 监控与可观测性

| 工具 | 用途 | 状态 |
|------|------|------|
| Vercel Analytics | 前端性能监控 | 🔄 待配置 |
| Prometheus + Grafana | 后端指标监控 | 🔄 待配置 |
| ELK Stack | 日志聚合分析 | 🔄 待配置 |
| Sentry | 错误追踪 | 🔄 待配置 |

---

<div align="center">

> **技术栈版本锁定策略**：所有依赖使用 `^` 精确到 minor 版本，配合 `pnpm-lock.yaml` 锁定可重现构建。
>
> *© 2025-2026 YYC³ Team. All Rights Reserved.*

</div>
