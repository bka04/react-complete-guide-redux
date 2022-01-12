import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //dispatches an action against our redux store
  const dispatch = useDispatch();

  //useSelector gets a part of the overall state and automatically sets up subscription
  //component will be updated and get latest counter whenever data changes in redux store
  //automatically clears the subscription if this component unmounts as well
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
