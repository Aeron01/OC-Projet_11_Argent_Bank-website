import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";

const store = configureStore({
    reducer: {
        auth:authReducer,
    // name: nameReducer
    }
});

export default store;