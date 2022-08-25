# Branching Strategy

Branching strategies are used within version control systems to organise workflows and development pipelines. It affects everything from feature prioritisation through bug fixes, release management and beyond. Some branching strategies work better in an agile environment and some suit a waterfall environment. Branching strategy ultimately concerns the way engineers create new branches and how branches are merged into main to be released into production.

## Why it's useful

A good branching strategy means consistency and the ability to release what you want, when you want with minimal fuss. It is one of the most important things to get right when starting a new project. Too many branches and you'll be left in a tangled mess. Too few branches and you won't be able to release effectively on your own terms.

## Key Concepts

Although other options are available most projects use one of two branching strategies. The following strategies are typically customised to suit the team's specific needs.

### GitFlow

GitFlow is the more complex of the two main branching strategies. Engineers will typically use main and development branches and create branches based on features, releases, and hotfixes. These branches are used as follows:

- **The main / master branch** is a unique branch which holds all production code. In order to release code to production it must be merged into main (sometimes named master). The main branch will always exist and should never be deleted.

- **The development branch** is a unique branch where all changes are merged into before being merged into main. Feature and release branches will stem from here. This is where any final testing can take place before merging to main and releasing to production. Teams implementing the GitFlow strategy often opt to create a staging or UAT environment based off of this branch. The development branch will always exist and should never be deleted.

- **Feature branches** are where the bulk of the code will be first created. One branch will be created by one engineer and it will be used to write code pertaining to one feature. This feature will typically be described within a project management tool such as Jira or Trello. When work on the feature is done the engineer will get the code reviewed and, upon approval, will merge it into development. After the code is merged the feature branch should be deleted. Feature branches allow multiple engineers to work on the same codebase at the same time with a low risk of overwriting each other's code.

- **Release branches** are created when work has to be done on a specific release and this work should not affect normal work. This work can be for a specific release that's not due to go into production yet. It can also contain release specific work such as QA work or documentation.

- **Hotfix branches** are used to fix bugs in production code. They are typically short lived and only used to patch urgent bugs. These hotfix branches tend to be branched out from and merged back in to the main branch.

The Gitflow branching strategy is great if you want extensive quality assurance and you don't mind sacrificing simplicity. GitFlow is regarded as being difficult to work with in an agile environment due to its rigid structure. However, its useful for large teams as it allows multiple features, hotfixes and even releases to be worked on at the same time. Thanks to the development and release branches this strategy also ensures that the main branch is clean and only includes code that has to be released to production.

### Github Flow

Github Flow is widely regarded as being the more agile of the two mentioned branching strategies. It is much more minimal than GitFlow - typically only containing a main and feature branches.

To create a new feature engineers will branch off of main and merge back in when their feature is complete. There is no release or development branch where code sits and waits to be merged to main and released. This means Github Flow is a much more streamlined system. Having only main and feature branches can speed up time to release as engineers are no longer required to go through the feature > development > release > main merge process but can instead merge straight into main.

This can come at the cost of less quality assurance. There is no development branch for final testing to take place. Teams often get around this by building manual checkpoints into their build pipeline. When code is merged to main it may be released to a UAT environment first. A manual checkpoint may be built in so an engineer has to go in and press a button for the pipeline to release to production. This manual checkpoint will typically happen after all tests and other automated checks are done.

As both production and development code is in the main branch this means that some code may be in the main branch but not yet released to production. This can cause confusion when checking what has been released and what hasn't. If the team has to work in a release cycle or do 'big bang' releases then it may be more difficult to regulate these using Github Flow.

In general Git Flow is better for non-agile teams that require a more comprehensive release strategy while Github Flow is better for those teams who are agile and want to release their features to production as fast as possible.

## Learn more

- [Why you need a branching strategy](https://shortcut.com/blog/why-you-need-a-branching-strategy)
- [Git Kraken's branching strategy advice](https://www.gitkraken.com/learn/git/best-practices/git-branch-strategy)

## Discussion?

<!-- To be had in person - link to recordings -->
