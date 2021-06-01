FROM node:14.15.4 as base

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci
COPY . .
RUN npm run test

