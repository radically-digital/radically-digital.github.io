# Number of Props

The question of how many props should a component receive is a subjective one. The number of props that a component has is correlated to how much it’s doing. The more props you pass to it the more responsibilities it has.

A high number of props is a signal that a component is doing too much.

If I go above 5 props I consider whether this component should be split. In some cases, it may just need a lot of data. An input field, for example, may have a lot of props. In others it’s a sign that something needs to be extracted.

Note: The more props a component takes, the more reasons to rerender.
