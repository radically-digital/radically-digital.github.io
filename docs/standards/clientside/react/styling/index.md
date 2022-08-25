# Styling

<!-- TODO CSS MODULES, SCSS -->
<!-- TODO STICK TO ONE PATTERN -->

## Use CSS-in-JS

That’s a really controversial take which many people won’t agree with. I’d rather use a library like Styled Components or Emotion because it allows me to express everything about my component in JavaScript. One less file to maintain. No CSS conventions to think about.

The logical unit in React is the component so in terms of separation of concerns it should own everything related to it.

_Note: There is no wrong option when it comes to styles - SCSS, CSS modules, libraries like Tailwind. CSS-in-JS is just the approach I would recommend._

## Keep Styled Components Together

When it comes to CSS-in-JS components it’s normal to have multiple ones in the same file. Ideally we’d like to keep them in the same file as the regular component that uses them.

However, if they become too lengthy, as styles can get, extract them in their own file living next to the component that uses them. I’ve seen this pattern used in open source projects like Spectrum.
