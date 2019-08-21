# Stage 1: Build the Production App

FROM node:latest as build-deps

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

ENV NODE_ENV=production

RUN npm install

COPY ./public ./public

COPY ./src ./src

RUN npm run build

# Stage 2: Run the Production App

FROM nginx:1.12-alpine

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]