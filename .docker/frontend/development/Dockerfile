FROM node:16.17.0-alpine3.16

WORKDIR /usr/src/app

COPY ./frontend/package*.json .

RUN npm install

COPY ./frontend/src ./src
COPY ./frontend/public ./public
COPY ./frontend/.eslintrc.json ./.eslintrc.json
COPY ./frontend/codegen.yml ./codegen.yml
COPY ./frontend/next.config.js ./next.config.js
COPY ./frontend/tsconfig.json ./tsconfig.json

EXPOSE 3000
CMD [ "npm", "run", "dev" ]
