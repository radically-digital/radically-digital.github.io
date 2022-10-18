# Use Data Fetching Libraries

Often the data that we want to manage in state is retrieved from an API. We need to keep that data in memory, update it and access it in multiple places.

Modern data fetching libraries like [React Query](https://react-query.tanstack.com/) provide enough mechanisms to manage the external data. We can cache it, invalidate it and fetch it anew. They can be used for sending data as well, triggering a refresh for another piece of data.

It’s even easier if you’re working with a GraphQL client like [Apollo](https://www.apollographql.com/docs/react/). It has the concept of client state built in.
