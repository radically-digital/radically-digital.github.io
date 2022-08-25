# Pass Objects Instead of Primitives

- See [Use Typescript](#use-typescript)

One way to limit the amount of props is to pass an object instead of primitive values. Rather than passing down the user name, email and settings one by one you can group them together. This also reduces the changes that need to be done if the user gets an extra field for example.

Using TypeScript makes this even easier.

```jsx
    // 👎 Don't pass values on by one if they're related
    <UserProfile
      bio={user.bio}
      name={user.name}
      email={user.email}
      subscription={user.subscription}
    />

    // 👍 Use an object that holds all of them instead
    <UserProfile user={user} />
```
