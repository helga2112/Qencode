import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/login-slice'
import { apiSlice } from '../features/async-api/async-api-slice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;