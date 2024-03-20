import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {  BASE_API, api } from '@/api/api'

interface LoginRequest {
    email: string
    password: string
}
interface LoginResult {
    error: number,
    detail: [],
    timestamp: number,
    access_token: string,
    refresh_token: string,
    token_expire: number,
    refresh_token_expire: number
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API,
        /* method: 'POST',
        prepareHeaders(headers) {
            headers.set('Authorization', `Bearer <token>`)
            return headers
        } */
    }),
    endpoints(builder) {
        return {
            /*  loginApp:builder.query<LoginResult,void>({
                query(login){
                    return 'auth/login'//api.login
                }
            }) */
            loginApp: builder.query<LoginResult, LoginRequest>({
                query: (body : LoginRequest) => ({
                    url: `auth/login`,
                    method: 'POST',
                    body: body
                })
            }),
            /*  loginAppPost: builder.mutation<LoginResult, LoginRequest>({
                query: (body : LoginRequest) => ({
                    url: api.login,
                    method: 'POST',
                    body: body
                })
            }) */
        }
    },
})

export const { useLoginAppQuery } = apiSlice