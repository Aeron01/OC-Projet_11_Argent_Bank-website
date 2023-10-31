import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || '',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login(state, action){
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        logout(state){
            state.token = initialState.token;
            localStorage.removeItem('token');
        },
        setUsername(state, action){
            state.userName = action.payload.userName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            // state.email = action.payload.email
        },
    },
});

export const {login, logout, setUsername} = authSlice.actions
export default authSlice.reducer;