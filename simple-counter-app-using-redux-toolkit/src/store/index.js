import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    // name of the slice
    name: 'counter',
    // initial state
    initialState: {counter: 0, addOrSubValue: 0},
    // reducer functions as an object
    reducers: {
        // increase by 1
        increment(state, action) {
            state.counter++;
        },
        // decrease by 1
        decrement(state, action) {
            state.counter--;
        },
        // changing the value of how much I want to add with or subtract from the counter
        changeAddOrSubValue(state, action) {
            state.addOrSubValue = action.payload
        },
        // add by desired number
        addBy(state, action) {
            state.counter += state.addOrSubValue
        },
        // subtract by desired number
        subBy(state, action) {
            state.counter -= state.addOrSubValue
        },
    }
})

export const actions = counterSlice.actions;

// STORE
const store = configureStore({
    reducer: counterSlice.reducer
})

export default store