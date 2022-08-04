# Casing Conventions

Adapted from [Google Javascript naming conventions](https://google.github.io/styleguide/jsguide.html#naming);

## Package names

Package names are all `lowerCamelCase`

## Class names

Class, interface, record, and typedef names are written in `UpperCamelCase`

Type names are typically nouns or noun phrases. For example, `Request`, `ImmutableList`, or `VisibilityMode`. Additionally, interface names may sometimes be adjectives or adjective phrases instead (for example, `Readable`).

## Method names

Method names are written in `lowerCamelCase`. Names for private methods should start with an underscore.

Method names are typically verbs or verb phrases. For example, `sendMessage` or `_stop`. Getter and setter methods for properties are never required, but if they are used they should be named `getFoo` (or optionally `isFoo` or `hasFoo` for booleans), or `setFoo(value)` for setters.

Underscores may also appear in JsUnit test method names to separate logical components of the name. One typical pattern is `test<MethodUnderTest>_<state>_<expectedOutcome>`, for example `testPop_emptyStack_throws`. There is no One Correct Way to name test methods.

## Enum names

Enum names are written in `UpperCamelCase`, similar to classes, and should generally be singular nouns. Individual items within the enum are named in `CONSTANT_CASE`.

## Constant names

Constant names use `CONSTANT_CASE`: all uppercase letters, with words separated by underscores. There is no reason for a private constant to be named with a leading underscore, since private static properties can be replaced by (implicitly private) module locals.

### Definition of "constant"

Every constant is a `@const` static property or a module-local `const` declaration, but not all `@const` static properties and module-local `const`s are constants. Before choosing constant case, consider whether the field really feels like a _deeply immutable_ constant. For example, if any of that instance's observable state can change, it is almost certainly not a constant. Merely intending to never mutate the object is generally not enough.

````js
// Constants
const NUMBER = 5;
/** @const */ exports.NAMES = ImmutableList.of('Ed', 'Ann');
/** @enum */ exports.SomeEnum = { ENUM_CONSTANT: 'value' };

// Not constants
let letVariable = 'non-const';
class MyClass { constructor() { /** @const {string} */ this.nonStatic = 'non-static'; } };
/** @type {string} */ MyClass.staticButMutable = 'not @const, can be reassigned';
const /** Set<string> */ mutableCollection = new Set();
const /** ImmutableSet<SomeMutableType> */ mutableElements = ImmutableSet.of(mutable);
const Foo = goog.require('my.Foo');  // mirrors imported name
const logger = log.getLogger('loggers.are.not.immutable');```
````

Constants’ names are typically nouns or noun phrases.

### Local aliases

Local aliases should be used whenever they improve readability over fully-qualified names. Aliases may also be used within functions. Aliases must be `const`.

Examples:

```js
const staticHelper = importedNamespace.staticHelper;
const CONSTANT_NAME = ImportedClass.CONSTANT_NAME;
const { assert, assertInstanceof } = asserts;
```

## Non-constant field names

Non-constant field names (static or otherwise) are written in `lowerCamelCase`, with a leading underscore for private fields.

These names are typically nouns or noun phrases. For example, `computedValues` or `_index`.

## Parameter names

Parameter names are written in `lowerCamelCase`. Note that this applies even if the parameter expects a constructor.

One-character parameter names should not be used in public methods.

Exception: When required by a third-party framework, parameter names may begin with a `$`. This exception does not apply to any other identifiers (e.g. local variables or properties).

## Local variable names

Local variable names are written in `lowerCamelCase`, except for module-local (top-level) constants, as described above. Constants in function scopes are still named in `lowerCamelCase`. Note that `lowerCamelCase` is used even if the variable holds a constructor.

## Template parameter names

Template parameter names should ideally be concise, single-word or single-letter identifiers, and must be `CONSTANT_CASE`, such as `TYPE` or `THIS`.

## Module-local names

Module-local names that are not exported are implicitly private. They are not marked `@private` and do not start with an underscore. This applies to classes, functions, variables, constants, enums, and other module-local identifiers.

## Camel case: defined

Sometimes there is more than one reasonable way to convert an English phrase into camel case, such as when acronyms or unusual constructs like IPv6 or iOS are present. To improve predictability, Google Style specifies the following (nearly) deterministic scheme.

Beginning with the prose form of the name:

1. Convert the phrase to plain ASCII and remove any apostrophes. For example, Müller's algorithm might become Muellers algorithm.
1. Divide this result into words, splitting on spaces and any remaining punctuation (typically hyphens).
   1. Recommended: if any word already has a conventional camel case appearance in common usage, split this into its constituent parts (e.g., AdWords becomes ad words). Note that a word such as iOS is not really in camel case per se; it defies any convention, so this recommendation does not apply.
1. Now lowercase everything (including acronyms), then uppercase only the first character of:
   1. each word, to yield upper camel case, or
   1. each word except the first, to yield lower camel case
1. Finally, join all the words into a single identifier.

Note that the casing of the original words is almost entirely disregarded.

| Prose form            | Correct           | Incorrect         |
| --------------------- | ----------------- | ----------------- |
| XML HTTP request      | XmlHttpRequest    | XMLHTTPRequest    |
| new customer ID       | newCustomerId     | newCustomerID     |
| inner stopwatch       | innerStopwatch    | innerStopWatch    |
| supports IPv6 on iOS? | supportsIpv6OnIos | supportsIPv6OnIOS |
| YouTube importer      | YouTubeImporter   | YoutubeImporter\* |

- Acceptable, but not recommended.

> Note: Some words are ambiguously hyphenated in the English language: for example nonempty and non-empty are both correct, so the method names checkNonempty and checkNonEmpty are likewise both correct.
