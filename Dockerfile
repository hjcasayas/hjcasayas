FROM node:16.13.0-alpine3.14 AS base

FROM base AS development
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN npm install -g npm && \
    npm install -g pnpm && \
    pnpm install
COPY . /app/
EXPOSE 3000
ENTRYPOINT ["pnpm", "run"]
CMD [ "dev" ]

FROM base AS staging-builder
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN npm install -g npm && \
    npm install -g pnpm && \
    pnpm install
COPY . /app/
RUN rm .env.production.local && pnpm run build

FROM base AS staging
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN npm install -g npm && \
    npm install -g pnpm && \
    pnpm install --prod --ignore-scripts

COPY --from=staging-builder /app/.next/ /app/.next/
COPY --from=staging-builder /app/public/ /app/public/
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp
EXPOSE 3000
ENTRYPOINT [ "pnpm", "run" ]
CMD [ "start" ]

FROM base AS production-builder
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN npm install -g npm && \
    npm install -g pnpm && \
    pnpm install
COPY . /app/
RUN pnpm run build

FROM base AS production
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN npm install -g npm && \
    npm install -g pnpm && \
    pnpm install --prod --ignore-scripts

COPY --from=production-builder /app/.next/ /app/.next/
COPY --from=production-builder /app/public/ /app/public/
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp
EXPOSE 3000
ENTRYPOINT [ "pnpm", "run" ]
CMD [ "start" ]
