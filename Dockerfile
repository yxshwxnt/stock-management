FROM node:17

WORKDIR /app

COPY package*.json ./
# RUN npm install -g npm@latest

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
