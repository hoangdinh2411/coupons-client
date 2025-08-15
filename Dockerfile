# --- Deps ---
    FROM node:22-alpine AS deps
    WORKDIR /app
    COPY package*.json ./
    RUN --mount=type=cache,target=/root/.npm npm ci --include=dev
    
    # --- Builder ---
    FROM node:22-alpine AS build
    WORKDIR /app
    ENV NODE_ENV=production
    ENV NEXT_TELEMETRY_DISABLED=1
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    
    # Build với memory limit cao hơn
    RUN --mount=type=cache,target=/app/.next/cache \
        NODE_OPTIONS="--max-old-space-size=4096" \
        npm run build
    
    # --- Runner ---
    FROM node:22-alpine AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    ENV PORT=3000
    
    RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
    
    COPY --from=build /app/.next/standalone ./
    COPY --from=build /app/.next/static ./.next/static
    COPY --from=build /app/public ./public
    
    RUN mkdir -p .next/cache/images && chown -R nextjs:nextjs /app/.next
    
    USER nextjs
    EXPOSE 3000
    CMD ["node","server.js"]