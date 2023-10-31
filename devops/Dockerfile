# Use an official Node runtime as a parent image
  FROM node:21.0

# Run the app when the container launches
  CMD [ "node", "backend/server.js" ]
  RUN npm install

# Bundle app source inside the docker image
  COPY . .

# Make port 8080 available to the world outside this container
  EXPOSE 8080

# Run the app when the container launches
CMD [ "node", "backend/server.js" ]