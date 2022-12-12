FROM node:14-alpine

WORKDIR /app
ENV NODE_ENV production

COPY server ./server

CMD ["node", "server/server.js"]
