// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  status: 'idle',
  error: null,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.status = 'succeeded';
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.status = 'failed';
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.status = 'idle';
      state.user = null;
      state.error = null;
    },
    infoUserName: (state, action) => {
      state.user.username = action.payload;
    },
    changeUsernameRequest: (state, action) => {
      // Optionnel : Gérer l'état pendant la modification du nom d'utilisateur
    },
    changeUsernameSuccess: (state, action) => {
      state.user.username = action.payload.newUsername;
    },
  },
});

export const { loginSuccess, loginFailure, logout, infoUserName, changeUsernameRequest, changeUsernameSuccess } = authSlice.actions;

export default authSlice.reducer;

