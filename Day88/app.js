// Redux se createStore function import kar rahe hain
const { createStore } = require("redux");

// Action Types (Ye unique strings hoti hain jo batati hain kya action perform hoga)
const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";

// ==================== Action Creators ====================

// Cake buy karne ka action object return karega
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

// Cake restock karne ka action object return karega
function restockCake() {
  return {
    type: RESTOCK_CAKE,
  };
}

// ==================== Initial State ====================

// Store ki initial state
const initialCakeStore = {
  numOfCakes: 12,
};

// ==================== Reducer ====================

// Reducer ek pure function hota hai.
// Ye current state aur action receive karta hai
// aur hamesha ek nayi state return karta hai.

const cakeReducer = (state = initialCakeStore, action) => {
  switch (action.type) {

    // Agar BUY_CAKE action dispatch hua
    case BUY_CAKE:
      return {
        // Cake purchase hone par 1 cake kam ho jayega
        numOfCakes: state.numOfCakes - 1,
      };

    // Agar RESTOCK_CAKE action dispatch hua
    case RESTOCK_CAKE:
      return {
        // Store me 5 naye cakes add kar do
        numOfCakes: state.numOfCakes + 5,
      };

    // Agar koi unknown action aaya to current state hi return karo
    default:
      return state;
  }
};

// ==================== Store ====================

// Redux Store create kar rahe hain
// Store ke andar application ki state rehti hai
const store = createStore(cakeReducer);

// ==================== Subscribe ====================

// subscribe() state change ko observe karta hai
// Jab bhi dispatch hoga aur state change hogi,
// ye callback automatically execute hoga.

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// ==================== Dispatch Actions ====================

// BUY_CAKE action dispatch
store.dispatch(buyCake());

// BUY_CAKE action dispatch
store.dispatch(buyCake());

// BUY_CAKE action dispatch
store.dispatch(buyCake());

// RESTOCK_CAKE action dispatch
store.dispatch(restockCake());

// ==================== Unsubscribe ====================

// Ab listener remove ho jayega
// Iske baad state change hogi lekin subscribe callback nahi chalega
unsubscribe();

// Final state manually print kar rahe hain
console.log(store.getState());