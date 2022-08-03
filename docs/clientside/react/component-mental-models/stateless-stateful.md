# Stateless & Stateful

Think of components as stateful and stateless. The mental model mentioned above implies that a few components should be managing a lot of the complexity. Instead, it should be spread throughout the app.

Data should live close to where it is used. When you’re using a GraphQL client you fetch the data in the component that displays it. Even if it’s not a top level one. Don’t think about **containers**, think about **responsibilities**. Consider what is the most logical component to hold a piece of state.

For example, a `<Form />` component should own the data of the form. An `<Input />` should be receiving values and calling callbacks when a change occurs. A `<Button />` should notify the form that it was pressed and let the form handle what happens.

Who does the validation in a form? Is the input field responsible? That would mean that this component becomes aware of the business logic of your application. How will it notify the form that there is an error? How will that error state be refreshed? Will the form know about that? If there’s an error but you try to submit, what will happen?

When faced with questions like this you should become aware that responsibilities are getting mixed up. In this case it’s better for the input to be left stateless and receive an error message from the form.
