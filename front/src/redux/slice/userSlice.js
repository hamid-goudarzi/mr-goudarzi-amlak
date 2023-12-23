// در فایل userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const hydrate = (state) => {
  const isServer = typeof window === "undefined";
  if (!isServer) {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    return {
      info: storedUser ? JSON.parse(storedUser) : null,
      token: storedToken ? JSON.parse(storedToken) : null,
    };
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: null,
    token: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.info = payload.user;
      state.token = payload.token;
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("token", JSON.stringify(payload.token));
    },
    logout: (state) => {
      state.info = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    "user/hydrate": (state) => {
      const {info, token} = hydrate(state);
      console.log(info, token);
      if (info) {
        state.info = info;
      }
      if (token) {
        state.token = token;
      }
    },
    
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export const hydrateUser = () => ({ type: "user/hydrate" });
export default userSlice.reducer;
