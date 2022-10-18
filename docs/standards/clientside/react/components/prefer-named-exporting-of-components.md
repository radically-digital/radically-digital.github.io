# Prefer named exporting of components

- [eslint-no-default-export](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md)

Always name your components. It helps when you’re reading an error stack trace and using the React Dev Tools.

```jsx
// 👎 Avoid this
export default () => <form>...</form>;
// or
export default function Form() {
  return <form>...</form>;
}

// 👍 Name your functions
export function Form() {
  return <form>...</form>;
}

export const Form = () => {
  return <form>...</form>;
}
```

It’s also easier to find where you are when developing if the component’s name is inside the file and enforces a consistent naming of components.

```jsx
// 👎 Avoid this
// ./form-contact.jsx
export default () => <form>...</form>;

// ./pages/login.jsx
import Form from "./form-contact";
// ./pages/home.jsx
import Contact from "./form-contact";

// 👍 Name your functions
export function FormContact() {
  return <form>...</form>;
}

// ./pages/login.jsx
import { FormContact } from "./form-contact";
// You can alias the import if absolutely necessary
// ./pages/home.jsx
import { FormContact as Contact } from "./form-contact";
```

Nextjs pushes for a default export on the page but also pushes for naming your functions.
