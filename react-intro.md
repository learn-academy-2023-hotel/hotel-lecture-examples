# React Intro 10/19/2023

### What is React?

- Creates interactive UI (user interface)
- Handles user interactions
- React is a JavaScript library for building user interfaces

### What is a library?

- Collection of code snippets
- Node modules - JavaScript code snippets

### Package manager

- yarn - package manager
- Assemble code snippets (node_modules in JavaScript)
- Command line tools that organize the code

### Scale

- Writing code in a way that allows for more and more users
- React was created by Facebook so the application could scale

### What React does well

- Structures code to be reusable
- Handles user interactions really quickly and really efficiently

### Components

- Components are functions
- Functions handle JavaScript logic and markup, HTML and CSS that creates the user interface
- Components are reusable

### User Interactions

- Page loads are expensive
- DOM - document object model, visual representation of code
- DOM tree - all the HTML tags (all the HTML elements)
- node - one tag (or one element) on the DOM tree
- Isolate the node and update just the node
- Virtual DOM - allows React to isolate a node, listens for changes and isolates the change

### SPA

- Single page application, React is an SPA
- Presents a single view to the user
- SPA in React is made up of many components
- Components are like mosaic tiles that work together to create a single view

### JSX

- JavaScript XML, markup language that is a combo of HTML and JS
- React Fragment are empty JSX tags that are used to wrap other JSX tags <></>

### Main takeaways

- This is a component
- Components are functions
- Components return markup
- Components must be invoked
- App - top level component, App gets rendered to the browser

```javascript
const App = () => {
  return <h1>Hello World!</h1>
}
<App />
```


### Error

- Getting a blank page? Inspect the console tab

```
parse-error.ts:81 Uncaught SyntaxError: /Inline Babel script: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
```
