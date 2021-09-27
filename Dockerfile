FROM node:14-alpine
RUN chown -R 1069:1069 /app
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile
ADD . /app/
RUN yarn build
CMD ["yarn", "start"]
