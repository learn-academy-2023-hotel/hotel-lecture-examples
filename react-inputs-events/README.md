# React Inputs and Events
- DOM (Document Object Model): What you see on a page - tree of nodes
- Virtual DOM: Representation of the actual DOM that creates a diff when there is a change on the page

## Events
- Events: occurs anytime a user or browser manipulates a webpage
- onChange: is used to capture text in an input field

- Inputs in HTML will look like: `<input type="button">` vs jsx: `<input type="button"/>`

## onChange
- onChange is an attribute on the input tag that listens and captures those changes
- Event is a property that is given to us from the onChange listener
  - e is short for event
  - Event is an object 
  - Event is handed to our function from the onChange