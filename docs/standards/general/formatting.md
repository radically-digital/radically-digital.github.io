# Formatting

Formatting or coding style is a set of rules and guidelines used when writing code. These style rules work to help engineers read and understand a codebase more easily, avoid introducing errors as well as foster consistency and uniformity when working collaboratively.

## Where it's used

Formatting impacts all areas of engineering be that server-side, client-side, devOps. Anywhere that a coding language is used, there should be clear formatting rules to adhere to.

These styling rules can be subjective and will be informed by the language used. For example what is considered good [clean coding](https://github.com/ryanmcdermott/clean-code-javascript) practice in JavaScript may not apply to C# and will be completely irrelevant to a styling language like CSS.

In order to tame this subjectivity, there are automation tools available such as [Prettier](https://github.com/prettier/prettier) which are installed into the codebase along with a config file - where the formatting rules are defined.

Most of the common linters have IDE plugins available that help the engineer spot issues as they arise. [Prettier for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is commonly used at RAD. Other IDEs also have their own versions.

:warning: Please note - Formatting rules vary across projects. It is pertinent to standardise these rules on greenfield projects where possible, however if a project is already mature then the pre-existing coding style should be adhered to.

## Why it's useful

Which is easier to read?

```javascript
// Style A
if (hours < 24 && minutes < 60 && seconds < 60) {
  return true
} else {
  return false
}
```

or

```javascript
// Style B
if (hours < 24 && minutes < 60 && seconds < 60) {
  return true
} else {
  return false
}
```

Style B uses a common indentation style that is easier to read and well established. Now another engineer may write the above example as such:

```javascript
// Style C
if (hours < 24 && minutes < 60 && seconds < 60) {
  return true
} else {
  return false
}
```

The above is also an established style, however for sake of uniformity the engineering team must agree on either style B or C and then adhere to that going forward. The agreed style can be defined in a formatting tool such as Prettier which can auto-format code on file save or inside a git hook such as [Husky](https://typicode.github.io/husky/#/).

With the rules established and formatters set, the codebase will now follow the same style throughout, which reduces the cognitive load on an engineer significantly. Any new engineer joining the team will have an easier time onboarding and getting up to speed when standardised formatting is established.

## The difference between linting and formatting

- A **linter** is a static code analysis tool. The purpose of a linter is to flag code-smells in-order to improve code quality. The insights provided tend to require an engineer to act to rectify issues - some issues can be fixed automatically, however the intended purpose of a linter is to surface behavioural issues in the code that need to be addressed.
- **Formatting** focuses on the coding style used. Inconsistently written code will not necessarily have an adverse effect on the behaviour of the code but it can lead to it. If multiple engineers write code in very different styles i.e with a mixture of indentation styles, white-spaces and alignments then very quickly the codebase will become difficult to read. This mental overhead of deciphering multiple coding styles causes delays in delivery, lead to errors and increase technical debt.

## Business Case

Formatting forms part of the discipline of writing clean code therefore it does not have a direct business case. It's purpose is to promote good quality coding practices across an engineering team by enforcing agreed formatting rules. Without standardised formatting however a codebase can become unwieldy and difficult to maintain, which could result in buggy code in production or delays in delivery.

Standardised formatting in combination with linting should deliver uniform code such that it is impossible to distinguish, which or how many engineers were involved with producing it.

## Developer Case

Many projects use ESLint in conjunction with prettier to enforce formatting, code quality and code style rules. This uniformity enables easier on-boarding of new engineers as there is less ambiguity in coding practice within the codebase. The linter is run on a pre-commit githook.

## Key Concepts

<!-- High level concepts and opinions. eg BEM with CSS, Accessibility with HTML -->

## Considerations

- Implementing formatting without informing team members can lead to misunderstandings and frustration. Communication and agreeing on a coding style is key to maximize the benefits of linting.
- Consider using [lint-staged](https://github.com/okonet/lint-staged) to only format files that have been changed if formatting from a githook, as formatting a whole codebase on commit / push can be very time consuming. See [Learn more](#Learn-more) below for a tutorial on this.
- Integrating multiple tools in the development workflow requires maintenance and monitoring of each tool. When new updates occur, changes will need to be implemented. This increases the workload of the engineering team.

## What's out there?

- [Prettier](https://github.com/prettier/prettier): Most frequently used opinionated formatter at RAD. Highly customisable rules but also comes with presets out of the box. It is not IDE dependant thus more flexible.
- [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify): A Prettier alternative VSCode IDE plugin.

## Exercise

<!-- 2+ exercise & answers -->

## Learn more

<!-- 3+ resources of where further training can be done. Try to identify all levels - this may be useful to be broken out -->

## Discussion?

<!-- To be had in person - link to recordings -->
