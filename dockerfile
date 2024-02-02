FROM node:latest
WORKDIR /react-app

COPY package*.json ./
COPY src/ ./src
COPY *.html ./
COPY *.json ./
COPY *.ts ./

EXPOSE 8080
RUN npm install
RUN npm run build

CMD ["npm", "run", "dev"]
