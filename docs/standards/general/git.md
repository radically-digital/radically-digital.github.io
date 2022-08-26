# Git

Git, alongside other version control systems, allows software engineers to store their code in incremental versions. This code is saved on a server or servers to be downloaded (or _pulled_) by anyone who has access rights. These people can then make changes to the code and save a new version of it in Git. Git is a simple concept at its core but is extremely powerful. This is especially true when introducing more advanced features such as branches and merging.

## Where it's used

Git can be used to store any kind of code from frontend to backend to infrastructure as code.

## Why it's useful

If one developer is working on a project they can save their work in a safe place. Their work is now version controlled and so each new save they make won't overwrite the old version but instead simply create a new latest version. If the old code is ever needed at any point then this can be easily retrieved from the version control system. Git is smart when storing this code as it only stores the changes over the previous version rather than the full codebase again thus saving space.

If multiple engineers are working on one project they do not want to overwrite each other's work and they want to work in a stable codebase that won't change unexpectedly. They will therefore create a new branch for just their code. This branch will be a copy of the base code at the point of time when the branch was created. They can now work in isolation. When they have completed the feature they are working on they can then merge their code into the main branch.

Another useful feature enabled by Git is peer reviews. This is when a developer creates a new feature (e.g. a new navbar at the top of a web page) in their own branch and wants another developer to check their work before it is merged in to the main branch. This is standard practice in any good engineering team. To get this checked the creating developer can create a pull request or _PR_. This is a comparison between the main branch and the branch they have been working on. It shows all code that's been added, changed or deleted. The reviewing developer can then easily check over this before approving or leaving comments for the other engineer to address.

## Business Case

If engineers are just storing code on their own machines or backing up to a local server then this code may be lost if something happens to said machines. In the worst case scenario this can result in having to start the entire project again. This is what happened to Pixar [during the making of Toy Story 2](https://thenextweb.com/news/how-pixars-toy-story-2-was-deleted-twice-once-by-technology-and-again-for-its-own-good) and they were only saved by a lucky off-network backup.

## Developer Case

Its much easier to navigate code and create new features when using Git. Utilising branching and merging means that code can easily be written in isolation from other developer's current work and then easily checked before being merged in to the main code branch.

## Key Concepts

- Version control
- Committing code to be pushed to the central code repository. Each commit will include a relevant message set by the developer to highlight to other engineers what code changes were made as part of this commit. Committing should be done on a regular basis.
- Pushing and pulling code to / from the central code repository. You will pull from the repository when you need the newest code changes and push when you want your committed code to be uploaded to the relevant branch on Git.
- Branching strategy
- Merging

## Considerations

Git is extremely powerful when used properly but can become a major hassle if not used correctly. If a good [branching strategy](https://pradeeploganathan.com/git/git-branching-strategies/) is not in place or Git features are being abused then any code push or merge can become a laborious and confusing process.

Its also important to note that this tutorial is only a very high level overview of Git. The Git ecosystem is absolutely huge and there is so much more to learn beyond this tutorial.

## What's out there?

- [Github](https://github.com)
- [Gitlab](https://gitlab.com)
- [Bitbucket](https://bitbucket.org)

## Exercise

If you don't already have it clone the RAD Express Boilerplate repository

```bash
git clone git@github.com:radically-digital/example-express-boilerplate.git
```

Ensure you're on the `main` branch

```bash
git checkout main
```

_Pull_ down the most recent code

```bash
git pull
```

Create a new _branch_ based on this current branch and name it git-lesson.

You should then make a change to any part of the code. Which part you change is irrelevant - feel free to add a console log to the `index.js` file.

_Stage_ all of your files to be added with the next commit - `git add .` (ensure you include the `.` here as this tells the system to add all files). Please note this will add all files except those within your `.gitignore`. If you only wish to add some files you will need to replace the `.` in the command with the folder or file name.

_Commit_ your code changes with a relevant commit message.

_Push_ your changes up to your branch on Github (the Git system we are using). Open the link that is outputted to your terminal and click create on the new PR. If you like add a reviewer from the menu at the side. When adding a reviewer they will get a notification asking them to review your PR.

## Learn more

- [Git documentation](https://git-scm.com/)
- [Learn Git in one hour](https://www.youtube.com/watch?v=8JJ101D3knE)
- [Advanced Git techniques](https://www.youtube.com/watch?v=TwVuFwyztEE)
