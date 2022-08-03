# Be wary of using nested Ternary Operators

- [eslint-plugin-proper-ternary](https://github.com/getify/eslint-plugin-proper-ternary)
- [elint-no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)
- See [Write Consistent Components](#write-consistent-components)

They seem to save space at the time but it’s always better to be explicit and obvious in your intentions.

Ternary operators simplify assignment logic drastically, but striking a balance is tricky as they become hard to read after the first level.

```jsx
import { useRouter } from "next/router"

// 👎 Because let allows re-assignment, nav could be redeclared elsewhere in the code
const Component = () => {
  const router = useRouter()
  let nav = router.replace;

  if (typeof window !== "undefined") {
    nav = (path: string) => (window.location.href = path);
  }

 ...
}

// 👍 nav is only assigned once
const Component = () => {
  const router = useRouter()
  const nav = typeof window !== "undefined" ?
    (path: string) => (window.location.href = path) :
    router.replace;

 ...
}
```

```jsx
// 👎 Nested ternaries are hard to read in JSX
isSubscribed ? (
  <ArticleRecommendations />
) : isRegistered ? (
  <SubscribeCallToAction />
) : (
  <RegisterCallToAction />
);

// 👍 Place them inside a component on their own
function CallToActionWidget({ subscribed, registered }) {
  if (subscribed) {
    return <ArticleRecommendations />;
  }

  if (registered) {
    return <SubscribeCallToAction />;
  }

  return <RegisterCallToAction />;
}

function Component() {
  return <CallToActionWidget subscribed={subscribed} registered={registered} />;
}
```
