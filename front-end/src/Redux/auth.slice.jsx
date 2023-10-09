import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || ''
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login(state, action){
            state.token= action.payload.token
            localStorage.setItem('token', action.payload.token)
        },
        logout(state){
            state.token= initialState.token
            localStorage.removeItem('token')
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer;