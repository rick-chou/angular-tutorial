FROM node:16.17.1-alpine3.15 AS build
ENV APP_PATH=/usr/local/app

WORKDIR $APP_PATH
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx
ENV APP_PATH=/usr/local/app

COPY --from=build $APP_PATH/dist/ng-tutorial/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/

EXPOSE 80