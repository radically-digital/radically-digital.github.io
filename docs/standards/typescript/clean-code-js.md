---
draft: true
TODO:
  - merge with clean-code-typescript
---

# Coding Standards

Clean code is one of the most important tools in any good engineer's arsenal. It cannot be understated how important good coding standards are in any project. Whole books have been written about the subject and the topic in general is highly opinionated and often sparks intense debate.

Coding standards and clean code are used to ensure consistent, readable, easily maintainable and extendable code which adhere to the [SOLID principles](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design). Without standards code will eventually become difficult to understand and difficult to work with. We will read more code than we will ever write so its imperative that we understand what we are reading.

Codebases are forever evolving. The codebases that adhere to good coding standards will always evolve much more efficiently than the ones with poor standards.

The following guidelines construct a summary of the RAD definition of clean code. It is largely based on the book Clean Code by Robert C. Martin (hereon referred to as Martin) but differs in some important ways. It is highly recommended to read both this outline and Martin's book. The guidelines here are by no means exhaustive and are subject to change.

These coding standards are language agnostic but any examples here will be written in JavaScript.

## The RAD Clean Code Commandments

The following is a set of general rules that we believe every engineer should live by no matter what project they are working in.

### Follow the Scout Rule - leave the code cleaner than when you found it

One of Martin's golden rules is to always leave any code you come across cleaner than when you found it. If you see some code that is messy then tidy it up as best as possible. If you see a variable that is badly named then rename it. You should take all other rules into consideration as part of this rule i.e. try your best to enforce all other RAD clean code rules whenever you come across any existing code. Always use your judgement when following the Boy / Girl Scout Rule. If the changes are complex or will require a large amount of time then do not make the changes. If the changes are important then raise a technical debt ticket in your project management tool to revisit this at a later date.

### Have strong opinions but hold on to them loose

Take all guidelines outlined here with a grain of salt. Ensure you're not working to a completely different set of standards to the rest of your team. If the rest of your team are working to poor standards then work with them to improve. Have strong opinions but hold on to them loose - always be willing to have a discussion around standards and be prepared to shift your opinion on them if another team member makes a compelling argument.

### Be Consistent

If you've agreed a set of standards with your team ensure that these standards are enforced throughout the codebase. Don't drop your standards purely because a deadline needs to be met.

If you're working within a legacy codebase in which the original team is no longer working on it its still important to be consistent. This may mean working to the standards set by the original team. Code should still be kept clean but no major changes should be made that would compromise consistency unless these changes have been explicitly agreed upon by the team.

Will all this in mind its important to remember there's a balance between being consistent and being too perfect.

### Don't be a perfectionist

Perfect is the enemy of good enough. Perfection is a terrible thing to strive for in software engineering. It will hardly ever be achieved and compromises will always have to be made. Writing perfect code takes a huge amount of time. This time could be spent on creating several more features that aren't perfect but are good enough. Standards should be adhered to but should be flexible enough to not take up a huge amount of the engineer's time when writing code. When completing a section of code you should ask yourself "is it good enough and is it clean enough?".

## Variables

### Use good variable names

Ensure your variables have descriptive and easy to read names. Avoid using single letters for names and avoid putting numbers after variable names to denote it is the second or third name of its kind.

**Bad**

```javascript
const form1 = createForm();
const form2 = createForm();

for (let i = 0; i < 11; i++) {
  // do stuff
}
```

**Good**

```javascript
const userDetailsForm = createForm();
const carDetailsForm = createForm();

for (let carIndex = 0; carIndex < 11; carIndex++) {
  // do stuff
}
```

### Casing

All variable names should be consistent in what casing system they use. In JavaScript and many other languages `camelCase` is used for variables and capitalised `SNAKE_CASE` is used for constants. These should be adhered to for consistency and readability.

**Bad**

```javascript
const UserDetailsForm = createForm();
const car_details_form = createForm();
```

**Good**

```javascript
const userDetailsForm = createForm();
const carDetailsForm = createForm();
```

### Always use the least possible scope

Don't add variables to a scope above what is needed. For example, don't add variables to the global scope unless absolutely necessary. If your variable is only used in one function or class then only declare it within that block of code.

### Avoid polluting the global namespace

Avoid global variables at all costs as they can introduce nasty bugs. Pass variables as parameters to avoid using the global namespace.

**Bad**

```javascript
let userDetails;

function saveUserDetailsToDatabase() {
  database.save(userDetails);
}

function setUserDetails() {
  userDetails = {
    name: "Mr Kevin",
  };

  saveUserDetailsToDatabase();
}
```

**Good**

```javascript
function saveUserDetailsToDatabase(userDetails) {
  database.save(userDetails);
}

function setUserDetails() {
  const userDetails = {
    name: "Mr Kevin",
  };

  saveUserDetailsToDatabase(userDetails);
}
```

### Avoid variable mutation where possible

Variable mutation can lead to unreadable code that may have bugs.

**Bad**

```javascript
function setUserDetails(fullName) {
  fullName = getFirstName(fullName);
  fullName = capitaliseFirstInitial(fullName);

  // This will not work
  const secondName = getSecondName(fullName);
}
```

**Good**

```javascript
function setUserDetails(fullName) {
  const lowercaseFirstName = getFirstName(fullName);
  const firstName = capitaliseFirstInitial(lowerCaseFirstName);

  const secondName = getSecondName(fullName);
}
```

### Replace magic numbers with constants

Don't have any unexplained number in your code that may cause confusion in the future. Always write this to a constant even if just using it once. This will enable others to understand what the number means rather than just seeing a number of seemingly random digits.

**Bad**

```javascript
setTimeToLive(3600000);
```

**Good**

```javascript
const ONE_HOUR = 3600000;
setTimeToLive(ONE_HOUR);
```

## Functions

### Use descriptive function names

All function names should accurately describe what's happening within the function. It is one of the best ways to document and create readable code.

```javascript
function functionOne(fullName) {
  const lowercaseFirstName = fullName.split(" ")[0];
  const firstName = capitaliseFirstInitial(lowerCaseFirstName);

  saveUserDetails(fullName);

  return firstName;
}
```

**Good**

```javascript
function getFirstName(fullName) {
  const lowercaseFirstName = fullName.split(" ")[0];
  const firstName = capitaliseFirstInitial(lowerCaseFirstName);

  return firstName;
}
```

### The single responsibility rule

Ensure a function does one thing and one thing only. Functions that do multiple things are difficult to name and will incur unwanted side effects. They also unnecessarily increase the complexity of the code and reduce the reusability of functions.

**Bad**

```javascript
function getFirstName(fullName) {
  const lowercaseFirstName = fullName.split(" ")[0];
  const firstName = capitaliseFirstInitial(lowerCaseFirstName);

  saveUserDetails(fullName);

  return firstName;
}
```

**Good**

```javascript
function getFirstName(fullName) {
  const lowercaseFirstName = fullName.split(" ")[0];
  const firstName = capitaliseFirstInitial(lowerCaseFirstName);

  return firstName;
}
```

### Keep it simple

Similar to the above avoid overly complex functions that do multiple things and are hard to read. Functions should not be huge blocks of code but instead should be small and easily readable. Keeping function size to a minimum also helps when writing tests for the code.

**Good**

```javascript
function getFirstName(fullName) {
  const lowercaseFirstName = getFirstName(fullName);
  const firstName = capitaliseFirstInitial(lowerCaseFirstName);

  return firstName;
}
```

### Don't repeat yourself

If you find yourself repeating the same block of code multiple times then you should extract this code into its own function. For this you can use the Rule Of Three - its ok to repeat yourself and have two of the same code block in your code. Once it gets to a third time you should extract to a separate function. If you find yourself repeating code between multiple files then you should extract this code to a function and place it in a helper file. These helper functions should be grouped into files based on purpose.

### Use pure functions

Similar to variable mutation you should strive to use pure functions. Pure functions are those that always return the same output when given the same input and don't have any unwanted side effects such as mutating global variables. Additionally, if the function relies on a global variable that can be changed then it is not a pure function. If a function calls a non-pure function then the calling function also is not pure.

**Bad**

```javascript
let userDetails = {
  firstName: "Kevin",
};

function setUserDetails(fullName) {
  const lowercaseFirstName = getFirstName(fullName);
  const firstName = capitaliseFirstInitial(lowerCaseFirstName);

  userDetails.firstName = "Sadie";

  return firstName;
}
```

**Good**

```javascript
function setUserDetails(fullName) {
  const lowercaseFirstName = getFirstName(fullName);
  const firstName = capitaliseFirstInitial(lowerCaseFirstName);

  return firstName;
}
```

### Minimise the amount of parameters

Using many parameters in a function can make things more confusing when trying to call this function. It also suggests that the function could be simpler - many parameters tends to suggest more complexity. The general rule of thumb is parameters should be kept to a maximum of three if possible. Sometimes this rule will need to be broken which is fine. However, each time you break the rule you should ask yourself if that many parameters is really needed.

**Bad**

```javascript
function setUserDetails(
  firstName,
  lastName,
  dateOfBirth,
  placeOfBirth,
  height
) {
  // Set username
  // Calculate age
  // Calculate BMI
  // Do other stuff
}
```

**Good**

```javascript
// Note the change in function purpose to make it simpler
function setUserName(firstName, lastName) {
  // Do stuff
}
```

If you need to use more than three parameters you can also consider using an object as a parameter to simplify things. In JavaScript these parameters can be deconstructed in the arguments list if needed.

**Bad**

```javascript
function saveUserDetails(
  firstName,
  lastName,
  dateOfBirth,
  placeOfBirth,
  height
) {
  // Do stuff
}
```

**Good**

```javascript
function saveUserDetails({
  firstName,
  lastName,
  dateOfBirth,
  placeOfBirth,
  height,
}) {
  // Do stuff
}
```

## Objects

### Don't add unneeded context

If you've named your object appropriately then there's no need to use that name again within the object. The object should read naturally when referencing it e.g. `user.firstName` rather than `user.userFirstName`.

**Bad**

```javascript
const user = {
  userFirstName: "Brenda",
  userSecondName: "McGoogle",
};
```

**Good**

```javascript
const user = {
  firstName: "Brenda",
  secondName: "McGoogle",
};
```

### Avoid implementing heavily nested objects unless necessary

Objects should be as simple as possible and should not involve unnecessary nesting.

**Bad**

```javascript
const user = {
  name: {
    firstName: "Brenda",
    secondName: "McGoogle",
  },
  age: 4,
};
```

**Good**

```javascript
const user = {
  firstName: "Brenda",
  secondName: "McGoogle",
  age: 4,
};
```

## Comments

### Never include commented out code

If an engineer ever comes across commented out code they will immediately wonder why its there and if its necessary. It can lead to a great deal of confusion. Commented out code should never be included in a codebase. It should instead be removed. If code is needed again in the future then it can be fetched from the version control system's history. This will lead to a much cleaner and more readable codebase.

### Use comments as a last resort - prefer well named variables and functions

If you have to write a comment make sure its for a very good reason and that you've exhausted all other options. Comments can often have the opposite effect of what was intended - they can lead to confusion and make things less readable. Comments may be inaccurate or poorly written. They may also not be changed alongside any code changes and so they may quickly become irrelevant. A codebase full of comments can be a daunting and dangerous place.

Instead of leaving a comment try to explain the code in question within the code itself. This can be done through well named functions or variables. Extracting some complex code to a well named function is often the best way to explain what's happening to the reader. Even if the function is very simple and is only used once it is still a worthwhile exercise.

**Bad**

```JavaScript
// Capitalise the first letter of the first name
const firstName = userName.firstName.substring(0, 1).toUpperCase() + userName.firstName.substring(1)
```

**Good**

```JavaScript
function capitaliseFirstLetter(word){
  return word.substring(0, 1).toUpperCase() + word.substring(1)
}

const firstName = capitaliseFirstLetter(userName.firstName)
```

## Exercise

If you don't already have it clone the RAD Express Boilerplate repository

```bash
git clone git@github.com:radically-digital/example-express-boilerplate.git
```

Switch to the `messy-code` branch

```bash
git checkout messy-code
```

Spend some time (maximum 15 minutes) going through the codebase making improvements. You should find at least one example of messy code relating to most (but not all) topics highlighted here e.g. there should be at least one example of polluting the global namespace. Once you have done this run the tests and ensure they all pass. Please only investigate the production code TypeScript files for messy code.

## Discussion?

<!-- To be had in person - link to recordings -->
