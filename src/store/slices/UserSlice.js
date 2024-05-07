/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { deleteAllUsers, updateOneUser } from "../actions";
const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(window.localStorage.getItem("users")) || [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      window.localStorage.setItem("users", JSON.stringify(state));
    },
    removeUser(state, action) {
      state.splice(action.id, 1);
      window.localStorage.setItem("users", JSON.stringify(state));
    },
    updateUser(state, action) {
      if (action.payload.id < state.length) {
        state[action.payload.id] = action.payload.name;
        window.localStorage.setItem("users", JSON.stringify(state));
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(deleteAllUsers, () => {
      console.log("In delete all users User Extra Reducers");
      window.localStorage.removeItem("users");
      return [];
    });
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
