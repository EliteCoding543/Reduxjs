import {createStore} from 'redux'

// Action Type in varibale store

const ADD_TODO = "ADD_TODO";
const DELETE_TUDO = "DELETE_TUDO"

// Create Action Creators

export function AddTudo(text){
    return{
        type: ADD_TODO,
        payload: text
    }
}

export function deleteTudo(id){
    return {
        type: DELETE_TUDO,
        payload: id
    }
}

// // InitialState

const InitialState = {
    tudo: []
}

// Create Reducer

const AddTudoReducer = (state = InitialState, action) => {
      switch(action.type){
        case ADD_TODO :
            return {
                ...state,
                tudo: [...state.tudo,
                    {
                      id: Date.now(),
                      text: action.payload,
                    },
                ],
            }
        
        case DELETE_TUDO :
            return {
                     ...state,
                     tudo: state.tudo.filter((tudo) => {
                        return tudo.id !== action.payload
                     }),
            }
        default :
              return state      
      }
}


export const Store = createStore(AddTudoReducer);