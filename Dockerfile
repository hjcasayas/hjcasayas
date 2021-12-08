FROM node:16.13.0-alpine3.14 AS base

FROM base AS dev
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN npm install -g pnpm \
    && pnpm install
COPY . /app/
EXPOSE 3000
ENTRYPOINT ["pnpm", "run"]
CMD [ "dev" ]

FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN npm install -g pnpm \
    && pnpm install
COPY . /app/
RUN pnpm run build

FROM base AS prod
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN npm install -g pnpm \
    && pnpm install --prod --ignore-scripts

COPY --from=builder /app/.next/ /app/.next/
COPY --from=builder /app/public/ /app/public/
EXPOSE 3000
ENTRYPOINT [ "pnpm", "run" ]
CMD [ "start" ]
