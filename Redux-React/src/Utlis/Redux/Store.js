import {createStore, combineReducers} from "redux"
import {iceCreamReducer} from '../Redux/IceCream'

const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE"




// Action Creator Cake 
 export function buyCake(q){
    return{
        type: BUY_CAKE,
        payload: q || 1
    }
}

export function reStockCake(q){
    return{
        type: RESTOCK_CAKE
    }
}


// InitialState 
const initialCake = {
    numOfCakes: 20
}


// Reducer Cake 
const cakeReducer = (state = initialCake, action) => {
     switch(action.type){
        case BUY_CAKE:
            if(action.payload > state.numOfCakes){
                return {
                    state
                }
            }
            return {
                numOfCakes : state.numOfCakes - action.payload
            }
        case RESTOCK_CAKE :
            return {
                numOfCakes : 20
            }
        default :
             return state
                     
     }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

export const Store = createStore(rootReducer)