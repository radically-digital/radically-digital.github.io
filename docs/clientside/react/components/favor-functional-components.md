# Favor Functional Components

- [eslint-plugin-react-prefer-function-component](https://www.npmjs.com/package/eslint-plugin-react-prefer-function-component)

Favor functional components - they have a simpler syntax. No lifecycle methods, constructors or boilerplate. You can express the same logic with less characters without losing readability.

Unless you need an error boundary they should be your go-to approach. The mental model you need to keep in your head is a lot smaller.

```jsx
// 👎 Class components are verbose
class Counter extends React.Component {
  state = {
    counter: 0,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

// 👍 Functional components are easier to read and maintain
function Counter() {
  const [counter, setCounter] = useState(0);

  handleClick = () => setCounter(counter + 1);

  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```
