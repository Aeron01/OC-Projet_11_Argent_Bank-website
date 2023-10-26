import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || '',
    /*userName: localStorage.getItem('userName') || '',
    firstName: localStorage.getItem('firstName') || '',
    lastName: localStorage.getItem('lastName') || '',*/
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login(state, action){
            state.token = action.payload.token;
            /*state.userName = action.payload.userName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;*/
            localStorage.setItem('token', action.payload.token);
            /*localStorage.setItem('userName', action.payload.userName);
            localStorage.setItem('firstName', action.payload.firstName);
            localStorage.setItem('lastName', action.payload.lastName);*/
        },
        logout(state){
            state.token = initialState.token;
            /*state.userName = initialState.userName;
            state.firstName = initialState.firstName;
            state.lastName = initialState.lastName;*/
            localStorage.removeItem('token');
            /*localStorage.removeItem('userName');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');*/
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