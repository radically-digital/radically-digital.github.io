# Example Dockerfile

```dockerfile
# This defines the starting docker image which contains the Linux Alpine OS and node already pre-installed
FROM node:17.2.0-alpine

# Define the working directory we'll be making changes within within the docker image
WORKDIR /app

# Copy the local package.json and yar.lock file into the /app/ directory.
COPY package.json yarn.lock ./

# Run the yarn installation in order to install the dependencies for the application
RUN yarn install --production

# Copy the local dist folder from the installation into the /app/ directory
COPY dist ./

# This is the command used to start any code we want running on in the container
CMD node ./rest-service/index.js
```
