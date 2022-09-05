FROM node:16.17.0-alpine3.16

WORKDIR /usr/src/app

COPY ./backend/package*.json .

RUN npm install

COPY ./backend .

EXPOSE 4000
CMD [ "npx", "ts-node", "server.ts" ]