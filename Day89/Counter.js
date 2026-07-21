const {createStore} = require("redux")

// Action Types 
const INCREMENT_VALUE = "INCREMENT";
const DECREMENT_VALUE = "DECREMENT";
const RESET_VALUE = "RESET"

// Action Create 
const incrementAction = {
  type: INCREMENT_VALUE,
  payload: 1,
};

const decrementAction = {
  type: DECREMENT_VALUE,
  payload: 1,
};

const resetAction = {
  type: RESET_VALUE,
};


// ==================== Initial State ====================

// Store ki initial state

const initialState = {
    count : 0
}

// ==================== Reducer ====================



const CountReducer = (state = initialState, action) => {
    switch(action.type){

        case INCREMENT_VALUE:
            return {
                count: state.count + action.payload
            }

        case DECREMENT_VALUE:
            return {
                count: state.count - action.payload
            }
        
        case RESET_VALUE :
            return {
                initialState
            }

        default : 
            return state
    }
}

// ==================== Store ====================


const store = createStore(CountReducer);

// ==================== Subscribe ====================

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


// INCREMENT DISPTACH

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(resetAction);

// Ab listener remove ho jayega
// Iske baad state change hogi lekin subscribe callback nahi chalega
unsubscribe();

// Final state manually print kar rahe hain
console.log(store.getState());
