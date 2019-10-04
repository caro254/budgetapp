import { createStore } from 'redux';

//Action creators - functions that return action objects

const incrementCount = (payload = {} ) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const decrementCount = (payload = {}) => ({
    type: 'DECREMENT',
    decrementBy: typeof payload.decrementBy === "number" ? payload.decrementBy : 1
});

const setCount = (payload) => ({
    type: 'SET',
    count: payload.count
});

const resetCount =() => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
         return {
             count: state.count + action.incrementBy
         };
          case 'DECREMENT':
           return {
               count: state.count -action.decrementBy
           };
           case 'SET':
            return {
               count: action.count
           };
           case 'RESET':
             return {
               count: 0
           };
           default:
             return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100}));
