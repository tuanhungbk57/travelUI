## Use Node Slim image
FROM node:latest

WORKDIR /app

## Copy source code
COPY . /app/

## Start the application
CMD npm run serve:ssr