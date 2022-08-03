# Testing

## Aim for 100% code coverage but set a minimum of 70-80%

https://kentcdodds.com/blog/write-tests

<!-- TODO TESTING-LIB -->

<!--

## Testing Strategy

<!-- TODO KENT C DODDS --\>
<!-- TODO FORGE ARTICLE --\>

## Implementing Testing from nothing

<!-- TODO QUICK VITE, TS JEST, BLINKDIFF, NIGHTWATCH --\>

-->

## Don't Rely on Snapshot Tests

Ever since I started working with React in 2016 I’ve had only one situation in which snapshot tests have caught a problem in my components. A call to `new Date()` without an argument had slipped and it always defaulted to the current date.

Besides this, snapshots have only been a cause for failed builds when a component is changed. The usual workflow is to make a change to the component, see that snapshots are failing, update them and proceed.

Don’t get me wrong, they are a good sanity check but they are not a replacement for good component level tests. I avoid even creating them anymore.

## Test Correct Rendering

The main thing that your tests should validate is whether the component works as expected. Make sure that it renders correctly with its default props and with ones passed to it.

Validate that for a given input (props) the function returns the correct result (JSX). Validate that everything you need is on the screen.

## Validate State & Events

A stateful component will most likely change as a response of an event. Simulate the events and make sure that the component responds properly to them.

Validate that the handler functions were called and correct arguments were passed. Check if internal state was properly set.

## Test Edge Cases

When you have the basic tests covered, make sure you add some to handle edge cases.

That would mean passing an empty array to make sure you’re not accessing an index without checking. Throw an error in an API call to make sure the component handles it.

## Write Integration Tests

Integration tests are meant to validate an entire page or a larger component. It tests whether it works well as an abstraction. They give us the most confident that the application works as expected.

The components on their own could be working well and their unit tests could be passing. The integration between them could have problems, though.
