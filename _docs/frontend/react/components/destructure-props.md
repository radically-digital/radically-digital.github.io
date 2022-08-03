# Destructure Props

Most React components are just functions. They get props and return markup. In a normal function you use the arguments it is passed directly, so it makes sense to apply the same principle here. No need to repeat `props` everywhere.

A reason not to destructure the props would be to distinguish what is external and what is internal state. But in a regular function there is no distinction between arguments and variables. Don’t create unnecessary patterns.

```jsx
// 👎 Don't repeat props everywhere in your component
function Input(props) {
  return <input value={props.value} onChange={props.onChange} />;
}

// 👍 Destructure and use the values directly
function Component({ value, onChange }) {
  const [state, setState] = useState("");

  return <div>...</div>;
}
```
