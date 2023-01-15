const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// Define a string constant which defines the type of the Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

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

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// One Single state
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCreams: 20,
// };

// Creating multiple states
const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

// The Reduxer (pure function)
// (previousState, action) => newState;
// Single reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state, // make copy of state object and update certain properties
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes + action.payload,
//       };
//     case ICECREAM_ORDERED:
//       return {
//         ...state, // make copy of state object and update certain properties
//         numberOfIceCreams: state.numberOfIceCreams - 1,
//       };
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numberOfIceCreams: state.numberOfIceCreams + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// Multiple Reducers
const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state, // make copy of state object and update certain properties
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// createStore accepts a parameter which is the reducer
// Responsibility 1
// const store = createStore(reducer); // single reducer
const store = createStore(rootReducer); // multiple reducers

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
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

// Responsibility 5
unsubscribe();
