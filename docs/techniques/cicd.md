# CICD

CICD stands for Continuous Integration Continuous Delivery and consists of two major components.

Continuous Integration concerns automating the process of integrating your code changes into the main code repository.
This typically consists of more than just merging changes into the main branch but also involves running automated tests
and automated linters and formatters.

Continuous Delivery (alternatively named Continuous Deployment) involves releasing these integrated changes into
the world for all of your users to enjoy. This automated release process often involves pushing the code to a server
so it can be run.

## Where it's used

CICD processes are found in most projects that are deployed and run somewhere. CICD pipelines (the code which automates
this entire process) are typically either created by Software Engineers or DevOps Engineers.

## Why it's useful

CICD is implemented on the [Radically Digital Website](https://github.com/radically-digital/rad-website/blob/master/.github/workflows/production.yml)
in order to deploy the code to production (please note no automated process is run here as part of CI).

Examples of CICD pipelines implemented with CircleCI can be found [here](https://circleci.com/docs/2.0/examples-intro/).

## Business Case

The business wants to ensure that all code that is being released is production ready and
they want the risk of bugs to be minimalised. They also want the release process to be automated
to free up engineer's time and ensure that releases can be done as often as needed. Due to the
absence of CICD in the past companies often had to adhere to monthly or even bi-yearly releases.
Large companies now often release code hundreds of times per day.

## Developer Case

No developer wants to have to do manual releases. They are error prone and often involve a lot of paperwork.
Additionally, the addition of automated testing means that the feedback loop for bugs is often much shorter
and bugs overall will be reduced.

## Key Concepts

- Automated testing
- Automated linting
- Automated deployment

## Considerations

CICD often involves dealing with secrets such as API keys. These should _never_ be written into code.
These should always be encrypted and stored as environment variables. CICD tools such as CircleCI often
provide a secure place to store these variables.

Some tools in this space only deal with CI and some only deal with CD. Additionally, some are specialised
while some are more generalised. An example of a specialised tool that only deals with CD is ArgoCD. This
cannot be used to accomplish continuous integration. You will need a separate tool to achieve this.

## What's out there?

- [CircleCI](https://circleci.com/)
- [Argo CD](https://argoproj.github.io/cd/)
- [Jenkins](https://www.jenkins.io/)
- [Github Actions](https://github.com/features/actions)

There are many many more CICD tools out there.

## Exercise

In this exercise we are going to create a simple CICD pipeline for a small NodeJS Express app.
Please do the following:

Install the local CircleCI CLI package on your Mac

```bash
brew install circleci
```

If you don't already have it clone the RAD Express Boilerplate repository

```bash
git clone git@github.com:radically-digital/example-express-boilerplate.git
```

Switch to the `no-cicd` branch

```bash
git checkout no-cicd
```

Based on your research create a CircleCI pipeline that satisfies the following requirements:

- It must have two jobs - one named `unit-test` which runs the unit tests and one named `build-docker-image`
- `unit-test` should run on all branches and `build-docker-image` should only run on the main branch
- `build-docker-image` should require `unit-test` to be run before it can be run
- Both jobs should use the `cimg/node:17.2.0` Docker image
- `unit-test` should run all unit tests using `yarn test`
- Run the `unit-test` job using `circleci local execute --job unit-test` and ensure it runs all tests and they pass.
  One limitation of the local CircleCI CLI is that jobs have to be run separately. In reality they will form part of a
  workflow and will be run together
- `build-docker-image` should build the application using `yarn build` and then create a Docker image with
  the following code. Please note this code should never be used in a production application

  ```yaml
  - run:
      name: Create docker image
      command: |
        # NOTE: Do not use sudo in an actual build
        # This is only being used here to ensure the example works locally
        sudo docker build . -t express-boilerplate
  ```

- Run the `build-docker-image` job using `circleci local execute --job build-docker-image` and ensure you see
  10 steps outputted in your command line finishing with the following
  ```bash
  => => naming to docker.io/library/express-boilerplate
  ```
- You have now built your own CICD pipeline!

## Learn more

- [Jenkins - The Complete Tutorial](https://www.udemy.com/course/jenkins-course-devops-cicd-complete-reference/) -
  this will provide a comprehensive introduction to Jenkins.
- [ArgoCD Tutorial](https://www.youtube.com/watch?v=2WSJF7d8dUg) - ArgoCD is aimed purely towards CD and therefore will
  involve different concepts to CICD tools
- [GitOps](https://www.gitops.tech/) - This is a technique used to achieve CD. Its a concept everyone interested in CICD should read up on

## Discussion?

<!-- To be had in person - link to recordings -->
