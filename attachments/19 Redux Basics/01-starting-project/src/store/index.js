import { createStore } from 'redux'

const stateReducer = (state, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state
}

const store = createStore(
    stateReducer,
    {
        counter: 0
    });


export default store