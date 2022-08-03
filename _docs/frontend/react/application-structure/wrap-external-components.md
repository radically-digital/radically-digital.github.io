# Wrap External Components

Try not to import too many 3rd party components directly. By creating an adapter around them we can modify the API if we have to. Also, we can change the library in a single place.

This goes for component libraries like Semantic UI and utility components as well. The simplest thing you can do is reexport them from the common module so they’re pulled from the same place.

A component doesn’t need to know what library we’re using for the date picker - only that it exists.

```jsx
// 👎 Don't import directly
import { Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";

// 👍 Export the component and use it referencing your internal module
import { Button, DatePicker } from "@modules/common/components";
```
