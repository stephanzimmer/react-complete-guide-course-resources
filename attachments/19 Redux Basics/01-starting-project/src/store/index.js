import { createStore } from 'redux'

const stateReducer = (state, action) => {
    console.log('stateReducer: ' + action.type + " " + action.payload)
    if (action.type === 'increment') {
        return {
            counter: state.counter + parseInt(action.payload),
            ...state
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - parseInt(action.payload),
            ...state
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