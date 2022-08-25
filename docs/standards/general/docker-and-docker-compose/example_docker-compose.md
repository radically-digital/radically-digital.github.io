# Example docker-compose

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
    # Configure the applicaiton so that if there's an error it always just restarts
    restart: always
  # The next service is the database
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
