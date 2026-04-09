FROM node:14-buster

WORKDIR /app

COPY package.json package-lock.json ./

# Pre-install dependencies into the image layer to speed up the first boot.
RUN npm install

EXPOSE 8000
