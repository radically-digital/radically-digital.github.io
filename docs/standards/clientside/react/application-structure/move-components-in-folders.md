# Move Components in Folders

<!-- TODO RELEVANT -->

Create a components folder for each module in my React applications. Whenever you need to create a component, create it there first. If it needs extra files like styles or tests, create its own folder and put them there.

As a general practice itβs good to have an `index.js` file which exports the React component so you donβt have to change import paths or have repetitive ones like `import Form from 'components/UserForm/UserForm'`. Still, keep the component file with its name to avoid confusion when multiple files are open.

```jsx
    // π Don't keep all component files together
    βββ components
        βββ Header.jsx
        βββ Header.scss
        βββ Header.test.jsx
        βββ Footer.jsx
        βββ Footer.scss
        βββ Footer.test.jsx

    // π Move them in their own folder
    βββ components
        βββ Header
            βββ index.js
            βββ Header.jsx
            βββ Header.scss
            βββ Header.test.jsx
        βββ Footer
            βββ index.js
            βββ Footer.jsx
            βββ Footer.scss
            βββ Footer.test.jsx
```
