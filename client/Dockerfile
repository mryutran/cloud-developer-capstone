FROM python:3.9.13-alpine

FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm audit fix | true
COPY . .
RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
