# Organize Utility Functions

- See [Maintain a utility function directory](#maintain-a-utility-function-directory)

Utility functions that don’t need to hold a closure over the components should be moved outside. The ideal place is before the component definition so the file can be readable from top to bottom.

That reduces the noise in the component and leaves inside only those that need to be there.

```jsx
// 👎 Avoid nesting functions which don't need to hold a closure.
function Component({ date }) {
  function parseDate(rawDate) {
    ...
  }

  return <div>Date is {parseDate(date)}</div>
}

// 👍 Place the utility functions before the component
function parseDate(date) {
  ...
}

function Component({ date }) {
  return <div>Date is {parseDate(date)}</div>
}
```

You want to keep the least amount of utility functions inside the definition. Move as many as possible outside and pass the values from state as arguments.

Composing your logic out of pure functions that rely only on input makes it easier to track bugs and extend.

```jsx
// 👎 Utility functions shouldn't read from the component's state
export function Component() {
  const [value, setValue] = useState("");

  function isValid() {
    // ...
  }

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={validateInput}
      />
      <button
        onClick={() => {
          if (isValid) {
            // ...
          }
        }}
      >
        Submit
      </button>
    </>
  );
}

// 👍 Extract them and pass only the values they need
function isValid(value) {
  // ...
}

export function Component() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={validateInput}
      />
      <button
        onClick={() => {
          if (isValid(value)) {
            // ...
          }
        }}
      >
        Submit
      </button>
    </>
  );
}
```
