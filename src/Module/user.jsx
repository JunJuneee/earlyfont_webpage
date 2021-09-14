import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    fontlist: [],
    pageNum: 1,
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
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
  },
});

export const { login, logout, setfontList, deleteFont, setPageNum } =
  userSlice.actions;

export const userInfo = (state) => state.user;
export const fontlists = (state) => state.user.fontlist;
export const pageNum = (state) => state.user.pageNum;
export default userSlice.reducer;
