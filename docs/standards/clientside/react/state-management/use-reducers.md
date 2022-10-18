# Use Reducers

Sometimes you need a more powerful way to express and manage state changes. Start with `useReducer` before you reach for an external library. This is a great mechanism to do complex state management and it doesn’t require 3rd party dependencies.

In combination with React’s Context and TypeScript, `useReducer` can be really powerful. Unfortunately, it’s not that widely used. People still reach for 3rd party libraries.

If you need multiple pieces of state, move them to a reducer instead.

```jsx
// 👎 Don't use too many separate pieces of state
const TYPES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState(TYPES.LARGE)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useSatte(null)

  return (
    ...
  )
}

// 👍 Unify them in a reducer instead
const TYPES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const initialState = {
  isOpen: false,
  type: TYPES.LARGE,
  phone: '',
  email: '',
  error: null
}

const reducer = (state, action) => {
  switch (action.type) {
    ...
    default:
      return state
  }
}

function Component() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    ...
  )
}
```
