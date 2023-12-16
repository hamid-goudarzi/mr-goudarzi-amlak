// در فایل userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const hydrate = (state) => {
  const isServer = typeof window === "undefined";
  if (!isServer) {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("token", JSON.stringify(payload.token));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    "user/hydrate": (state) => {
      const user = hydrate(state);
      if (user) {
        state.user = user;
      }
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export const hydrateUser = () => ({ type: "user/hydrate" });

export default userSlice.reducer;
