FROM node:16.17.1-alpine3.15 as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN npm install

RUN npm run start

EXPOSE 80