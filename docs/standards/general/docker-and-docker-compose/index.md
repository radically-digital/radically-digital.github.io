# Docker and Docker Compose

Docker is a container tool. A container can be see as mini operating system which an application or code can be run within. This is useful because all applications have their own libraries and dependencies they require and docker allows a user to isolate and manage those the dependencies in a repeatable and dependable way. On top of this, code prepared by docker is stored in files called docker images which are versionable and immutable files which can be used and shared just as any other computer files.

Docker Compose is a tool for coordinating multiple applications running within docker containers. As software often requires the coordination of multiple applications to provide a service, docker compose provides a user with the capability to coordinate the creation and relationship between multiple applications running within docker containers to provide the service.

## Where it's used

Docker is typically used for running applications locally and in service environments. It is not, however, typically used for mobile deployments as it does require extra overhead resources to run (however, there are tools out there for it). For example, as described above, docker is typically used on a local environment to isolate and build the dependencies for an application, but then the images created from this local development can be shared and run on servers and production environments with the confidence that only the exact code expected is being run.

## Why it's useful

As explained above the benefits from using docker include:

- Inhibiting dependency clashes for applications by isolating dependencies
- Ensuring code/applications have repeatable and dependable environments to run within
- Code built by docker is stored within docker image files which are immutable and versionable files
- Because the docker image files are immutable and versionable code is shareable with a high level of confidence
- Docker compose allows the coordination of multiple docker containers providing the ability to create entire services dependent upon multiple applications

## Business Case

Docker is a functional tool so it does not have any direct business use cases. The functionality it provides is to improve engineering practices making it easier to build and deploy code.

## Developer Case

- The OVO Boost Portal uses both docker and docker compose to build and coordinate the code for it's front end React Application and it's backend API
- The EffortlessWorks application code is developed locally as a docker container but deployed to AWS as a docker file

## Key Concepts

- Docker is an application.
- The docker application is what runs the docker containers
- Docker containers on their own do not do anything
- A docker container runs a docker image which is a file containing code and environmental dependencies which is what is run as an application
- Once a docker image is created it is immutable and versionable
- Once a docker container begins to run a docker image, the code running in that container can be altered
- The altered code can only be saved as a new docker image with a new version
- A docker image is created by docker using a Dockerfile
- A Dockerfile is stored within a repository which contains the source files and environmental dependencies needed to build the docker image and/or run the docker image in a container
- A docker-compose file is what is used to coordinate the related docker containers

## Considerations

- Docker is not the tool for all situations. For example, docker is not used for lambdas or cloud functions as the cloud service would provide the dependencies necessary for the cloud function to run.
- Docker's functional use ends at coordinating docker containers but it does not, for example, supply infrastructure configuration such as kubernetes

## What's out there?

- Kuberneters is a common alternative to docker as it supplies infrastructure as code whild docker does not
- Ansible is a common packaging tool if the runtime functionality is not necessary
- Podman is also a container tool

## Exercises

1. Install docker and docker-compose

   If you followed [setting up your mac](https://ohmybuck.com/2020-06-08-09-41-setting-up-your-mac/) you should already have docker installed. However, if you do not you can install docker through brew `brew install --cask docker`

2. Check out the express example application
   `git clone -b no-docker git@github.com:radically-digital/example-express-boilerplate.git`

3. Dockerize the application

   1. In the root of the example-express-boilerplate application create a file called Dockerfile

   2. On the top line add `FROM node:17.2.0-alpine`

      This defines the base image to start with. Because images are immutable this means we'll be copying this image and adding to it. While docker images can contain just about anything we're starting with an image which includes the Linux Alpine Operating System which has nodejs pre-installed in it. Using this image means we know which operating system we'll be working with and means we don't have to bother with installing nodejs ourselves.

   3. Next add `WORKDIR /app`

      This line create an '/app' directory in the new image and sets this to the current working directory.

   4. Next add `COPY package.json yarn.lock ./`

      This line copies the package.json file and the yarn.lock files into the docker image which we'll then use to install the dependencies for the application.

   5. Next add `RUN yarn install --production`

      This line installs the application just as you would instal the application locally.

   6. Next add `COPY dist ./`

      This line copies up the dist folder to the docker image.

   7. Next add `CMD node ./rest-service/index.js`

      Finally, this line specifies the command to be run on the server to run any code you want run on the server.

4. Create your docker image and run the docker container

   1. Install the application per the README.md file

   2. Create the docker image and tag the image with the name of the repo

      `docker build -t example-express-boilerplate .`

   3. Run the docker image in a docker container

      The '-p 8080:8080' maps the docker container port 8080 to your local machine's port 8080

      `docker run -p 8080:8080 example-express-boilerplate`

   4. You should now be able to access the application on:

      `localhost:8080/health-check`

      You should see `{"healthy":true}` as a response

5. Add docker-compose to the application

   1. In the root of the example-express-boilerplate application create a file called docker-compose.yml

   2. To set the version of the docker-compose file we're using add the line:

      `version: "3.9"`

   3. To begin adding the applications/services we want to run with this docker compose file add the line:

      `services:`

   4. To add our first service we add the following line - ensure it is tabbed one step further than the services line:

      ` example-express-boilerplate:`

   5. To add the build information add - ensure this is an additional tab up from the example-express-boilerplate:

      ` build:`

   6. To add the local directory as the working directory add the context:

      ` context: .`

   7. To add the dockerfile to specific how the image should be built add:

      ` dockerfile: Dockerfile`

   8. To bind the port the application is running on in express (8080) to the localhost port add (same tab level as build):

      ````ports:
          - 8080:8080```

      ````

   9. To mount the local src directory so that we can still make changes to the code while it's running add (same tab level as build):

      ```volumes:
          - ./src:/usr/src/app
      ```

   10. Then to ensure the application always tries to restart if there are ever issues add (same tab level as build)

       `restart: always`

6. You can now control the docker container(s) via docker-compose with:

   1. In the root of the project build the docker code with:

      `docker-compose build`

   2. In the root of the project start the container with:

      `docker-compose up`

   3. OR: You can do both in one step with:

      `docker-compose up --build`

   4. You should now be able to access the application via:

      `localhost:8080/health-check`

7. Add an additional application to docker-compose

   1. You can add applications in the docker compose file that will run when you can docker-compose up, for example, a database. On the same tab height as example-express-boilerplate, add:

      `db:`

   2. To define the database image:

      `image: mysql`

   3. The database might need a route password, add in the environment:

      ```environment:
         MYSQL_ROOT_PASSWORD: password
      ```

   4. To mount the local src directory so that we can still make changes to the code while it's running add (same tab level as build), in the same way as we did before:

   ```volumes:
      - db-data:/var/lib/mysql
   ```

   5. It is important to now add the volume on the route of the file:

      ```volumes:
            db-data:
      ```

   6. No run the commands as stated in step 6 again!

## Learn more

    https://docs.docker.com/get-started/
