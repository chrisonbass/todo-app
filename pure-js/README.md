# Pure JS Example

This example of the Todo App using classic Javascript.  Take note of the `create` function defined at the top of the `mainApp` function scope.  This method is used to create the new list items in the todo list.  Instead of using `.innerHTML` we elected to use `document.createElement` and use `element.appendChild` and `element.removeChild` to add/remove list items.

The `create` function from this example was modified for use in the [Compiled JSX example](../jsx-example/README.md)
