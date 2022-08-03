# Minimise the use of Optional Chaining

In thinking where your data exists, consider where data does, and doesn't exist. eg A user profile page _will always_ contain user details. Limit your use of [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

```js
const App: React.FC = () => {
  if (user) {
    return <Profile user={user} />;
  }

  return <LoginPage />;
};

// 👎 optional chaining offers no value here and only makes our testing complex - we need to constantly assert user information
type User = { name: string };

const Profile: React.FC<{ user?: User }> = ({ user }) => (
  <div>
    <h2>Hello {user?.name}</h2>
  </div>
);

// 👍 Simpler to test - we wouldn't show this component otherwise.
const Profile: React.FC<{ user: User }> = ({ user }) => (
  <div>
    <h2>Hello {user.name}</h2>
  </div>
);
```
