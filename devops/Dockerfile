# Use an official Node runtime as a parent image
FROM node:21.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy node_modules directory into the Docker image
COPY node_modules ./node_modules

# Bundle app source inside the docker image
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# No line here

# Run the app when the container launches
CMD [ "node", "backend/server.js" ]