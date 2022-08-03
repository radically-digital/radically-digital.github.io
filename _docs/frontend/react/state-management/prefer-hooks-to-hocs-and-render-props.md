# Prefer Hooks to HOCs and Render Props

In some cases we need to enhance a component or give it access to external state. In general there are three ways to do this - higher order components (HOCs), render props and hooks.

Hooks have proven to be the most efficient way to achieve such composition. From a philosophical standpoint, a component is a function that **uses** other functions. Hooks allow you to tap into multiple sources of external functionality without them conflicting with each other. No matter the number of hooks, you know where each value comes from.

With HOCs you get values as props. This makes it unclear wether they come from the parent component or the wrapping one. Also, chaining multiple props together is known to cause errors.

Render props lead to high indentation and bad readability. Nesting multiple components with render props in the same tree makes the markup look even worse. Also it only exposes the values in the markup itself so you have to write the logic there or pass it down.

With hooks you work with simple values, which are easy to track and don’t interfere with the JSX.

```jsx
// 👎 Avoid using render props
function Component() {
  return (
    <>
      <Header />
      <Form>
        {({ values, setValue }) => (
          <input
            value={values.name}
            onChange={e => setValue('name', e.target.value)}
          />
          <input
            value={values.password}
            onChange={e => setValue('password', e.target.value)}
          />
        )}
      </Form>
      <Footer />
    </>
  )
}

// 👍 Favor hooks for their simplicity and readability
function Component() {
  const [values, setValue] = useForm()

  return (
    <>
      <Header />
      <input
        value={values.name}
        onChange={e => setValue('name', e.target.value)}
      />
      <input
        value={values.password}
        onChange={e => setValue('password', e.target.value)}
      />

      <Footer />
    </>
  )
}
```
