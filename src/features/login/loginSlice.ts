import { LoginState } from '@model/api/stateModel';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

export const initialState: LoginState = {
  login: '',
  password: '',
  token: '',
  refreshToken: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    savelogin(state, action: PayloadAction<string>) {
      state.login = action.payload;
    },
    savePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    saveToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    saveRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
    saveAllLoginData(state, action: PayloadAction<LoginState>) {
      state = { ...action.payload };
    },
    clearLoginData(state) {
      state.login = '';
      state.password = '';
      state.refreshToken = '';
      state.token = '';
    },
  },
});

export const {
  savelogin,
  savePassword,
  saveToken,
  clearLoginData,
  saveAllLoginData,
} = loginSlice.actions;
export default loginSlice.reducer;
