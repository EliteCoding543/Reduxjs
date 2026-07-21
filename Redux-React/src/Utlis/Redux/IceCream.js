
const BUY_ICECREAM = "BUY_ICECREAM"
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM"

// Action Creator ICE Cream

export function buyIceCream(q){
    return {
        type: BUY_ICECREAM,
        payload: q || 1
    }
}

export function ReStockIceCream(q){
    return {
        type: RESTOCK_ICECREAM
    }
}

const initialIceCream = {
    numOfIceCream: 30
}

export const iceCreamReducer = (state = initialIceCream, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                numOfIceCream: state.numOfIceCream - action.payload
            }
        
        case RESTOCK_ICECREAM:
            return {
                numOfIceCream : 30
            }
        default : return state    
    }
}
