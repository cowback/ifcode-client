FROM node:10-slim

EXPOSE 80

COPY . /app

WORKDIR /app

RUN npm install
RUN npm run build
RUN npm install -g serve

ENTRYPOINT ["serve", "-s", "build", "-p", "80"]

