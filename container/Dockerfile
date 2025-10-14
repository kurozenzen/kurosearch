# syntax=docker/dockerfile:1

# Common args
ARG PNPM_VERSION=10.17.0
ARG PLAYWRIGHT_BROWSERS="chromium firefox webkit"
ARG PROJECT_VERSION=1.1.0

FROM node:lts-bookworm AS node-tests
WORKDIR /app

# keep CI deterministic
ENV CI=true \
    NODE_ENV=test \
    PNPM_HOME=/root/.local/share/pnpm \
    PATH="/root/.local/share/pnpm:$PATH" \
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

# prepare minimal environment
# pin pnpm to same version as package.json
RUN corepack enable \
  && corepack prepare pnpm@${PNPM_VERSION} --activate

# Use cache for speed & fetch config
COPY ../package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm fetch

# bring in the rest of the app
COPY .. .

# strict lockfile-based install and run tests
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --offline \
 && pnpm run check \
 && pnpm run test:unit


FROM mcr.microsoft.com/playwright:v1.56.0-noble AS playwright-tests
WORKDIR /home/pwuser

ARG PNPM_VERSION

ENV CI=true \
    NODE_ENV=test \
    PNPM_HOME=/root/.local/share/pnpm \
    PATH="/root/.local/share/pnpm:$PATH"

RUN corepack enable \
 && corepack prepare pnpm@${PNPM_VERSION} --activate

# reuse previously generated node_modules & workspace
COPY --from=node-tests /app ./

RUN --mount=type=cache,id=playwright-browsers,target=/app/node_modules/playwright-core/.local-browsers \
    pnpm exec playwright install --with-deps

RUN pnpm run test:integration

FROM node:lts-alpine AS builder
WORKDIR /app

ARG PNPM_VERSION

ENV NODE_ENV=production \
    PNPM_HOME=/root/.local/share/pnpm \
    PATH="/root/.local/share/pnpm:$PATH"

RUN corepack enable \
  && corepack prepare pnpm@${PNPM_VERSION} --activate

COPY --from=playwright-tests /home/pwuser/ ./

RUN pnpm run build && \
    pnpm --filter=flur34 deploy --prod /app/prod

FROM gcr.io/distroless/nodejs22-debian12:nonroot AS runtime

ARG PROJECT_VERSION
ARG PNPM_VERSION

LABEL author=flurbudurbur \
    org.opencontainers.image.title="flur34" \
    org.opencontainers.image.description="A self-contained version of kurosearch.com" \
    org.opencontainers.image.version=${PROJECT_VERSION} \
    org.opencontainers.image.source="https://github.com/flur34/flur34" \
    org.opencontainers.image.authors="flurbudurbur 69259138+flurbudurbur@users.noreply.github.com"

ENV NODE_ENV=production \
    PORT=8080

WORKDIR /app

COPY --chown=nonroot:nonroot --from=builder /app/prod/node_modules ./node_modules
COPY --chown=nonroot:nonroot --from=builder /app/build ./build

EXPOSE 8080

CMD ["/app/build/index.js"]