import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type LoginState = {
    login: string
    password: string
    token: string
}

export const initialState: LoginState = {
    login: '',
    password: '',
    token: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        savelogin(state, action: PayloadAction<string>) {
            state.login = action.payload
        },
        savePassword(state, action: PayloadAction<string>) {
            state.password = action.payload
        },
        saveToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        }
    }
})

export const { savelogin, savePassword, saveToken } = loginSlice.actions
export default loginSlice.reducer
