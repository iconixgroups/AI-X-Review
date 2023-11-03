FROM node:21.0-bookworm-slim
RUN useradd -ms /bin/bash nodeuser
USER nodeuser
WORKDIR /usr/src/app
CMD [ "npm", "start" ]
COPY 'backend' './backend'
COPY 'ai_agent' './ai_agent'

# Install any needed packages specified in package.json
RUN 'npm install'

# Bundle app source inside the docker image
COPY '.' '.'

# Make port 8080 available to the world outside this container
EXPOSE 8080

# No line here

# Run the app when the container launches
CMD [ 'npm', 'start' ]
HEALTHCHECK CMD curl --fail http://localhost:8080/health || exit 1