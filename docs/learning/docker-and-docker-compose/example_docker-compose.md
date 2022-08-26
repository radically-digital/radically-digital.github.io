# Example docker-compose

<!-- TODO introduction -->
<!-- TODO notes on docker-compose
  - .env
  - env overrides https://github.com/nickjj/build-a-saas-app-with-flask/blob/master/docker-compose.override.example.yml
  - https://github.com/containrrr/watchtower
-->

```yaml
# Define the version of docker-compose files we want to use
version: "3.9" # optional since v1.27.0

#Define the services we want to build
services:
  # Our first service we call: example-express-boilerplate
  example-express-boilerplate:
    # Define the build information
    build:
      # The 'context' or current working directory is our current directory, which is also '.'
      context: .
      # The file we use to build this application
      dockerfile: Dockerfile
    # The port mapping between the docker container and the localhost
    ports:
      - 8080:8080
    # Mount the local src directory so that we can still make changes to the code while it's running
    volumes:
      - ./src:/usr/src/app
    # Configure the application so that if there's an error it always just restarts - use this sparingly as it will likely leave a running process for months after leaving the project.
    restart: always

  # database service
  db:
    # define the image
    image: "mysql"
    # the environment
    environment:
      # the password to get access to the database
      MYSQL_ROOT_PASSWORD: password
    # Mount the local src directory so that we can still make changes to the code while it's running
    volumes:
      - db-data:/var/lib/mysql

volumes:
  db-data:
```
