FROM node:latest

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

RUN npm install pm2 -g

CMD ["pm2-runtime", "src/server.ts"]
