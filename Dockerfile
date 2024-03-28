# Notes:
# - Node major version must be EXACTLY defined, DO NOT add minor version
# - npm major and minor version must be EXACTLY defined
ARG NODE_IMAGE_VERSION=20-alpine
ARG NPM_VERSION=10.2

# 1 - Build Stage
FROM node:${NODE_IMAGE_VERSION} AS builder

ARG NPM_VERSION
RUN apk update \
  && apk upgrade --latest --no-cache \
  && npm i -g npm@$NPM_VERSION

WORKDIR /src

COPY package*.json ./
RUN npm ci --no-fund --no-audit

COPY . ./
RUN NODE_ENV=production \
  && npm run build \
  && npm prune --production \
  && npm cache clean --force

# 2 - Final Stage
FROM node:${NODE_IMAGE_VERSION} AS final

RUN apk update \
  && apk upgrade --latest --no-cache

WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

COPY --from=builder ./src/.output ./

EXPOSE $PORT

CMD ["node", "/app/server/index.mjs"]
