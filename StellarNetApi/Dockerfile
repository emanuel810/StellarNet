FROM node:14

WORKDIR /stellarnetapi
COPY package.json .
RUN npm install
COPY . .
CMD npm start
