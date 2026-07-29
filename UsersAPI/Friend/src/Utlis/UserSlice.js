import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("UserData", async(_, {rejectWithValue}) => {
    try {
         const res = await fetch("https://dummyjson.com/users")
         const data = await res.json()
          return data.users

    } catch (error) {
        return rejectWithValue(error.message)
    }
})

// Action Creater 
export const UserSliceReducer = createSlice({
    name : "userData",
    initialState : {
        loading : false,
        error : null,
        data : [],
        addFrnd : [],
    },

    reducers : {
        addFriend : (state, action) => {
            let exists = state.addFrnd.find((item) => {
                return item.id == action.payload.id
            })

            if(!exists) {
                state.addFrnd.push(action.payload)
            }
        },


        removeFriend : (state, action) => {
            let remove = state.addFrnd.filter((item) => {
                return item.id != action.payload
            })

            state.addFrnd = remove
        }
    },

    extraReducers : (bulider) => {
        bulider
          .addCase(getUsers.pending, (state, action) => {
            return {
                ...state,
                loading : true, 
                error : null,
            }
          })

          .addCase(getUsers.fulfilled, (state, action) => {
              return {
                ...state,
                loading : false,
                data : action.payload
              }
          })

          .addCase(getUsers.rejected, (state, action) => {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
          })
    }
})
export const { addFriend, removeFriend } = UserSliceReducer.actions;
export default UserSliceReducer.reducer