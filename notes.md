React State

- State is an object that stores the values of properties belonging to a component that can change over time
- State object can store multiple properties
    - ex: state = {

    name: "World"
    message: "this is a state property"

  };
  - to use: this.state.name or this.state.message


- Can be modified based on the user action 
- Every time state changes, react re-renders the component to the browser
- The state object is initialized in the constructor 
- This.setState() is used to change the value of the state object 
- setState() function performs a shallow merge between new and previous state
 - state is used to store the data of the components that has to be rendered to the browser
- State holds the data and can change over time 
- Can only be used in class components
- Generally updated by event handlers

- In state object, can initialize properties
- Can initialize a state with this.state
- 


- setState
    - syntax: this.setState({ quantity: value });
    - Updating state in response to event handlers, server responses, or prop changes
    - setState() function performs a shallow merge between new and previous state
    - setState() method adds all the updates made to a components state and instructs React to re-render component and children with the updated state


Functional components 
- Simple functions 
- Absense of ‘this’ keyword 
- Solution without using ‘state’

Class components 
- Must contain render method
    - Render () {}
- Maintain own state 
- Provide lifecycle hooks 


Components 
- lifecycle 

- componentwillMount
    -called immediately before the intial rendering occurs

- componentdidMount
    - invoked after React inserts the component into the DOM


