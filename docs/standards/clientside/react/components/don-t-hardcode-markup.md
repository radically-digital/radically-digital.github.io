# Don't Hardcode Markup

- [Google Javascript naming conventions](https://google.github.io/styleguide/jsguide.html#naming)
- [Clean Code Typescript](https://ohmybuck.com/2022-07-29-10-59-clean-code-typescript)

Don’t hardcode markup for navigation, filters or lists. Use a configuration object and loop through the items instead.

This means you only have to change the markup and items in a single place.

```jsx
// 👎 Hardcoded markup is harder to manage.
function Filters({ onFilterClick }) {
  return (
    <>
      <p>Book Genres</p>
      <ul>
        <li>
          <div onClick={() => onFilterClick("fiction")}>Fiction</div>
        </li>
        <li>
          <div onClick={() => onFilterClick("classics")}>Classics</div>
        </li>
        <li>
          <div onClick={() => onFilterClick("fantasy")}>Fantasy</div>
        </li>
        <li>
          <div onClick={() => onFilterClick("romance")}>Romance</div>
        </li>
      </ul>
    </>
  );
}

// 👍 Use loops and configuration objects
const GENRES = [
  {
    identifier: "fiction",
    name: Fiction,
  },
  {
    identifier: "classics",
    name: Classics,
  },
  {
    identifier: "fantasy",
    name: Fantasy,
  },
  {
    identifier: "romance",
    name: Romance,
  },
];

function Filters({ onFilterClick }) {
  return (
    <>
      <p>Book Genres</p>
      <ul>
        {GENRES.map((genre) => (
          <li>
            <div onClick={() => onFilterClick(genre.identifier)}>
              {genre.name}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
```
