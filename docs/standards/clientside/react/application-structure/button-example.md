# Button Example

```tsx
const SIZE = {
  PRIMARY: "PRIMARY",
  SMALL: "SMALL",
  LARGE: "LARGE",
} as const;

const KIND = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
  DANGER: "DANGER",
} as const;

interface Props
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  size: keyof typeof SIZE;
  kind: keyof typeof KIND;
}

const getSizeStyle = (size: keyof typeof SIZE) => {
  switch (size) {
    case SIZE.SMALL:
      return styles.small;
    case SIZE.LARGE:
      return styles.large;
    case SIZE.PRIMARY:
    default:
      return styles.button;
  }
};

const getKindStyle = (size: keyof typeof KIND) => {
  switch (size) {
    case KIND.SECONDARY:
      return styles.secondary;
    case KIND.DANGER:
      return styles.danger;
    default:
    case KIND.PRIMARY:
      return styles.primary;
  }
};

export const Button: React.FC<Props> = ({ children, ...props }) => {
  const size = getSizeStyle(props.size);
  const kind = getKindStyle(props.kind);
  const className = [size, kind].join(" ");

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
```
