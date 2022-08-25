# Move Components in Folders

<!-- TODO RELEVANT -->

Create a components folder for each module in my React applications. Whenever you need to create a component, create it there first. If it needs extra files like styles or tests, create its own folder and put them there.

As a general practice it’s good to have an `index.js` file which exports the React component so you don’t have to change import paths or have repetitive ones like `import Form from 'components/UserForm/UserForm'`. Still, keep the component file with its name to avoid confusion when multiple files are open.

```jsx
    // 👎 Don't keep all component files together
    ├── components
        ├── Header.jsx
        ├── Header.scss
        ├── Header.test.jsx
        ├── Footer.jsx
        ├── Footer.scss
        ├── Footer.test.jsx

    // 👍 Move them in their own folder
    ├── components
        ├── Header
            ├── index.js
            ├── Header.jsx
            ├── Header.scss
            ├── Header.test.jsx
        ├── Footer
            ├── index.js
            ├── Footer.jsx
            ├── Footer.scss
            ├── Footer.test.jsx
```
