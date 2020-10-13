
FROM node:14-slim

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ./package*.json ./
COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]
