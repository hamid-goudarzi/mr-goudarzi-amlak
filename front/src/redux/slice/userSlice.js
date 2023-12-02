import { createSlice } from "@reduxjs/toolkit";
const isServer = typeof window === 'undefined';
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: !isServer && localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log(action.payload );
      localStorage.setItem("user", JSON.stringify(action.payload.user)); 
      localStorage.setItem("token", JSON.stringify(action.payload.token)); 
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;