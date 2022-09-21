FROM node:16.17.0-alpine3.16

WORKDIR /usr/src/app

COPY ./backend/package*.json .

RUN npm install

COPY ./backend/resolver ./resolver
COPY ./backend/db.ts ./db.ts
COPY ./backend/schema.ts ./schema.ts
COPY ./backend/server.ts ./server.ts

EXPOSE 4000
CMD [ "npx", "ts-node", "server.ts" ]
