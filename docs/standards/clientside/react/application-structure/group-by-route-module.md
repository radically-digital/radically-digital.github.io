# Group by Route/Module

<!-- TODO https://github.com/oldboyxx/jira_clone/tree/master/client -->

> The main rule to follow: **Files from one module can only import from ancestor folders within the same module or from `src/shared`.** This makes the codebase easier to understand, and if you're fiddling with code in one module, you will never introduce a bug in another module.

Grouping by containers and components makes applications hard to navigate. To understand what component belongs where you need a good level of familiarity.

Not all components are equal - some are used globally, others are made for a specific part of the app. This structure works well for the smallest of projects. But anything that goes beyond a handful of components becomes hard to manage.

```jsx
// π Don't group by technical details
βββ containers
|   βββ Dashboard.jsx
|   βββ Details.jsx
βββ components
|   βββ Table.jsx
|   βββ Form.jsx
|   βββ Button.jsx
|   βββ Input.jsx
|   βββ Sidebar.jsx
|   βββ ItemCard.jsx

// π Group by module/domain
βββ modules
|   βββ common
|   |   βββ components
|   |   |   βββ Button.jsx
|   |   |   βββ Input.jsx
|   βββ dashboard
|   |   βββ components
|   |   |   βββ Table.jsx
|   |   |   βββ Sidebar.jsx
|   βββ details
|   |   βββ components
|   |   |   βββ Form.jsx
|   |   |   βββ ItemCard.jsx
```

Group by route/module from the start. This is a structure that supports change and growth. The point is not to have your application outgrow the architecture quickly. If itβs based on components and containers that will happen too fast.

A module based architecture is easy to extend. You can just add modules on top of it without increasing the complexity.

The container/component structure is not wrong but itβs too generic. It doesnβt tell the reader anything about the project besides that it uses React.
