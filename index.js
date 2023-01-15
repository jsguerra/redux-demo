const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

// Define a string constant which defines the type of the Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// An action creator is a function that returns an object
function orderCake() {
  // Define an Action which is an object with a type property
  // you can add other properties along with type
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
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
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
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
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

// Alternate way to dispatch by using bindActionCreators
// This is not necessary
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

// Responsibility 5
unsubscribe();
