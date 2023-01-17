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

## Redux Store
One store for the entire application

Responsibilites:
- Holds application state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Registers listeners via subscribe(listener)
- Handles unregistering of listeners via the function returned by subscribe(listerner)

### Immer
Immer is an npm package that helps to simplify the handling of nested state

## Middleware
Is the suggested way to extend Redux with custom functionality

Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer

Use middleware for logging, crash reporting, performing asynchronous tasks etc

## Asynchronous Actions
Asynchronous API calls to fetch data from an end point and use that data in your application.

For data fetching, the structure is as follows:

```
state = {
  loading: true,
  data: [],
  error: ""
}
```

**loading** - Display a loading spinner in your component
**data** - List of users
**error** - Display error to the user

### Three actions: (types)
**FETCH_USERS_REQUESTED** - Fetch list of users
**FETCH_USERS_SUCCEEDED** - Fetched successfully
**FETCH_USERS_FAILED** - Error when fetching the data

### Reducers
case: **FETCH_USERS_REQUESTED**
loading: true
case: **FETCH_USERS_SUCCEEDED**
loading: false
users: data(from API)
case: **FETCH_USERS_SUCCEEDED**
loading: false
error: error(from API)

## NPM Packages
**axios**
Requests to an API end point

**redux-thunk**
The standard way to define async action creators
It is a Middleware

## Additional Notes
Each reducer can response to any action dispatched in the application.