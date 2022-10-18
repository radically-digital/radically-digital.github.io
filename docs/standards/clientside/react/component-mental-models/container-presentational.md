# Container & Presentational

The predominant line of thinking is to split components in two groups - presentational and container components. Also known as smart and dumb.

The idea is that some components don’t have any functionality and state. They are just called by the parent component with some props. The container components contain the business logic, do the data fetching and manage the state.

This mental model is what the MVC structure is for back-end applications. It’s generic enough to work everywhere and you can’t go wrong with it.

**But**, in modern UI applications that pattern falls short. Pulling all the logic in a few components leads to bloat. They end up with too many responsibilities and become hard to manage. As an app grows putting the complexity in a few concentrated places is just not good for maintainability.
