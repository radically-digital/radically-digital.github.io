# Move Lists in a Separate Component

Looping through a list of items is a common occurrence, usually done with the `map` function. However, in a component that has a lot of markup, the extra indentation and the syntax of `map` don’t help with readability.

When you need to map over elements, extract them in their own listing component, even if the markup isn’t much. The parent component doesn’t need to know about the details, only that it’s displaying a list.

Only keep a loop in the markup if the component’s main responsibility is to display it. Try to keep a single mapping per component but if the markup is long or complicated, extract the list either way.

```jsx
// 👎 Don't write loops together with the rest of the markup
function Component({ topic, page, articles, onNextPage }) {
  return (
    <div>
      <h1>{topic}</h1>
      {articles.map((article) => (
        <div>
          <h3>{article.title}</h3>
          <p>{article.teaser}</p>
          <img src={article.image} />
        </div>
      ))}
      <div>You are on page {page}</div>
      <button onClick={onNextPage}>Next</button>
    </div>
  );
}

// 👍 Extract the list in its own component
function Component({ topic, page, articles, onNextPage }) {
  return (
    <div>
      <h1>{topic}</h1>
      <ArticlesList articles={articles} />
      <div>You are on page {page}</div>
      <button onClick={onNextPage}>Next</button>
    </div>
  );
}
```
