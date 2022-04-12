import { createStore } from "redux";

// REDUCER FUNCTION
const reducerFN = (state = {counter: 0, addOrSubValue: 0}, action) => {

    // 2 major limitations for react reducer functions
    // Synchronous Function
    // We should not mutate the original state so it should always be a copy of the original state while updating the value.

    switch(action.type) {
        case 'INC': {
            const temp = {...state};
            temp.counter = state.counter + 1;
            return temp;
        }   
        case 'DEC': {
            const temp = {...state};
            temp.counter = state.counter - 1;
            return temp;
        }   
        case 'addOrSubValue': {
            const temp = {...state};
            temp.addOrSubValue = action.payload;
            return temp;
        }
        case 'ADD': {
            const temp = {...state};
            temp.counter = state.counter + state.addOrSubValue;
            return temp;
        }
        case 'SUB': {
            const temp = {...state};
            temp.counter = state.counter - state.addOrSubValue;
            return temp;
        }
            
        default:{
            return state
        }      
    }
}

// MY STORE
const store = createStore(reducerFN)
export default store