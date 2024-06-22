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
      state.error = action.payload.errorMessage || 'Login failed';
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.status = 'idle';
      state.user = null;
      state.error = null;
    },
    infoUserName: (state, action) => {
      if (state.user) {
        state.user.username = action.payload;
      }
    },
    changeUsernameRequest: (state) => {
      state.status = 'loading';
    },
    changeUsernameSuccess: (state, action) => {
      console.log('Reducer: changeUsernameSuccess', action.payload); // Verify the data received in the action
      state.status = 'succeeded';
      if (state.user) {
        state.user.userName = action.payload.newUsername; // Update username immutably
      }
    },
    changeUsernameFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.errorMessage || 'Failed to change username';
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  infoUserName,
  changeUsernameRequest,
  changeUsernameSuccess,
  changeUsernameFailure,
} = authSlice.actions;

export default authSlice.reducer;
