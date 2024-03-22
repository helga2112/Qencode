import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API, api } from '@api/api';
import {
  LoginRequest,
  LoginResponce,
  SetPasswordRequest,
  SetPasswordResponce,
  ResetPasswordRequest,
  ResetPasswordResponce,
} from '@model/api/apiLoginModel';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
  }),
  endpoints(builder) {
    return {
      loginAppPost: builder.mutation<LoginResponce, LoginRequest>({
        query: (body: LoginRequest) => ({
          url: api.login,
          method: 'POST',
          body: body,
        }),
      }),
      setPassword: builder.mutation<SetPasswordResponce, SetPasswordRequest>({
        query: (body: SetPasswordRequest) => ({
          url: api.setPassword,
          method: 'POST',
          body: body,
        }),
      }),
      setNewPassword: builder.mutation<
        ResetPasswordResponce,
        ResetPasswordRequest
      >({
        query: (body: ResetPasswordRequest) => ({
          url: api.resetPassword,
          method: 'POST',
          body: body,
        }),
      }),
    };
  },
});

export const {
  useLoginAppPostMutation,
  useSetNewPasswordMutation,
  useSetPasswordMutation,
} = apiSlice;
