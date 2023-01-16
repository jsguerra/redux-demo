const redux = require("redux");
const produce = require("immer").produce

// use immer to handle nested states

const initialState = {
  name: "Vishwas",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

// Step 1 define the constent for the action type
const STREET_UPDATED = "STREET_UPDATED";

// Step 2 define the action creator which returns the action object
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

// Step 3 define the reducer to handle the action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })
    default: {
      return state;
    }
  }
};

// Create the store
const store = redux.createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
store.dispatch(updateStreet("456 Main St"));
unsubscribe();
