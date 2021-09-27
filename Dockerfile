FROM node:14-alpine
WORKDIR /app
RUN chown -R 1069:1069 /app
USER 1069
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile
ADD . /app/
RUN yarn build
CMD ["yarn", "start"]
