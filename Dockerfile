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

FROM node:alpine

WORKDIR /usr/src/app

# Run the image as a non-root user
# RUN adduser -D frontend
# USER frontend


RUN npm install -g serve

COPY --from=build-deps /usr/src/app/build /build

EXPOSE 5000

CMD ["serve", "-s", "build"]