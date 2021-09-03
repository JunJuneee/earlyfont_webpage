import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    fontlist: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setfontList: (state, action) => {
      state.fontlist = action.payload;
    },
    deleteFont: (state, action) => {
      state.fontlist = state.fontlist.filter(
        (list) => list.id !== action.payload
      );
    },
  },
});

export const { login, logout, setfontList, deleteFont } = userSlice.actions;

export const user = (state) => state.user;
export const fontlists = (state) => state.user.fontlist;
export default userSlice.reducer;
