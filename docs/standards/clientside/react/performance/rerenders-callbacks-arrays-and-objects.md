# Rerenders - Callbacks, Arrays and Objects

- [Using React DevTools to highlight what components rerendered](https://jsramblings.com/how-to-check-if-your-component-rerendered-and-why/)

It’s good to try and reduce the amount of unnecessary rerenders that your app makes. Keep this in mind but also note that unnecessary rerenders will rarely have the greatest impact on your app.

The most common advice is to avoid passing callback functions as props. Using one means that a new function will be created each time, triggering a rerender. I haven’t faced any performance problems with callbacks and in fact that’s my go to approach.

If you are experiencing performance problems and the closures are the cause then remove them. But don’t make your code less readable ot more verbose unnecessarily.

Passing down arrays or objects directly falls into the same category of problems. They fail the reference check so they will trigger a rerender. If you need to pass a fixed array extract it as a constant before the component definition to make sure the same instance is passed each time.
