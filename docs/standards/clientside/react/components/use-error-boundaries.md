# Use Error Boundaries

An error in one component shouldn’t bring down the entire UI. There are rare cases in which we want to take down the whole page or redirect if a critical error happens. Most of the times we’d be fine if we just hide a specific element from the screen.

In a function that deals with data you may have multiple try/catch statements. Put error boundaries to use not just on the top level. Wrap elements on the screen that can exist separately to avoid cascading failures.

```jsx
function Component() {
  return (
    <Layout>
      <ErrorBoundary>
        <CardWidget />
      </ErrorBoundary>

      <ErrorBoundary>
        <FiltersWidget />
      </ErrorBoundary>

      <div>
        <ErrorBoundary>
          <ProductList />
        </ErrorBoundary>
      </div>
    </Layout>
  );
}
```
