import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice"


export const Store = configureStore({
    reducer: {
        auth: userReducer,
    }
})