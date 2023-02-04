import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  res: {
    login: "",
    register:"",
  },
  conv:[]
};

export const toolkit_reducer = createSlice({
  name: "redux-toolkit",
  initialState,
  reducers: {
    responseLogin: (state, actions) => {
        state.res = { ...state.res, login: actions.payload };
    },
    responseRegister: (state, actions) => {
        state.res = { ...state.res, register: actions.payload };
    },
    responseConversations: (state, actions) => {
      state.conv = actions.payload 
  },
  ClearSession: (state, actions) => {
    state.res = { ...state.res, login: "" }
},
  },
});

export const {
  responseLogin,
  responseRegister,
  responseConversations,
  ClearSession

 } = toolkit_reducer.actions;

export default toolkit_reducer.reducer;
