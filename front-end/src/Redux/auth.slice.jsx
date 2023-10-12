import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || ''
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login(state, action){
            state.token = action.payload.token;
            state.username = action.payload.username;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('username', action.payload.username);
        },
        logout(state){
            state.token = initialState.token;
            state.username = initialState.username;
            localStorage.removeItem('token')
            localStorage.removeItem('username')
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer;