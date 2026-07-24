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

    // Add Friend
    addFriend: (state, action) => {
      const user = action.payload;

      // Already Blocked
      const isBlocked = state.block.some(
        (item) => item.id === user.id
      );

      if (isBlocked) return;

      // Already Friend
      const isFriend = state.friend.some(
        (item) => item.id === user.id
      );

      if (isFriend) return;

      state.friend.push(user);

      state.users = state.users.filter(
        (item) => item.id !== user.id
      );
    },

    // Block User
    blockFriend: (state, action) => {
      const user = action.payload;

      // Already Friend
      const isFriend = state.friend.some(
        (item) => item.id === user.id
      );

      if (isFriend) return;

      // Already Blocked
      const isBlocked = state.block.some(
        (item) => item.id === user.id
      );

      if (isBlocked) return;

      state.block.push(user);

      state.users = state.users.filter(
        (item) => item.id !== user.id
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