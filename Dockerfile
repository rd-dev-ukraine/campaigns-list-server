FROM node:latest

ADD package.json /app/package.json
WORKDIR /app

ADD . /app

EXPOSE 4000

ENV NODE_PATH=/app/node_modules
ENV PATH=$PATH:/app/node_modules/.bin

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]