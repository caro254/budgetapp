import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) { //checks for the state that exits
    case "INCREMENT": 
      const incrementBy = typeof action.incrementBy === "number" ? //checks if the incrementBy is a number and if it is it uses it 
        action.incrementBy : 1; // if the incrementBy is not a number it uses 1
          return {
               count: state.count + incrementBy
      };

    case "DECREMENT":
      const decrementBy = typeof action.decrementBy === "number" ? 
        action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };

      case "SET":
      return {
        count: action.count
      };

    default: //if a case that doesn't exist is declared it returns the current state
      return state;
  }
});

store.subscribe(() => { // shows on the browser every changing state/case
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
    type: "SET",
    count: 100
  });




