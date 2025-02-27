FROM node:22.13.1-alpine3.21 AS base

FROM base AS development
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD [ "dev" ]

FROM base AS staging-builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
RUN rm .env.production.local && npm run build

FROM base AS staging
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --prod --ignore-scripts

COPY --from=staging-builder /app/.next/ /app/.next/
COPY --from=staging-builder /app/public/ /app/public/
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
RUN npm install --prod --ignore-scripts

COPY --from=production-builder /app/.next/ /app/.next/
COPY --from=production-builder /app/public/ /app/public/
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
