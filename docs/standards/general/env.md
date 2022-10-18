# env

Often applications will require the use of sensitive information
such as database passwords or API keys. We call this sensitive information
secrets. We do not want to expose these secrets to anyone except the code that
requires them and to the engineers that need to work directly with them. We also
do not want them to be stored in any code versioning system such as Github as this
is a huge security risk.

To ensure these secrets don't get exposed we need to keep them as environment variables. When
the application is deployed it will read these environment variables from an external source.
This can be within a cloud service such as AWS SSM or the environment variables can be stored
within the CICD service and injected into the application at build time.

Locally we will store secrets in an env file which is read into the code when the
application is launched.

In addition to its security benefits we can use different environment variables for each environment in order to customise which external services we connect to. This can be based on whether the environment is development, staging, production or any other environment the business may have.

For example, this allows us to connect to a local database for local development, a staging database in the staging environment and the production database containing real customer data in production. This is done by setting the database connection variables (e.g. database connection string) based on environment.

## Where it's used

Secrets are used in all areas of software engineering. In the frontend they may be used
to store things like API keys. In the backend they can host database connection details.
In infrastructure they can be used to host passwords or cloud service credentials.

## Why it's useful

Storing secrets in code is a huge security risk. Environment variables and local env files
mitigate this risk.

## Business Case

If we have, for example, a database password stored in plain text in our code a malicious external
actor can gain access to this code and therefore have access to our database password. With this
they can gain access to sensitive user data which would be extremely bad for the compromised business.

Another example is if the malicious actor got access to AWS credentials. They can then access all of the
business' cloud resources which may include sensitive data. They would also be able to destroy all of
the business' infrastructure at will.

Companies may be held at ransom for large amounts of money by malicious actors using exposed secrets.

Its also important that the data is not manipulated accidentally by non-malicious actors - for example the business' software engineers. This may happen if they have accidentally connected to the production database instead of their local database instance. Using environment variables (alongside other security precautions) will mitigate this risk.

## Developer Case

Using env and environment variables makes it easy to include references to sensitive information within code without including that sensitive information itself. It also makes it much easier to write code that will work for every environment while avoiding having to write many if statements to check what environment you're in. For example the following is now redundant as no checks are needed:

```sh
if(process.env.NODE_ENV === 'production'){
  // Do something
} if(process.env.NODE_ENV === 'development'){
  // Do something else
}
```

## Key Concepts

- Environment management
- Secret storage
- Env files

## Considerations

The env file should **never** be uploaded to any version control system as it will include sensitive information. If this is ever accidentally uploaded this information should be considered compromised and all included secrets should be changed. A `.gitignore` file can be used to ensure this doesn't happen.

## What's out there?

.env files can be used with many languages and can be read in multiple ways. For example:

- JavaScript can use `process.env.[variable-name]` to load env variables. This sometimes requires the use of the dotenv NPM package.
- In Python the `os.environ.get()` and `os.getenv()` functions can be used

## Exercise

If you don't already have it clone the RAD Express Boilerplate repository

```bash
git clone git@github.com:radically-digital/example-express-boilerplate.git
```

Ensure you're on the `main` branch

```bash
git checkout main
```

Add a `.env` file to the root of the project and include the following fake API key:

```sh
API_SECRET_KEY=this-is-a-key-do-not-share-it
```

Add a `.gitignore` file which includes `.env` to ensure that this file and its secrets never get uploaded to Git. Research online if you're unsure on how to do this.

In the `index.js` file log your API secret key to the console and ensure it prints out the correct information. To load this information from the `.env` file you may have to use an NPM library such as `dotenv`.

## Learn more

- [Working with environment variables in Python](https://www.twilio.com/blog/environment-variables-python)
- [AWS SSM Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)
- [GCP Secret Manager](https://cloud.google.com/secret-manager)
- [Using environment variables in CircleCI](https://circleci.com/docs/2.0/env-vars/)

## Discussion?

<!-- To be had in person - link to recordings -->
