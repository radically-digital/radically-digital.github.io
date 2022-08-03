# Data Fetching

<!-- TODO HANDLING STATE WITH DATA FETCHING -->

## Use a Data Fetching Library

React doesn’t come with an opinionated way of fetching or updating data from an API. Each team creates their own implementation usually involving a service that holds async functions which communicate with the API.

Going that route means that we need to manage loading states and handle http errors on our own. That leads to verbose code with a lot of boilerplate.

Instead of doing that we should use libraries like [React Query](https://react-query.tanstack.com/) or [SWR](https://swr.vercel.app/). They make communicating with a server a natural part of the component lifecycle in an idiomatic way - a hook.

They come with caching built in and manage loading and error states for us. We just need to handle them. Also, they remove the need to use a state management library to handle that data.
