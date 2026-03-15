# Etapa 1: Build da aplicação Next.js
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: Imagem final e enxuta para produção
FROM node:18-alpine
WORKDIR /app

# Copia os arquivos necessários da etapa de build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expõe a porta que o Cloud Run vai usar
EXPOSE 8080

# Comando para iniciar a aplicação
ENV PORT 8080
CMD ["node", "server.js"]