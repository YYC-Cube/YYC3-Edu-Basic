# 构建阶段
FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.17.0 --activate

# 复制依赖清单（利用缓存）
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 干净安装依赖
RUN pnpm install --frozen-lockfile

# 复制源码并构建
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# 运行阶段（精简独立产物）
FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

ENV PORT=3000
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=5 \
  CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
