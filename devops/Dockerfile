# Use an official Node runtime as a parent image
FROM node:21.0
USER node
RUN npm install
WORKDIR /usr/src/app
COPY . .
EXPOSE 8080
HEALTHCHECK CMD curl --fail http://localhost:8080 || exit 1
CMD [ "node", "backend/server.js" ]