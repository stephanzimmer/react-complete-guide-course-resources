//import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import classes from './Counter.module.css';

const Counter = ({counter, increment, decrement}) => {
  //const counter = useSelector(state => state.counter)
  //const dispatch = useDispatch()

  // const increment = () => {
  //   dispatch({
  //     type: 'increment'
  //   })    
  // };
  
  // const decrement = () => {
  //   dispatch({
  //     type: 'decrement'
  //   })
  // };

  //not needed when using useSelector
  //store.subscribe(handleStoreChange)

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter} Counter</div>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => increment(5)}>Increment by 5</button>
      <button onClick={() => decrement(1)}>Decrement</button>
    </main>
  );
};

const mapReduxStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (val) => dispatch({
        type: 'increment',
        payload: val
      }),
    decrement: (val) => {      
      dispatch({
      type: 'decrement',
      payload: val
    })}
  }
}
//connect is used instead of the useSelector hook
export default connect(mapReduxStateToProps, mapDispatchToProps)(Counter);
