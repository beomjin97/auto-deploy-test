FROM node:16.18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN apk update && apk add bash
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY . .
RUN npm run build

CMD ["npm", "run", "start:prod"]

EXPOSE 8080