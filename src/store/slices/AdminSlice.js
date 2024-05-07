/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import { deleteAllUsers } from "../actions";

const adminSlice = createSlice({
  name: "admin",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(deleteAllUsers, () => {
      console.log("In delete all users admin");
      return [];
    });
  },
});
export default adminSlice.reducer;
