FROM node:22-alpine3.22 AS base

FROM base AS development
WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "dev" ]

FROM base AS staging-builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
RUN rm .env.production.local && npm run build

FROM base AS staging
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --omit=dev --ignore-scripts

COPY --from=staging-builder /app/.next/ /app/.next/
# COPY --from=staging-builder /app/public/ /app/public/
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]

FROM base AS production-builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
RUN npm run build

FROM base AS production
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --omit=dev --ignore-scripts

COPY --from=production-builder /app/.next/ /app/.next/
# COPY --from=production-builder /app/public/ /app/public/
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
