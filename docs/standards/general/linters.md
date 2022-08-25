# Linters

A linter is a tool that analyses source code in order to find any problems with it. The ultimate goal of linting is to improve overall code quality by detecting and bringing errors to light.

## Where it's used

Linters are installed into the code base and are typically triggered on file save and / or inside a git hook such as [Husky](https://typicode.github.io/husky/#/). The latter option is the least distracting as the engineer could be bombarded with warning that can be distracting. On the contrary, running linters just before submitting code for peer review can also cause delays as the engineer may have created multiple code smells across multiple files that could have been avoided. A good compromise can be to display warnings in the development configuration and errors on rule violations in the pre-commit hook. It is recommended to agree on the approach before implementing linting tools into the project.

Most of the common linters have IDE plugins available that help the engineer spot issues as they arise. [Eslint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is commonly used at RAD. Other IDEs also have their own versions.

## Why it's useful

- Linters can help teams achieve a more readable and consistent style, through the enforcement of its rules.
- Linters provide an objective and measurable assessment of code quality - meaning that they help mitigate subjective discussions that can sometimes happen during code reviews.
- Education about code quality reaches more engineers. Linters can help engineers - particularly the most inexperienced ones - to learn about code quality.
- The use of linters helps to diagnose and fix technical issues i.e code smells in the code. As a result, fewer errors make their way to production - this also helps control technical debt.

## Business Case

A linter is a static code analysis tool therefore it does not have a direct business case. It's purpose is to promote good quality coding practises across an engineering team by enforcing coding and formatting rules. Without linting however a codebase can become unwieldy and difficult to maintain, which could result in buggy code in production or delays in delivery.

## Developer Case

<!-- 2-3 cases with examples -->

- Wealth8 uses ESLint in conjunction with prettier to enforce formatting, code quality and code style rules. This uniformity enables easier on-boarding of new engineers as there is less ambiguity in coding practice within the codebase. The linter is run on a pre-commit githook.

## Key Concepts

- A linter is a static code analysis tool
  - Static Analysis means that automated software runs through your code source without executing it. It statically checks for potential bugs, memory leaks, and any other check that may be useful.
- A linter standardises the way code is written through enforcement of linting rules.
- Linters usually have single purposes, it is up to the engineering team to determine which linters will be required i.e:
  - ESlint for JavaScript
  - Styleline for CSS
  - eslint-plugin-security for Node security
- Linting can be enforced locally during development and as part of the CI/CD pipeline.
- The fundamental purpose of linting is to enforce a uniform coding style in order to prevent bad quality code, bugs and security risks from entering production.

## Considerations

- Implementing Linting without informing team members can lead to misunderstandings and frustration. Communication and agreeing on a standard is key to maximize the benefits of linting.
- Linters analyze code for stylistic and programming errors against the rules they already know. While great for identifying errors using standard rules, this may pose problems for more unconventional code practices.
- Linters can often produce false positives - errors which are not actually errors. This can be frustrating for engineers but can be alleviated through careful reconfiguration of the linting rules.
- Consider using [lint-staged](https://github.com/okonet/lint-staged) to only lint files that have been changed, as linting a whole codebase on commit / push can be very time consuming. See [Learn more](#Learn-more) below for a tutorial on this.
- Integrating multiple tools in the development workflow requires maintenance and monitoring of each tool. When new updates occur, changes will need to be implemented. This increases the workload of the engineering team.

## What's out there?

- JavaScript and TypeScript linters:
  - [ESLint](https://eslint.org/): Most frequently used JavaScript linter at RAD. Highly customisable rules but also comes with presets out of the box.
  - [TSLint](https://docs.sourcelevel.io/engines/tslint/): An extensible linter for TypeScript in the same vein as ESLint.
  - [StandardJS](https://standardjs.com/): Config free JavaScript linter and formatter - only use if a custom configuration is not required.
- Python linter:
  - [Pylint](https://github.com/PyCQA/pylint): Highly customisable rules but also comes with presets out of the box.
- CSS, SASS, SCSS linter:
  - [Stylint](https://stylelint.io/) - Lints errors and enforces conventions in styling. Recommended as it can extract styles from CSS-in-JS, HTML, Markdown and Template literals.
- Security linters:
  - [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security): Enforces good security practises by detecting insecure coding conventions.
  - [eslint-plugin-security-node](https://www.npmjs.com/package/eslint-plugin-security-node): A potential successor to eslint-plugin-security as it is currently still being maintained.
- CI/CD linting tools:
  - [SonarQube](https://www.sonarqube.org/): This is a comprehensive - linting / bug / code smell / security risk / code coverage - static analysis tool that generates bug lists and reports that help the engineering team prevent erroneous code from reaching the production pipeline. Over 20 different languages are supported.
  - [SonarCloud](https://sonarcloud.io/): Cloud based version of SonarQube that covers most of the same features.

## Exercise

<!-- 2+ exercise & answers -->

Setup a simple project in VSCode and add specific ESLint rules:

### Prerequisites:

- Have [VScode](https://code.visualstudio.com/) installed locally.
- Have [Node.js](https://www.digitalocean.com/community/tutorial_series/how-to-install-node-js-and-create-a-local-development-environment) installed locally.

## Setup the project:

&nbsp;

```console
$ mkdir eslint-exercise && cd eslint-exercise && npm init -y
```

Install and init eslint:

```console
$ npm install eslint && npx eslint --init
```

Answer prompts with following:

```console
? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Browser, Node
? What format do you want your config file to be in? JavaScript
? Would you like to install them now with npm? Yes
```

You should now have a new project with a `package.json` and `.eslintrc.js` files.

:warning: Ensure you have the ESLint extension installed from the [VSCode marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Next create a JavaScript file with inconsistent spacing, quotations and semicolons that would not pass common linting rules.

```javascript
const smellyFunction = (nasty) => {
  nasty = "smelly" || nasty;
  console.log("this is" + nasty + "code");
};
```

`smellyFunction` should be underlined. Hovering over this line in Visual Studio Code displays the following tooltip message: `'smellyFunction' is assigned a value but never used`. This is because the rule .eslint(no-unused-vars) is enabled by `eslint:recommended`. The other issues require rules to be added in order to be addressed.

### Tasks

- Amend the code to fix the unassigned value warning.
- Open `eslintrc.js` and add rules to enforce:
  - single quotes
  - mandatory semi-colons
  - double-space indentation
  - no multi-spacing.

<details>
  <summary> See Answers </summary>

- Amend the code to fix unassigned value warning:

```javascript
const smellyFunction = (nasty) => {
  nasty = "smelly" || nasty;
  console.log("this is" + nasty + "code");
};

console.log(smellyFunction);
```

- Add custom rules:

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "single"],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
  },
};
```

</details>
&nbsp;

Once you save the changes to `eslintrc.js` and reopen the JavaScript file made earlier you should see that all the broken rules will be indicated.

If you have the ESLint extension installed you can use `CMD+SHIFT+P` to open the Command Palette. Then search for `ESLint: Fix all auto-fixable Problems` and press `ENTER` (or `RETURN`).

## Learn more

- [Linting on save configuration for VSCode](https://davidwalsh.name/eslint-vscode)
- [Adding linting to a Husky pre-commit hook with lint-staged](https://medium.com/gits-apps-insight/utilizing-git-hook-by-using-eslint-husky-and-lint-staged-18b6f6f60f1e)

## Discussion?

<!-- To be had in person - link to recordings -->
