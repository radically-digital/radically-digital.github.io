# Testing

At Radically Digital we strongly believe it's essential to have a good testing culture. If we're working on a greenfield project then we will introduce testing from the start. If we start work on an existing project with no testing in place then we will strive to create a strategy to introduce tests.

Automated testing is of utmost importance in all major projects (except those where testing can't currently be adequately automated) as it creates assurances on our current code and improves extensibility for future code. Codebases are complex systems with many interconnecting components. One piece of code may be referenced in any number of other areas. If you change this piece of code you want assurances that the system as a whole still functions as intended. Additionally, tests provide additional documentation to describe the purpose of the code. If you aren't completely sure what the intended high level functionality is meant to be for an area of the code then usually a test with a good description would help here.

Looking at the tests also helps identify ['red routes'](https://medium.muz.li/red-routes-critical-design-paths-that-make-or-break-your-app-a642ebe0940a) as these should be tested within end to end tests. If we look at these you can decipher the overall functionality of each of the main product's flows.

## Test Automation

There are two main methods of verifying a codebase's functionality is correct: a nominated person can manually test the feature or functionality in question or the quality assurance engineer or software engineer can write automated tests. The latter should be programmed to run as part of a continuous integration pipeline and so will be run at the very least before every deployment to production.

Manual tests are great for functionality that will only be tested once e.g. a hotfix that is just a temporary fix until a more permanent one gets put in place. An integration or end to end test should also not be automated if it's not covering a flow that would be frequently followed by a user. If it is a very rarely followed flow then the value provided through test automation will not match up to the time spent creating the automation. There are exceptions to this and these will occur on a team-by-team basis.

In the vast majority of cases each test will be able to be automated. This does not, however, mean that manual testing is redundant. Each feature created should be manually verified to be working once to add additional assurance and to confirm that the automated tests themselves are working as planned.

All tests that will be repeated and are not a one-off test or covering an unusual flow should be automated. This may take a little bit more time at first but will save a huge amount of manual testing time in the long run. Plus, it's common to write tests using a test driven development approach in a way that actually speeds up feature development time.

## Types of testing

### Unit testing

<!-- Mention TDD and its benefits. Also mention mocking -->

### Integration testing

### End to end testing

## Regression testing

### Manual testing

<!-- Still important to have manual testing on top of automated testing -->
<!-- Not all tests should be automated https://www.perfecto.io/blog/types-of-test-cases-to-automate -->

## Writing effective tests

Writing effective tests is a skill on its own. Whether tests are written before the code using a test driven development (TDD) approach or written after writing the code each test should follow a set of rules. Most of these rules are primarily concerned with unit tests but can also be expanded to other types of test.

### Each test should be well described

All tests should have a concise but accurate and descriptive test description. It should describe exactly what functionality the test is testing. This may be a happy path test or an edge case. The description should read in plain English so engineers and non-engineers alike can understand it.

Some teams like to include the word 'should' at the start of each test case e.g. 'should return true if given user is authenticated'. Other teams prefer to omit the word 'should' as it is redundant. Instead they could write 'returns true if given user is authenticated'. This is a more concise way of writing tests.

These descriptions typically come as a parameter to the test library function. For example while using JavaScript with the Jest testing library you can write the following:

```JavaScript
it('returns true if the given user is authenticated', () => {
  expect(isUserAuthenticated(mockUser)).toBeTrue()
})
```

### Categorise tests where needed

When working in any reasonably sized codebase it may make it easier to engineer and to read tests if they're categorised in some way. This can be done in JavaScript as follows:

```JavaScript
describe('User authentication', () => {
  it('returns true if the given user is authenticated', () => {
    expect(isUserAuthenticated(mockUser)).toBeTrue()
  })
})
```

When running tests in the console this will display the category and then the test within. This makes it easier to see exactly what functionality this test covers. It also makes test descriptions more concise as you no longer have to mention what unit it belongs to. This is already covered in the surrounding category.

It's also possible to nest categories within other categories. This allows us to implement a popular framework for unit test categorisation where the outer category highlights the file or class its testing, the inner category highlights the unit in question and the test itself will sit within this. This means that all tests for one unit, whether they're happy path or edge case, are grouped together and in turn are grouped within the larger functionality they form part of. In JavaScript and Jest this would look like the following:

```JavaScript
describe('User authentication', () => {
  describe('isUserAuthenticated', () => {
    it('returns true if the given user is authenticated', () => {
      expect(isUserAuthenticated(mockUser)).toBeTrue()
    })
  })
})
```

### Ensure tests do not leak

One of the most common mistakes made when writing tests is including leaks as part of said tests. Leaks are part of a test that affect other tests. For example, if you have a test that adds 1 to a global variable number then every test run after this will be using this changed global variable number. This may fail some tests.

If you notice that your tests can only be run in a certain order then this most likely means that one of your tests has caused a leak. You will need to review the tests that you've written in order to find any erroneously affected data.

One major cause for leaks is misusing mocks. You may mock a function to return a certain variable but forget to cancel this mock after the test has finished running. The mock will then be used in the next function which is this desired functionality or not. As with the global variable example this may work when tests are run in a particular order but may fail if they're run in a different order or run in parallel (something that's common when running tests in a CICD pipeline).

To mitigate the risk of leaks you can utilise functions that automatically run before and after each of your tests run. You can also utilise functionality that runs either before or after all of your tests in a particular category have run. Here you can ensure that all data you may have affected within your test and all mocks created are reset. In JavaScript with Jest this would be done using the `beforeEach`, `afterEach`, `beforeAll` and `afterAll` functions:

```JavaScript
beforeEach(() => {
  // Set up your tests here
})
afterEach(() => {
  // Reset any mocks or affected data
})
```

### Beware of dates

Many engineers have fallen into a confusing hole where one of their tests works one day so they commit the code and continue on the functionality the next day. They then realise this test is now failing. Only after investigating do they realise that they've expected the date or time in a certain function to equal a certain value but, of course, the date no longer reflects the hardcoded value put in.

```JavaScript
describe('getCurrentDay' => {
  it('Returns a string of the current day', () => {
    expect(getCurrentDay).toBe('Saturday')
  })
})
```

## Testing strategies

### The Testing Pyramid

## Exercise

<!-- ping pong pair programming -->
