import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true
}

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      //allowed to "mutate" state here! redux toolkit uses immer, which creates copy of state as needed.
      //don't need to return the whole state like without the toolkit
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.counter = !state.counter;
    }
  }
})

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    };
  }

  return state;
};


const store = createStore(counterReducer);

export default store;