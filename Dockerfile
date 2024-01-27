FROM node:21-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM alpine:latest as app
WORKDIR /app
COPY --from=build /app/build /app/build
