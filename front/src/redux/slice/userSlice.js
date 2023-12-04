// در فایل userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const hydrate = (state) => {
  const isServer = typeof window === 'undefined';
  if (!isServer) {
    const storedUser = localStorage.getItem("user");
    state.user = storedUser ? JSON.parse(storedUser) : null;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      hydrate(state);
    });
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export const hydrateUser = () => ({ type: hydrate.type });
export default userSlice.reducer;
