# Conditional Rendering

- See [Write Consistent Components](#write-consistent-components)

In some situations using short circuit operators for conditional rendering may backfire and you may end up with an unwanted `0` in your UI. To avoid this default to using ternary operators. The only caveat is that they’re more verbose.

The short-circuit operator reduces the amount of code which is always nice. Ternaries are more verbose but there is no chance to get it wrong. Plus, adding the alternative condition is less of a change.

Prefer returing a react fragment (`<React.Fragment />` or `<></>`) over `null` to take advantage of typescripts type inference.

```jsx
// 👎 Try to avoid short-circuit operators
function Component() {
  const count = 0;

  return <div>{count && <h1>Messages: {count}</h1>}</div>;
}

// 👍 Use early return
function Component() {
  const count = 0;

  if (!count) {
    return <></>;
  }

  return (
    <div>
      <h1>Messages: {count}</h1>
    </div>
  );
}

// 👍 or use a ternary instead
function Component() {
  const count = 0;

  return <div>{count ? <h1>Messages: {count}</h1> : <></>}</div>;
}
```
