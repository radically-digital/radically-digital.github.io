# Use Typescript

Typescript is ideal for working with React components. It does compile time prop checking on components and will suit 90% of ways of working. If you require runtime type checking however, consider `InferPropTypes` from [@types/prop-types](https://www.npmjs.com/package/@types/prop-types).

An example of implementation:

```tsx
// Adapted from https://blog.logrocket.com/comparing-typescript-and-proptypes-in-react-applications
import React from "react";
import PropTypes, { InferProps } from "prop-types";

const BlogCardPropTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date),
  authorName: PropTypes.string.isRequired,
};

type BlogCardTypes = InferProps<typeof BlogCardPropTypes>;
export const BlogCard: React.FC<BlogCardTypes> = ({
  authorName,
  createdAt,
  title,
}) => {
  return <span>Blog Card</span>;
};

BlogCard.propTypes = BlogCardPropTypes;
```
