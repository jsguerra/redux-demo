# Notes on Redux, Redux Toolkit and React-redux
An application and notes.
## Redux has 3 Core Concepts
- A **store** that holds the state of your application.
- An **action** that describes what happened in the application.
- A **reducer** which handles the action and decides how to update the state.

## Three Principles
__1st Principle__
> "The global state of your application is stored as an object insde a single store"
Maintain our application state in a single object which would be managed by the Redux store

__2nd Principle__
> "The only way to change the state is to dispatch an action, an object that describes what happened"
To update the state of yoru app, you need to let Redux know about that with an action
Not allowed to directly update the state object

__3rd Princle__
> "To specify how the state tree is updated based on actions, you write pure reducers"
Reducer - (previousState, action) => newState