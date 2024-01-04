FROM node:15

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 4747
