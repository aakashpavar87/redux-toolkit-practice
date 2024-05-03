import { createAction } from "@reduxjs/toolkit";
const deleteAllUsers = createAction("deleteAllUsers");
const updateOneUser = createAction("updateOneUser");
export {deleteAllUsers, updateOneUser};