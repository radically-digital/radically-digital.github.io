# Component Length

- See [Write Consistent Components](#write-consistent-components)

A React component is just a function that gets props and returns markup. They adhere to the same software design principles.

If a function is doing too many things, extract some of the logic and call another function. It’s the same with components - if you have too much functionality, split it in smaller components and call them instead.

If a part of the markup is complex, requires loops and conditionals - extract it.

Rely on props and callbacks for communication and data. Lines of code are not an objective measure. Think about responsibilities and abstractions instead.
