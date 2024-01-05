FROM node:15

WORKDIR /usr/src/app

COPY package.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm install 

COPY . .

EXPOSE 4747
CMD ["node", "index.js"]
