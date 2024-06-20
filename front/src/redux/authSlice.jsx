import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  status: 'idle',
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.status = 'succeeded';
      state.user = action.payload;
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
      state.user.username = action.payload; // Mettre à jour le nom d'utilisateur dans l'état global
    },
  },
});

export const { loginSuccess, loginFailure, logout, infoUserName } = authSlice.actions;

export default authSlice.reducer;

