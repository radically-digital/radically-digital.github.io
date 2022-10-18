# Write Consistent Components

- [eslint-no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)
- [eslint-max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function)
- [eslint-max-depth](https://eslint.org/docs/latest/rules/max-depth)
- [eslint-no-else-return](https://eslint.org/docs/latest/rules/no-else-return)

Stick to the same style for your components. Put utility functions in the same place, export the same way and follow the same naming patterns.

There isn’t a real benefit of one approach over the other.

No matter if you’re exporting at the bottom of the file or directly in the definition of the component, pick one and stick to it.

Consider limiting your function length (250 for React is advised), and banning the use of else's in favour of the [early return pattern AKA the bouncer pattern](https://rikschennink.nl/thoughts/the-bouncer-pattern/).
