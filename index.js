const redux = require("redux");
const createStore = redux.createStore;

// Define a string constant which defines the type of the Action
const CAKE_ORDERED = "CAKE_ORDERED";

// An action creator is a function that returns an object
function orderCake() {
  // Define an Action which is an object with a type property
  // you can add other properties along with type
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const initialState = {
  numberOfCakes: 10,
};

// The Reduxer (pure function)
// (previousState, action) => newState;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, // make copy of state object and update certain properties
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

// createStore accepts a parameter which is the reducer
// Responsibility 1
const store = createStore(reducer);

// Responsibility 2
console.log("Initial state", store.getState());

// Responsibility 4
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

// Responsiblity 3
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

// Responsibility 5
unsubscribe();
