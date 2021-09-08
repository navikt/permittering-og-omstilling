FROM navikt/node-express:14-alpine
ENV NODE_ENV production

WORKDIR /app
COPY public ./public
COPY .next ./.next
COPY package.json ./package.json yarn.lock ./yarn.lock
USER root
RUN chown -R apprunner:apprunner /app
USER apprunner
RUN yarn install --frozen-lockfile

EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["yarn", "start"]
