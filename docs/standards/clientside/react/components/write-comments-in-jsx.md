# Write Comments in JSX

When something needs more clarity open a code block and give additional information. The markup is a part of the logic so when you feel that something needs more clarity - provide it.

```jsx
function Component(props) {
  return (
    <>
      {/* If the user is subscribed we don't want to show them any ads */}
      {user.subscribed ? null : <SubscriptionPlans />}
    </>
  );
}
```
