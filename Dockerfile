FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src/ ./src/
COPY public/ ./public/

EXPOSE 3000

CMD ["node", "src/app.js"]