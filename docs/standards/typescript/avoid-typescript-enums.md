# Avoid typescript enums

Enums have a few [documented issues](https://fettblog.eu/tidy-typescript-avoid-enums/) (the [TS team agrees](https://twitter.com/orta/status/1348966323271987201?s=20)). A simpler alternative to enums is just declaring a union type of string literals or using as const to carry the data through to runtime.

```tsx
type Position = "left" | "right" | "top" | "bottom";

const buttonSizes = {
  default: "default",
  small: "small",
  large: "large",
} as const;

export const Button: React.FC<{ size: keyof typeof buttonSizes }> = ({
  size,
  ...props
}) => <Button size={size} {...props} />;
```
