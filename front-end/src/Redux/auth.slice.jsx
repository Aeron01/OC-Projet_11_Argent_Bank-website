import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || '',
    firstname: localStorage.getItem('firstname') || '',
    lastname: localStorage.getItem('lastname') || '',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login(state, action){
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('username', action.payload.username);
            localStorage.setItem('firstname', action.payload.firstname);
            localStorage.setItem('lastname', action.payload.lastname);
        },
        logout(state){
            state.token = initialState.token;
            state.username = initialState.username;
            state.firstname = initialState.firstname;
            state.lastname = initialState.lastname;
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('firstname');
            localStorage.removeItem('lastname');
        },
        setUsername(state, action){
            state.username = action.payload.username;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
        },
    },
});

export const {login, logout, setUsername} = authSlice.actions
export default authSlice.reducer;