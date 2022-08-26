# Example Dockerfile

<!-- TODO Introduction -->
<!-- TODO Dockerfile standards
    - entrypoint vs cmd
    - using layers
    - using multistage builds for testing and agnostic builds
    - distroless, alpine, slim, standard
    - buildx, x86 & arm
 -->

```dockerfile
# This defines the starting docker image which contains the Linux Alpine OS and node already pre-installed
FROM node:18-alpine

# Define the working directory we'll be making changes within within the docker image
WORKDIR /app

# The EXPOSE instruction informs Docker that the container listens on the specified network ports at runtime.
EXPOSE 8080

# A note on dockerfile layers and build cache https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache
# Copy the local package.json and yar.lock file into the /app/ directory.
COPY package.json yarn.lock ./

# Run the yarn installation in order to install the dependencies for the application
RUN yarn install --production

# Copy the local dist folder from the installation into the /app/ directory
COPY dist ./

# Do not use ENTRYPOINT unless you know why you need to - always prefer CMD as the startup command is then still in your control. The ENTRYPOINT specifies a command that will _always_ be executed when the container starts.

# This is the command used to start any code we want running on in the container
CMD node ./rest-service/index.js
```
