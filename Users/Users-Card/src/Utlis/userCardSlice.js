import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userCard",

  initialState: {
    users: [],
    friend: [],
    block: [],
  },

  reducers: {
    // API se users save karna
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    // Friend List me add karna
    addFriend: (state, action) => {
      state.friend.push(action.payload);

      // Users list se remove
      state.users = state.users.filter(
        (user) => user.id !== action.payload.id
      );
    },

    // Block List me add karna
    blockFriend: (state, action) => {
      state.block.push(action.payload);

      // Users list se remove
      state.users = state.users.filter(
        (user) => user.id !== action.payload.id
      );
    },
  },
});

export const {
  setUsers,
  addFriend,
  blockFriend,
} = userSlice.actions;

export default userSlice.reducer;