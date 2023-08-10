import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {value: {id:"", name: "", email: "", photo: ""}},
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },

    logout: (state) => {
      state.value = {id:"", name: "", email: "", photo: "" }
    }
  }
}) 

export const {login, logout}  = userSlice.actions

export default userSlice.reducer;
