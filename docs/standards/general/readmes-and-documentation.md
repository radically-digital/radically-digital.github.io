# Readmes and documentation

Readmes and documentation are typically the first port of call for any new developer on a project. A good readme should tell the new engineer the purpose of the project, where its used and how to run it. Readmes are the primary source of documentation within most codebases.

Additional codebase documentation may be provided on top of readmes to give additional context to both new and existing engineers. This documentation may be manually written or may be generated based on the code.

It is essential to provide at least a good readme as part of every codebase an engineer works on. Without this the codebase will become massively more difficult to work on, manage and deploy.

## Where it's used

Readmes should be provided as part of every codebase from frontend through backend to infrastructure as code and beyond.

## Why it's useful

Using the [RAD example readme](https://github.com/radically-digital/example-readme) its easy to see at a glance how to work with the codebase at a high level. It explains what you require to run the codebase, how to set up local development, how to run the project, how to run tests on the project, how to deploy the project and more. Without this any new engineers would have to spend a great deal of time investigating this on their own. Even current engineers may forget certain parts of the process and may have to refer back to this occasionally.

Additional documentation can help when the project is up and running. A lot of this documentation will be automatically generated. For example, this documentation could come in the form of Swagger or OpenAPI documentation to highlight which endpoints are available if the codebase is an API. It could come in the form of storybook or another component library browser to document components on a frontend project. It can also come in the form of tests which serve as documentation for the code that they test.

## Business Case

The best way to get engineers up and running on a project quickly is through good documentation. It is also the quickest way for engineers to get to grips with another project or external API that they may need to interact with. The quicker engineers can do these things the quicker features will be delivered.

## Developer Case

Codebases without good documentation are frustrating to work with. Writing good readmes and documentation will massively reduce this frustration.

## Considerations

Over-documentation can also happen. Ensure your readme and documentation only contains what is needed and is not too verbose.

## What's out there?

- [The RAD example readme](https://github.com/radically-digital/example-readme)
- [Storybook documentation](https://github.com/storybookjs/storybook)
- [Swagger docs](https://swagger.io/docs/)

## Exercise

If you don't already have it clone the RAD Express Boilerplate repository

```bash
git clone git@github.com:radically-digital/example-express-boilerplate.git
```

Checkout the `no-readme` branch

```bash
git checkout no-readme
```

Write a readme using the [RAD example readme](https://github.com/radically-digital/example-readme) as a template. You should write the readme with the following in mind:

- The project is installed using `yarn`
- The project is run using `yarn start` and tested using `yarn test`
- It should be possible for a new developer to get the project fully set up and running just by reading this document
- It can be assumed that the new developer has already cloned repository so instructions for this are not needed

## Learn more

- [How to write good readme files](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)

## Discussion?

<!-- To be had in person - link to recordings -->
