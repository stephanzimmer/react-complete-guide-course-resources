import { useRef } from 'react'
import classes from './Counter.module.css';
import store from '../store/index'

const Counter = () => {
  const inputRef = useRef()

  const handleStoreChange = () => {
    const { counter } = store.getState()
    console.log('handleStoreChange: ' + counter)
    inputRef.current.innerHTML = counter
  }


  const toggleCounterHandler = () => {
    store.dispatch({
      type: 'increment'
    })
  };

  store.subscribe(handleStoreChange)

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div ref={inputRef} className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
