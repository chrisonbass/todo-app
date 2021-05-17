# Compiled JSX Example

This example uses Browserify alongside Babel to compile JSX and bundle separated modules into a single, ES5-friendly JS file. 
This project is also an experiment in using JSX style Javascript without using React.  Our [babel config](./.babelrc) lets the compiler know to use our [custom renderer](src/parseJSX.js) in place of the React.

Ideas for extending this project:
 - Find a way to "react" to prop changes
   - would be cool if only the elements that need to render, re-render
 - Add routing (i.e. url changes but page doesn't reload to change content)
