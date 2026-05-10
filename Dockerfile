FROM node:20-alpine AS deps
WORKDIR /app
ARG GH_PAT
RUN echo "@databeez-code:registry=https://npm.pkg.github.com" > .npmrc && \
    echo "//npm.pkg.github.com/:_authToken=${GH_PAT}" >> .npmrc
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps && rm -f .npmrc

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build-storybook

FROM nginx:alpine AS runner
COPY --from=builder /app/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
