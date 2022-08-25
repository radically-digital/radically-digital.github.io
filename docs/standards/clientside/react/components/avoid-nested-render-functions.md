# Avoid Nested Render Functions

When you need to extract markup from a component or logic, don’t put it in a function living in the same component. A component is just a function. Defining it this way is nesting inside its parent.

This means that it will have access to all the state and data of its parent. It makes the code more unreadable - what is this function doing in between all the components?

Move it in its own component, name it and rely on props instead of a closure.

```jsx
// 👎 Don't write nested render functions
function Component() {
  function renderHeader() {
    return <header>...</header>;
  }
  return <div>{renderHeader()}</div>;
}

// 👍 Extract it in its own component
import { Header } from "./Header";

function Component() {
  return (
    <div>
      <Header />
    </div>
  );
}
```
