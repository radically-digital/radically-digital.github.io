# Group by Route/Module

<!-- TODO https://github.com/oldboyxx/jira_clone/tree/master/client -->

> The main rule to follow: **Files from one module can only import from ancestor folders within the same module or from `src/shared`.** This makes the codebase easier to understand, and if you're fiddling with code in one module, you will never introduce a bug in another module.

Grouping by containers and components makes applications hard to navigate. To understand what component belongs where you need a good level of familiarity.

Not all components are equal - some are used globally, others are made for a specific part of the app. This structure works well for the smallest of projects. But anything that goes beyond a handful of components becomes hard to manage.

```jsx
// 👎 Don't group by technical details
├── containers
|   ├── Dashboard.jsx
|   ├── Details.jsx
├── components
|   ├── Table.jsx
|   ├── Form.jsx
|   ├── Button.jsx
|   ├── Input.jsx
|   ├── Sidebar.jsx
|   ├── ItemCard.jsx

// 👍 Group by module/domain
├── modules
|   ├── common
|   |   ├── components
|   |   |   ├── Button.jsx
|   |   |   ├── Input.jsx
|   ├── dashboard
|   |   ├── components
|   |   |   ├── Table.jsx
|   |   |   ├── Sidebar.jsx
|   ├── details
|   |   ├── components
|   |   |   ├── Form.jsx
|   |   |   ├── ItemCard.jsx
```

Group by route/module from the start. This is a structure that supports change and growth. The point is not to have your application outgrow the architecture quickly. If it’s based on components and containers that will happen too fast.

A module based architecture is easy to extend. You can just add modules on top of it without increasing the complexity.

The container/component structure is not wrong but it’s too generic. It doesn’t tell the reader anything about the project besides that it uses React.
