# Use an official Node runtime as a parent image
FROM node:21.0-bookworm-slim
ARG APP_PORT=5010

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json, package-lock.json and necessary directories to the working directory
COPY package*.json ./
COPY frontend ./frontend
COPY backend ./backend
COPY ai_agent ./ai_agent

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside the docker image
COPY . .

# Make port 5010 available to the world outside this container
EXPOSE $APP_PORT

# Run the app when the container launches
CMD [ "npm", "start" ]