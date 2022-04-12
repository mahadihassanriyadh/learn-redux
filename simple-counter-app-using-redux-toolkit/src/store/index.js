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

// We have to export the counterSlice.actions
export const actions = counterSlice.actions;

// Creating CONFIGURE STORE
// It will contain an object which will contain a property of the reducer (We will give it the counter reudcer)

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store



// Steps
// 1. import configureStore and counterSlice from @reduxjs/toolkit
// 2. Create a slice called counterSlice using counterSlice 
// 3. counterSlice will contain a name, initial state and reducer functions
// 4. creating store and export it
// 5. export the actions of counterSlice