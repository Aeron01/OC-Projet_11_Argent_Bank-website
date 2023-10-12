import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: localStorage.getItem('username') || ''
};

const nameSlice = createSlice({
    name: 'username',
    initialState,
    reducer :{
        username(state, action){
            state.name.username = action.payload.username,
            localStorage.setItem('username', action.payload.username)
        }
    }
});

export const {username} = nameSlice.actions
export default nameSlice.reducer;